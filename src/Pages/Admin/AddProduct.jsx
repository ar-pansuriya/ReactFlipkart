import React from 'react'
import { useState } from 'react'
import { Label, Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react'
import { FaCaretDown } from 'react-icons/fa'
import { RiExpandUpDownFill } from 'react-icons/ri'
import { IoClose } from 'react-icons/io5'
import { BsArrowsFullscreen, BsCloudUpload, BsTrash, BsUpload } from 'react-icons/bs'
import { MdCloudUpload } from 'react-icons/md'
import Sidebar from '../../Components/AdminComponents/Sidebar'

const color = [
    { id: 1, name: 'red' },
    { id: 2, name: 'blue' },
    { id: 3, name: 'black' },
    { id: 4, name: 'yellow' },
]

const size = [
    { id: 1, name: 'xs' },
    { id: 2, name: 'sm' },
    { id: 3, name: 'md' },
    { id: 4, name: 'lg' },
    { id: 5, name: 'xl' },
    { id: 6, name: 'xxl' },
]

const category = [
    { id: 1, name: 'Wade Cooper' },
    { id: 2, name: 'Arlene Mccoy' },
    { id: 3, name: 'Devon Webb' },
    { id: 4, name: 'Tom Cook' },
]

function AddProduct() {
    const [selected, setSelected] = useState(color[3])
    const [categories, setCategories] = useState(category[1])
    const [selectSize, setSelectSize] = useState(size[1])
    return (
        <>
            <Sidebar />
            <section>
                <main className="py-8 lg:pl-72">
                    <div className="px-4 sm:px-6 lg:px-8">
                        <h1 className='font-[700] text-[20px]'>Add Product</h1>
                        <form>
                            <div className="space-y-12">
                                <div className="">
                                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                                        <div className="sm:col-span-4">
                                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                Product title
                                            </label>
                                            <div className="mt-2">
                                                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-300 sm:max-w-md">
                                                    <input
                                                        type="text"
                                                        placeholder="Writing"
                                                        className="block flex-1 border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-span-full">
                                            <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                                                Description
                                            </label>
                                            <div className="mt-2">
                                                <textarea
                                                    id="about"
                                                    name="about"
                                                    placeholder='Type here...'
                                                    rows={3}
                                                    className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6 outline-none"
                                                    defaultValue={''}
                                                />
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-3">
                                            <label className="block text-sm font-medium leading-6 text-gray-900">
                                                Images
                                            </label>
                                            <div className="grid grid-cols-3 gap-4">
                                                {Array(2).fill(null).map((_, index) => (
                                                    <div key={index} className="relative group rounded-md overflow-hidden">
                                                        <img
                                                            src="https://tailwindui.com/img/ecommerce-images/category-page-05-image-card-01.jpg"
                                                            alt="Product Image"
                                                            className="w-full h-auto rounded-md border-2 border-gray-300 group-hover:opacity-50 transition duration-300"
                                                        />
                                                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition duration-300"></div>
                                                        <div className="absolute bottom-2 left-[1.5rem] flex gap-2 opacity-0 group-hover:opacity-100 transition duration-300">
                                                            <button className="bg-white text-gray-500 rounded-full p-1">
                                                                <BsArrowsFullscreen className="h-4 w-4" />
                                                            </button>
                                                            <button className="bg-white text-gray-500 rounded-full p-1">
                                                                <BsTrash className="h-4 w-4" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                                <div className="flex justify-center items-center col-span-1">
                                                    <div className="w-full max-w-xs flex flex-col items-center h-full">
                                                        <label className="relative w-full h-full image-class sm:h-[80px] xs:h-[60px] flex flex-col items-center justify-center border-2 border-gray-300 rounded-md bg-gray-100 hover:border-gray-300">
                                                            <input
                                                                type="file"
                                                                className="absolute inset-0 opacity-0 cursor-pointer"
                                                            />
                                                            <div className="flex flex-col items-center justify-center">
                                                                <MdCloudUpload className="h-6 w-6 text-gray-500" />
                                                                <span className="mt-2 text-gray-500">Upload</span>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>
                                        <div className="sm:col-span-3 gap-3">
                                            <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                Category
                                            </label>
                                            <div className="mt-2">
                                                <Listbox value={categories} onChange={setCategories}>
                                                    <div className="relative mt-2">
                                                        <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:text-sm sm:leading-6">
                                                            <span className="block truncate">{categories.name}</span>
                                                            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <RiExpandUpDownFill aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                                            </span>
                                                        </ListboxButton>

                                                        <ListboxOptions
                                                            transition
                                                            className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                        >
                                                            {category.map((person) => (
                                                                <ListboxOption
                                                                    key={person.id}
                                                                    value={person}
                                                                    className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-[#3069ea] data-[focus]:text-white"
                                                                >
                                                                    <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

                                                                </ListboxOption>
                                                            ))}
                                                        </ListboxOptions>
                                                    </div>
                                                </Listbox>
                                            </div>
                                        </div>

                                        <div className='sm:col-span-3 flex gap-2'>
                                            <div className="w-1/2">
                                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Color
                                                </label>
                                                <div className="mt-2">
                                                    <Listbox value={selected} onChange={setSelected}>
                                                        <div className="relative mt-2">
                                                            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:text-sm sm:leading-6">
                                                                <span className="block truncate">{selected.name}</span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <RiExpandUpDownFill aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                                                </span>
                                                            </ListboxButton>

                                                            <ListboxOptions
                                                                transition
                                                                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                            >
                                                                {color.map((person) => (
                                                                    <ListboxOption
                                                                        key={person.id}
                                                                        value={person}
                                                                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-[#3069ea] data-[focus]:text-white"
                                                                    >
                                                                        <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

                                                                    </ListboxOption>
                                                                ))}
                                                            </ListboxOptions>
                                                        </div>
                                                    </Listbox>
                                                </div>
                                            </div>
                                            <div className="w-1/2">
                                                <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Size
                                                </label>
                                                <div className="mt-2">
                                                    <Listbox value={selectSize} onChange={setSelectSize}>
                                                        <div className="relative mt-2">
                                                            <ListboxButton className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 sm:text-sm sm:leading-6">
                                                                <span className="block truncate">{selectSize.name}</span>
                                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                    <RiExpandUpDownFill aria-hidden="true" className="h-5 w-5 text-gray-400" />
                                                                </span>
                                                            </ListboxButton>

                                                            <ListboxOptions
                                                                transition
                                                                className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
                                                            >
                                                                {size.map((person) => (
                                                                    <ListboxOption
                                                                        key={person.id}
                                                                        value={person}
                                                                        className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-[#3069ea] data-[focus]:text-white"
                                                                    >
                                                                        <span className="block truncate font-normal group-data-[selected]:font-semibold">{person.name}</span>

                                                                    </ListboxOption>
                                                                ))}
                                                            </ListboxOptions>
                                                        </div>
                                                    </Listbox>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="sm:col-span-4 flex gap-2">
                                            <div>
                                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Price(₹)
                                                </label>
                                                <div className="mt-2 flex gap-2 flex-wrap">
                                                    <div className="rounded-md flex-1 min-w-[calc(50%-0.25rem)] shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-300 sm:max-w-md">
                                                        <input
                                                            type="text"
                                                            placeholder="Type here"
                                                            className="block w-full border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                                    Sub Price(₹)
                                                </label>
                                                <div className="mt-2 flex gap-2 flex-wrap">
                                                    <div className="rounded-md flex-1 min-w-[calc(50%-0.25rem)] shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-gray-300 sm:max-w-md">
                                                        <input
                                                            type="text"
                                                            placeholder="Type here"
                                                            className="block w-full border-0 bg-transparent p-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="mt-6 flex items-center justify-start gap-x-6">

                                <button
                                    type="submit"
                                    className="rounded-md bg-[#3069ea] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Submit item
                                </button>
                            </div>
                        </form>
                    </div>
                </main>
            </section>
        </>
    )
}

export default AddProduct
