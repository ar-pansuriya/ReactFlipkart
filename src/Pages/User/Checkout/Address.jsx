import React, { useState } from 'react'
import { FaBriefcase, FaBuilding, FaHome } from 'react-icons/fa'
import { GoArrowLeft } from 'react-icons/go'
import { MdOutlineMyLocation } from 'react-icons/md'

export const Address = () => {
    const [selected, setSelected] = useState('Home')
    return (
        <div className="max-w-md mx-auto bg-white">
            <div className='px-4 shadow-[0_4px_8px_-8px]'>
                <h2 className="flex items-center gap-3 text-[16px] font-normal h-[52px] mb-2"><GoArrowLeft className='text-[24px]' /> Add delivery address</h2>
                <div className='flex flex-col pb-3 px-4'>
                    <div className='flex items-center gap-3 px-[11px]'>
                        <div className='bg-[#2874f0] min-w-[19px] h-[19px] rounded-full flex justify-center items-center text-[12px] text-white font-semibold'>1</div>
                        <div className='bg-[#dbdbdb] w-full h-[2px]'></div>
                        <div className='text-[#2874f0] border-[#2874f0] border-[1px] min-w-[19px] h-[19px] rounded-full flex justify-center items-center text-[12px] font-semibold'>2</div>
                        <div className='bg-[#dbdbdb] w-full h-[2px]'></div>
                        <div className='text-[#2874f0] border-[#2874f0] border-[1px] min-w-[19px] h-[19px] rounded-full flex justify-center items-center text-[12px] font-semibold'>3</div>
                    </div>
                    <div className='flex justify-between'>
                        <p className='text-[12px] whitespace-nowrap'>Address</p>
                        <p className='text-[12px] whitespace-nowrap'>Order Summary</p>
                        <p className='text-[12px] whitespace-nowrap'>Payment</p>
                    </div>
                </div>
            </div>
            <div className='px-4 pt-6'>
                <div>
                    <div className='mb-3'>
                        <label className="block text-[12px] font-medium text-[#878787]">Full Name (Required)</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-[14px] text-[#212121]"
                            required
                        />
                    </div>
                    <div className='mb-3'>
                        <label className="block text-[12px] font-medium text-[#878787]">Phone number (Required)</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-[14px] text-[#212121]"
                            required
                            value="6355975935"
                        />
                    </div>
                    <div className="flex items-end gap-3 mb-3">
                        <div className='w-1/2'>
                            <label className="block text-[12px] font-medium text-[#878787]">Pincode (Required)</label>
                            <div className="flex">
                                <input
                                    type="text"
                                    className="flex-grow mt-1 block w-full p-2 border border-gray-300 rounded-md text-[14px] text-[#212121]"
                                    required
                                />
                            </div>
                        </div>
                        <button className="px-2 py-2 gap-2 bg-[#2874f0] text-white text-[14px] rounded-md flex items-center justify-center w-1/2"><MdOutlineMyLocation className='text-white text-[18px]' />
                            Use my location</button>
                    </div>
                    <div className='flex items-center gap-3 mb-3'>
                        <div className='w-1/2'>
                            <label className="block text-[12px] font-medium text-[#878787]">State (Required)</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-[14px] text-[#212121]"
                                required
                            />
                        </div>
                        <div className='w-1/2'>
                            <label className="block text-[12px] font-medium text-[#878787]">City (Required)</label>
                            <input
                                type="text"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-[14px] text-[#212121]"
                                required
                            />
                        </div>
                    </div>
                    <div className='mb-3'>
                        <label className="block text-[12px] font-medium text-[#878787]">House No., Building Name (Required)</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-[14px] text-[#212121]"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-[12px] font-medium text-[#878787]">Road name, Area, Colony (Required)</label>
                        <input
                            type="text"
                            className="mt-1 block w-full p-2 border border-gray-300 rounded-md text-[14px] text-[#212121]"
                            required
                        />
                    </div>
                    <div className='mt-3'>
                        <button className="text-[#2874f0] text-[12px] font-medium">+ Add Nearby Famous Shop/Mall/Landmark</button>
                    </div>
                    <p className='text-[#878787] text-[12px] mt-3 pb-2'>Type of address</p>
                    <div className="flex space-x-4 mb-3">
                        <button onClick={() => setSelected('Home')} className={`${selected === 'Home' ? 'border border-[#2874f0] text-[#2874f0]' : 'border border-[#dbdbdb] text-black'} flex items-center px-4 py-2 rounded-[16px] h-[32px] text-[14px]`}>
                            <FaHome className={`${selected === 'Home' ? 'text-[#2874f0]' : 'text-[#646464]'} mr-2 text-[18px]`} />
                            Home
                        </button>
                        <button onClick={() => setSelected('Work')} className={`${selected === 'Work' ? 'border border-[#2874f0] text-[#2874f0]' : 'border border-[#dbdbdb] text-black'} flex items-center px-4 py-2 rounded-[16px] h-[32px] text-[14px]`}>
                            <FaBuilding className={`${selected === 'Work' ? 'text-[#2874f0]' : 'text-[#646464]'} mr-2 text-[18px]`} />
                            Work
                        </button>
                    </div>
                    <div>
                        <button className="w-full px-4 h-[46px] text-[15px] bg-[#ff5800] text-white rounded-[2px]">
                            Save Address
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
