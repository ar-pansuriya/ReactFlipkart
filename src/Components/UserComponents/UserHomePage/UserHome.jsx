import React, { useEffect } from 'react';
import Slider from "react-slick";
import { FaChevronRight } from "react-icons/fa6";
import { RiStarFill } from "react-icons/ri";
import Navbar from '../../../Components/UserComponents/Navbar/Navbar';
import Product from '/Images/product.jpeg';
import ProductLogo from '/Images/product-logo.png';
import Shoes from '/Images/womanshouse.webp';
import Laptop from '/Images/laptop.webp';
import Shirt from '/Images/menshirt.webp';
import { IoHeart } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../../Utils/api';
import { addCategories, addCategoryPage } from '../../../ReduxToolKit/AllSlice';

export default function UserHome() {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    const ProductDetail = [
        {}, {}, {}, {}, {}, {}, {}, {},
    ]
    const SliderData = [
        {
            img: "https://rukminim1.flixcart.com/fk-p-flap/480/210/image/cf11375bb7faa557.jpeg?q=20"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/480/210/image/3aca078d54a69684.jpg?q=20'
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/480/210/image/9b60c512f8f1702e.jpeg?q=20'
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/480/210/image/9ad071327d8e809d.jpeg?q=20'
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/480/210/image/664b3101f9bd994a.jpeg?q=20'
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/480/210/image/4aad095f9ca5ebd9.jpg?q=20'
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/480/210/image/97110748ab7d0435.jpeg?q=20'
        },
    ]
    const ProductData = [
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/ff3b890d1c9e6ae7.jpg?q=90',
            description: "All"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/e7b356efd1b6596d.jpg?q=90',
            description: "Mobiles"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/7316131182d36e7c.jpg?q=90',
            description: "Electronics"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/f78cecffccfce82b.jpg?q=90',
            description: "Fashion"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/b20d1fa39b012fd8.jpg?q=90',
            description: "TVs & Appliances"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/c99cc03a4e01b6e4.jpg?q=90',
            description: "Beauty & Food"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/9310ea1ac3ce9b7a.jpg?q=90',
            description: "Smart Gadgest"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/a09927df565efce7.jpg?q=90',
            description: "Home & Furniture"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/ff3b890d1c9e6ae7.jpg?q=90',
            description: "All"
        },
        {
            img: 'https://rukminim1.flixcart.com/fk-p-flap/220/320/image/c99cc03a4e01b6e4.jpg?q=90',
            description: "Toys & Games"
        }
    ]
    const dispatch = useDispatch();

    const categories = useSelector(state => state.AllStore.categories);
    console.log(categories, 'categories');

    // useEffect(() => {
    //     const fetchCategories = async () => {
    //         try {
    //             if (categories.length <= 0) {
    //                 const { data } = await api.get('/categories');
    //                 console.log(data);
    //                 dispatch(addCategories(data.data));
    //             }
    //         } catch (error) {
    //             console.error('Failed to fetch categories', error);
    //         }
    //     };
    //     fetchCategories();
    // }, [categories, dispatch]);

    const handleLinkClick = (name) => {
        let linkdata;
        if (name === 'All') {
            linkdata = 'All'
        } else {
            const newdata = categories.find((n) => n.name === name);
            linkdata = newdata.id
        }
        dispatch(addCategoryPage(linkdata));
    };

    return (
        <div className='bg-[#fff]'>
            <Navbar />
            <div className='pt-[20px] bg-[#f9d6c0] mt-4'>
                <div className='slider-main'>
                    <Slider {...settings}>
                        {SliderData.map((val, index) =>
                            <div key={index}>
                                <img src={val.img} alt='slider-img' className='w-full' />
                            </div>
                        )}
                    </Slider>
                </div>
            </div>
            <Link to={'/category'} className='flex items-center justify-center flex-wrap pb-[20px] bg-[#f9d6c0]'>
                {ProductData.map((val, index) =>
                    <img key={index} onClick={() => handleLinkClick(val.description)} src={val.img} alt="product1" className='w-[70px]' />
                )}
            </Link>
            <div className='flex justify-between items-center p-[12px_16px]'>
                <h2 className='text-[#212121] font-semibold text-[17px]'>Recently Viewed Stores</h2>
                <button className='bg-[#2a55e5] rounded-full w-[24px] h-[24px] flex justify-center items-center text-white text-[12px]'><FaChevronRight />
                </button>
            </div>
            <div className='flex gap-2 mb-4 px-4 overflow-x-auto'>
                <div className='p-1 border-[1px] border-[rgb(204,204,204)] rounded'>
                    <div className='w-[100px] h-[100px] p-1'>
                        <img src={Shoes} alt='Laptop' className='w-full h-full object-cover' />
                    </div>
                    <p className='text-[#333333] text-[12px] mt-1 text-center max-w-[100px]'>Women's Sports Shoes</p>
                </div>
                <div className='p-1 border-[1px] border-[rgb(204,204,204)] rounded'>
                    <div className='w-[100px] h-[100px] p-1'>
                        <img src={Laptop} alt='Laptop' className='w-full h-full object-cover' />
                    </div>
                    <p className='text-[#333333] text-[12px] mt-1 text-center max-w-[100px]'>Gaming Laptop</p>
                </div>
                <div className='p-1 border-[1px] border-[rgb(204,204,204)] rounded'>
                    <div className='w-[100px] h-[100px] p-1'>
                        <img src={Shirt} alt='Laptop' className='w-full h-full object-cover' />
                    </div>
                    <p className='text-[#333333] text-[12px] mt-1 text-center object-top object-cover max-w-[100px] break-words'>Men's Shirt and Trouser Fabrics</p>
                </div>
            </div>
            <div className='grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 lg:gap-[30px] max-w-[1600px] mx-auto sm:px-[40px] md:my-[30px]'>
                {ProductDetail.map((data, index) =>
                    <Link key={index} to={'/product-detail'} className="flex flex-col border-[.5px] border-gray-200 lg:rounded-md bg-white">
                        <div className='relative'>
                            <img src={Product} alt="T-shirt" className="w-full sm:h-[300px] h-[250px] object-cover object-top" />
                            <button className='text-[#fff] text-[24px] absolute right-[8px] top-[8px] heart-icon'><IoHeart /></button>
                        </div>
                        <div className="flex flex-col p-[10px_4px_8px_8px] overflow-hidden">
                            <p className='text-[10px] text-[#b8bbbf]'>Sponsered</p>
                            <p className='text-[#212121] text-[14px]'>vuriq</p>
                            <div className="flex sm:gap-5 gap-2 items-center mb-1">
                                <span className="text-[#4bb550] text-[14px] font-semibold">85% off</span>
                                <span className="text-[14px] text-[#878787] line-through font-semibold">₹999</span>
                                <span className="text-[14px] font-bold text-[#000]">₹148</span>
                            </div>
                            <div className='flex items-center gap-[2px]'>
                                <div className='flex items-center'>
                                    <RiStarFill className='text-[#008c00] text-[16px]' />
                                    <RiStarFill className='text-[#008c00] text-[16px]' />
                                    <RiStarFill className='text-[#008c00] text-[16px]' />
                                    <RiStarFill className='text-[#008c00] text-[16px]' />
                                    <RiStarFill className='text-[#e1e1e1] text-[16px]' />
                                </div>
                                <span className='text-[#878787] text-[12px]'>(641)</span>
                                <img src={ProductLogo} alt='ProductLogo' className='w-[55px]' />
                            </div>
                            <div className="flex justify-between items-center mt-[2px]">
                                <span className="text-[#000] text-[12px]">Free delivery</span>
                            </div>
                        </div>
                    </Link>
                )}
            </div>
        </div>
    )
}
