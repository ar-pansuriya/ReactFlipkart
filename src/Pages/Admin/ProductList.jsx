import React, { useEffect } from 'react'
import { IoPencil } from 'react-icons/io5'
import { MdDelete } from 'react-icons/md'
import { FaArrowRightArrowLeft, FaMagnifyingGlass } from 'react-icons/fa6'
import { FaDownload, FaPlus } from 'react-icons/fa'
import Sidebar from '../../Components/AdminComponents/Sidebar'
import { useDispatch, useSelector } from 'react-redux'
import { addAdminProduct, addCategories } from '../../ReduxToolKit/AllSlice'
import api from '../../Utils/api'
import { useNavigate } from 'react-router-dom'


const products = [
    {
        id: 1,
        name: 'Organize Basic Set',
        price: '$149',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 2,
        name: 'Organize Pen Holder',
        price: '$15',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-02.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 3,
        name: 'Organize Sticky Note',
        price: '$15',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 4,
        name: 'Organize Phone Holder',
        price: '$15',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 5,
        name: 'Organize Sticky Note',
        price: '$15',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-03.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
    {
        id: 6,
        name: 'Organize Phone Holder',
        price: '$15',
        imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-04.jpg',
        imageAlt: 'TODO',
        href: '#',
    },
]

function ProductList() {
    const dispatch = useDispatch();
    const navigate=useNavigate()

  const products = useSelector(state => state.AllStore.adminProduct);
  console.log(products, 'products');

  useEffect(() => {
    const fetchProducts = async () => {
        try {
         const token=localStorage.getItem('token')
          
                const { data } = await api.get('/products',token);
                console.log("data",data)
               
                console.log(data);
                dispatch(addAdminProduct(data.data));
        } catch (error) {
            const token = error?.response?.data?.token
            if(!token){
                localStorage.removeItem('token')
                return navigate('/admin')
            }
            console.error('Failed to fetch products', error);
        }
    };
    fetchProducts();
}, []);


    return (
        <>
            <Sidebar />
            <main className="py-8 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="bg-white">
                        <div className="">
                            <h1 className='font-[700] text-[20px] pb-4'>Products grid</h1>

                            <div className="flex flex-col space-y-2 mb-2">
                                <div className="flex flex-wrap space-x-4 mb-2">
                                    <button className="flex items-center px-3 py-2 rounded-md font-semibold border-2 border-gray-300 focus:outline-none focus:ring-opacity-75 text-gray-700 bg-white text-sm">
                                        <FaDownload className="h-4 w-4 mr-2 text-gray-400" />
                                        Export
                                    </button>

                                    <button className="flex items-center text-white px-3 py-2 rounded-md border-2 bg-[#3069ea] border-[#3069ea] focus:outline-none focus:ring-opacity-75 text-sm">
                                        <FaPlus className="h-4 w-4 mr-2" />
                                        Create New
                                    </button>
                                </div>

                                <div className="flex flex-col space-y-2 mb-3">
                                    <div className="border-2 p-2 rounded-md">
                                        <label htmlFor="search-field" className="sr-only">
                                            Search
                                        </label>
                                        <input
                                            id="search-field"
                                            name="search"
                                            type="search"
                                            placeholder="Search..."
                                            className="block w-full border-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 text-sm"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <div className="flex-1">
                                            <select
                                                className="w-full rounded-md border-2 py-1.5 px-3 text-gray-500 ring-1 ring-inset ring-gray-300 text-sm"
                                            >
                                                <option>Category</option>
                                                <option>Canada</option>
                                                <option>Mexico</option>
                                            </select>
                                        </div>
                                        <div className="flex-1">
                                            <button className="relative block w-full rounded-md border-2 py-1.5 px-3 text-gray-900 ring-1 ring-inset ring-gray-300 bg-white text-sm">
                                                <FaArrowRightArrowLeft className="absolute top-1/2 right-3 h-4 w-4 text-gray-500 transform -translate-y-1/2 rotate-90" />
                                                <span className="relative text-gray-500">Last added</span>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>



                            <div className="-mx-px grid grid-cols-1 gap-4 sm:mx-0 md:grid-cols-3 lg:grid-cols-4">
                                {products.map((product,index) => (
                                    <div key={index} className="group relative border-2 rounded-lg border-gray-200 p-4 sm:p-6">
                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-200 group-hover:opacity-75">
                                            <img
                                                alt={`http://localhost:3000${product.productImages[0]}`}
                                                src={`http://localhost:3000${product.productImages[0]}`}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                        <div className="pb-4 pt-10 text-center">
                                            <h3 className="text-sm font-medium text-gray-900 text-start">
                                                <a href={product.href}>
                                                    <span aria-hidden="true" className="absolute inset-0" />
                                                    {product.productName}
                                                </a>
                                            </h3>
                                            <p className="mt-2 text-base font-medium text-gray-900 text-start">{product.price}</p>
                                            <div className="flex flex-wrap justify-start gap-2 mt-2">
                                                <button
                                                    className="flex items-center px-3 py-1 border-2 border-gray-100 font-semibold rounded-lg bg-white hover:bg-gray-100"
                                                >
                                                    <IoPencil className="h-4 w-4 mr-2" />
                                                    Edit
                                                </button>
                                                <button
                                                    className="flex items-center px-3 py-1 border-2 border-gray-100 font-semibold rounded-lg bg-white hover:bg-red-100 text-red-500"
                                                >
                                                    <MdDelete className="h-4 w-4 mr-2" />
                                                    Delete
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProductList
