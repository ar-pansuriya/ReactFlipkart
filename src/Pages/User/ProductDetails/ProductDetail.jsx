import React, { useState } from 'react';
import Flipkart from '../../../../public/Images/flipkart.png';
import { IoChevronDownOutline, IoHeart, IoReturnDownBack, IoSearch } from 'react-icons/io5';
import { HiMiniArrowLeft } from 'react-icons/hi2';
import { BsCart3 } from 'react-icons/bs';
import Product from '../../../../public/Images/product.jpeg';
import Slider from 'react-slick';
import { IoIosTrendingUp } from 'react-icons/io';
import { LuTrendingUp } from 'react-icons/lu';
import { RiDiscountPercentFill, RiStarFill } from 'react-icons/ri';
import { FaAngleDown, FaCheck, FaChevronRight } from 'react-icons/fa';
import { LiaRulerVerticalSolid, LiaRupeeSignSolid } from 'react-icons/lia';
import { PiTruckLight } from 'react-icons/pi';
import { MdChevronRight } from 'react-icons/md';
import ProductLogo from '../../../../public/Images/product-logo.png';
import Coin from '../../../../public/Images/product-detail/coin.png'
import Coin2 from '../../../../public/Images/product-detail/coin2.png'
import { GoChevronRight } from 'react-icons/go';

const SliderData = [
    {
        img: Product
    },
    {
        img: Product
    },
    {
        img: Product
    },
    {
        img: Product
    },
]
const ProductDetails = [
    {}, {}, {}, {}, {}, {}, {}, {},
]
export default function ProductDetail() {
    const [highlight, setHighlight] = useState(false)

    console.log(highlight, '===============');

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <div>
            <div className='flex justify-between items-center h-[52px]'>
                <div className='flex items-center'>
                    <button className='text-[24px] w-[42px] flex justify-center'><HiMiniArrowLeft /></button>
                    <div className='flex gap-[12px] items-center'>
                        <img src={Flipkart} alt='Flipkart' className='w-[23px]' />
                    </div>
                </div>
                <div className='flex'>
                    <button className='w-[42px] flex justify-center'>
                        <IoSearch className='text-[20px]' />
                    </button>
                    <button className='text-[22px] w-[42px] flex justify-center'><BsCart3 /></button>
                    <p className='w-[90px] flex justify-center'>Login</p>
                </div>
            </div>
            <div className='slider-main product-detail-slider pb-[60px]'>
                <div className='px-[30px]'>
                    <Slider {...settings}>
                        {SliderData.map((val, index) =>
                            <div key={index}>
                                <img src={val.img} alt='slider-img' className='w-full' />
                            </div>
                        )}
                    </Slider>
                </div>
                <div>
                    <div className='flex items-center p-[5px_12px_16px] gap-2 mt-4'>
                        <div className='bg-[#e9f9ea] text-[#108934] w-[24px] h-[24px] flex justify-center items-center rounded-full'>
                            <LuTrendingUp />
                        </div>
                        <p className='text-[14px]'><span>1,300+</span> people ordered this in the last 30 days</p>
                    </div>
                    <div className='flex justify-between items-center p-[0_16px_8px]'>
                        <div className='flex items-center'>
                            <p className='text-[14px] mr-1'>Color: </p>
                            <p className='text-[14px]'>Green </p>
                        </div>
                        <div className='flex items-center'>
                            <p className='text-[12px] text-[#878787]'>Available Color: </p>
                            <p className='text-[12px] text-[#878787]'>3</p>
                        </div>
                    </div>
                </div>
                <div className='overflow-auto'>
                    <div className='px-[12px] pb-1 flex w-full'>
                        <div className='shadow-[0px_1px_3px_rgba(0,0,0,0.16)] bg-white m-[2px_4px_0] min-w-[76px] h-[76px] px-2 rounded-[4px]'>
                            <img src={Product} alt='Product' className='w-full h-full object-cover object-top' />
                        </div>
                        <div className='shadow-[0px_1px_3px_rgba(0,0,0,0.16)] bg-white m-[2px_4px_0] min-w-[76px] h-[76px] px-2 rounded-[4px]'>
                            <img src={Product} alt='Product' className='w-full h-full object-cover object-top' />
                        </div>
                        <div className='shadow-[0px_1px_3px_rgba(0,0,0,0.16)] bg-white m-[2px_4px_0] min-w-[76px] h-[76px] px-2 rounded-[4px]'>
                            <img src={Product} alt='Product' className='w-full h-full object-cover object-top' />
                        </div>
                    </div>
                </div>
                <div className='px-4 pt-[12px]'>
                    <a href="#" className='text-[#212121] text-[14px] font-semibold underline'>View more from mokshi</a>
                    <p className='text-[14px] mt-[6px] mb-1'><span className='font-semibold'>mokshi</span> Women Printed Viscose Rayon A-line Kurta (Green)</p>
                    <div className='flex gap-2 items-center'>
                        <div className='flex gap-[2px]'>
                            <RiStarFill className='text-[#000] text-[14px]' />
                            <RiStarFill className='text-[#000] text-[14px]' />
                            <RiStarFill className='text-[#000] text-[14px]' />
                            <RiStarFill className='text-[#000] text-[14px]' />
                            <RiStarFill className='text-[#e1e1e1] text-[14px]' />
                        </div>
                        <span className='text-[#111112] text-[12px] font-semibold'>Very Good  • </span>
                        <span className='text-[#111112] text-[12px]'>1,65,807 ratings</span>
                    </div>
                </div>
                <div className='px-[16px] mt-[24px]'>
                    <div className='flex'>
                        <button className='text-white bg-[rgb(16,137,52)] p-[5px_6px_6px] text-[12px] relative pt-[8px] font-semibold'>Lowest Price in 30 days</button>
                        <div class="w-0 h-0 border-b-[25px] border-b-[#108934] border-r-[12.5px] border-r-transparent border-t-solid border-l-solid"></div>
                    </div>
                    <div className='bg-[#e7f8ec] flex gap-2 p-[10px_16px] rounded mt-2'>
                        <p className='text-[#108934] text-[20px] font-semibold'>85% off </p>
                        <span className='text-[20px] text-[#717478] font-semibold line-through'>1,699 </span>
                        <span className='text-[20px] font-semibold'>₹252</span>
                    </div>
                    <div className='border-[1px] border-[#e0e0e0] rounded mt-3 p-[8px_12px] flex justify-between items-start'>
                        <div className='flex gap-2'>
                            <div className='text-[#0e5c28] border-[1px] border-[#aaa] rounded-full w-[21px] h-[21px] flex justify-center items-center'>
                                <RiDiscountPercentFill />
                            </div>
                            <div>
                                <p className='text-[14px]'>Get ₹47 extra Off</p>
                                <p className='text-[12px] mt-[6px]'>Ends in  <span className='text-[#d23c33]'> 08d 06h 41m 12s </span></p>
                            </div>
                        </div>
                        <div className='flex items-center text-[#108934] text-[14px] gap-1'>
                            <FaCheck />
                            <p>Applied</p>
                        </div>
                    </div>
                    <p className='text-[12px] mt-4'>Free delivery by <span> 23rd Jul</span></p>
                </div>
                <div className='bg-white shadow-[rgba(0,0,0,0.1)_0px_1px_6px_0px] px-[14px] pb-[24px] mb-2'>
                    <div className='flex justify-between h-[46px] items-center py-2'>
                        <p className='text-[17px] text-black font-semibold h-[30px]'>Size: L</p>
                        <div className='flex items-center gap-2'>
                            <LiaRulerVerticalSolid className='text-[26px] rotate-[90deg]' />
                            <a href="#" className='underline text-[#212121] text-[12px] font-semibold'>Size Chart</a>
                        </div>
                    </div>
                    <p className='mx-2 mt-2 mb-4 text-[14px] truncate'>Chest/Bust 40 inch  |  Shoulder 15 inch  |  Waist 38 inch</p>
                    <div className='flex items-center gap-2'>
                        <button className='w-[48px] h-[48px] relative rounded-full border-[#d5d7db] border-[1px] flex justify-center items-center text-[#b8bbbf] text-[18px]'>
                            <span className='block text-[14px] mt-[-2px]'>XS</span>
                            <div className='absolute w-full h-[1px] bg-[#d5d7db]'></div>
                        </button>
                        <button className='w-[48px] h-[48px] relative rounded-full border-[#000] border-[1px] flex justify-center items-center text-[#000] text-[18px]'>
                            <span className='block text-[14px] mt-[-2px]'>S</span>
                        </button>
                        <button className='w-[48px] h-[48px] relative rounded-full border-[#000] border-[1px] flex justify-center items-center text-[#000] text-[18px]'>
                            <span className='block text-[14px] mt-[-2px]'>M</span>
                        </button>
                        <button className='w-[48px] h-[48px] relative rounded-full border-[#000] border-[1px] bg-black flex justify-center items-center text-[#fff] text-[18px]'>
                            <span className='block text-[14px] mt-[-2px]'>L</span>
                        </button>
                        <button className='w-[48px] h-[48px] relative rounded-full border-[#000] border-[1px] flex justify-center items-center text-[#000] text-[18px]'>
                            <span className='block text-[14px] mt-[-2px]'>XL</span>
                        </button>
                        <button className='w-[48px] h-[48px] relative rounded-full border-[#000] border-[1px] flex justify-center items-center text-[#000] text-[18px]'>
                            <span className='block text-[14px] mt-[-2px]'>XXL</span>
                        </button>
                    </div>
                </div>
                <div className='bg-[#fff] shadow-[rgba(0,0,0,0.1)_0px_1px_6px_0px]'>
                    <div className='p-4 border-b-[#e3e3e3] border-b-[1px] flex justify-between items-center'>
                        <p className='text-[14px]'>
                            Deliver to: <span>Davanagere - 577006</span>
                        </p>
                        <button className='border-[#dbdbdb] border-[1px] rounded text-[#2a55e5] text-[14px] p-[8px_16px] font-semibold h-[34px] flex justify-center items-center'>Change </button>
                    </div>
                    <div className='p-[4px_12px_8px_16px]'>
                        <div className='flex justify-between items-center gap-2 py-[6px]'>
                            <div className='flex items-center gap-[16px]'>
                                <PiTruckLight className='text-[#a0a0a2] text-[24px]' />
                                <div className='text-[14px]'>
                                    <span className='text-[#008c00] text-[14px] font-semibold'>FREE Delivery </span>
                                    <span className='text-[#717478]'>₹ 40 </span>
                                    <span> • </span>
                                    <span className='text-[#212121]'>Delivery in <br /> 2 Days, Monday<br /> <span className='text-[#606265]'>If ordered within</span></span>
                                    <span className='text-[#c70055]'> 01h 30m  04s</span>
                                </div>
                            </div>
                            <button><MdChevronRight /></button>
                        </div>
                        <div className='flex justify-between items-center gap-2 py-[6px]'>
                            <div className='flex items-center gap-[16px]'>
                                <IoReturnDownBack className='text-[#a0a0a2] text-[24px]' />
                                <div className='text-[14px]'>
                                    <span className='text-[#212121]'>10 Days Return Policy</span>
                                </div>
                            </div>
                            <button><MdChevronRight /></button>
                        </div>
                        <div className='flex justify-between items-center gap-2 py-[6px]'>
                            <div className='flex items-center gap-[16px]'>
                                <LiaRupeeSignSolid className='text-[#a0a0a2] text-[24px]' />
                                <div className='text-[14px]'>
                                    <span className='text-[#212121]'>Cash on Delivery Available</span>
                                </div>
                            </div>
                            <button><MdChevronRight /></button>
                        </div>
                    </div>
                </div>
                <div className='bg-[#fff] shadow-[rgba(0,0,0,0.1)_0px_1px_6px_0px] flex justify-between items-center gap-2 my-2 p-[12px_18px_12px_16px]'>
                    <span className='text-[#212121] text-[14px]'>All Offers & Coupons</span>
                    <button className='text-[20px]'><GoChevronRight /></button>
                </div>
                <div className='bg-[#fff] shadow-[rgba(0,0,0,0.1)_0px_1px_6px_0px]'>
                    <div class="flex justify-between items-center p-[12px_16px] ">
                        <h2 class="text-[#212121] font-semibold text-[17px]">Similar Products</h2>
                        <button class="rounded-full w-[24px] h-[24px] flex justify-center items-center text-[#2a55e5] text-[12px] border-[1px] border-[#aaa]"><FaChevronRight /></button>
                    </div>
                    <div className='flex overflow-auto gap-2 px-[16px] pb-4'>
                        {ProductDetails.map((data, index) =>
                            <div class="flex flex-col border-[.5px] border-gray-200 lg:rounded-md bg-white min-w-[148px] w-full rounded">
                                <div className='relative px-[14px]'>
                                    <img src={Product} alt="T-shirt" class="w-full sm:h-[300px] h-[163px] object-cover object-top" />
                                </div>
                                <div class="flex flex-col p-[10px_4px_8px_8px] overflow-hidden">
                                    <p className='text-[10px] text-[#b8bbbf]'>Sponsered</p>
                                    <p className='text-[#212121] text-[14px] truncate'>Women Printed Viscose Rayon Straight Kurta</p>
                                    <div class="flex sm:gap-5 gap-2 items-center mb-1">
                                        <span class="text-[14px] text-[#878787] line-through">₹999</span>
                                        <span class="text-[14px] text-[#000]">₹148</span>
                                    </div>
                                    <div className='flex gap-3 items-center'>
                                        <span class="text-[#4bb550] text-[14px] block mb-1">85% off</span>
                                        <img src={ProductLogo} alt='ProductLogo' className='w-[50px]' />
                                    </div>
                                    <div className='flex items-center gap-[2px]'>
                                        <div className='flex items-center'>
                                            <RiStarFill className='text-[#008c00] text-[14px]' />
                                            <RiStarFill className='text-[#008c00] text-[14px]' />
                                            <RiStarFill className='text-[#008c00] text-[14px]' />
                                            <RiStarFill className='text-[#008c00] text-[14px]' />
                                            <RiStarFill className='text-[#e1e1e1] text-[14px]' />
                                        </div>
                                        <span className='text-[#878787] text-[12px]'>(641)</span>
                                    </div>
                                    <div class="flex justify-between items-center mt-[2px]">
                                        <span class="text-[#000] text-[12px]">Free delivery</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className='bg-[#fff] shadow-[rgba(0,0,0,0.1)_0px_1px_6px_0px] mt-2 p-[8px_8px_8px_16px]'>
                    <div className='border-b-[#eaeaea] border-b-[1px] pb-2'>
                        <div className='text-[14px] text-[#212121] flex items-center'><img src={Coin} alt='Coin' className='w-[24px] mr-3' /> You will earn <img src={Coin2} alt='Coin' className='w-[14px] mx-1' /> 4 SuperCoins cashback</div>
                    </div>
                    <p className='text-[12px] text-[#212121] mt-2'>Use it to save on your next order. <a href="#" className='text-[#2a55e5] font-semibold'>How?</a></p>
                </div>
                <div className='bg-[#fff] shadow-[rgba(0,0,0,0.1)_0px_1px_6px_0px] my-2'>
                    <div onClick={() => setHighlight(!highlight)} className='flex justify-between items-center gap-2 p-4'>
                        <span className='text-[#212121] text-[14px]'>Product Highlights</span>
                        <button className='text-[18px]'><IoChevronDownOutline /></button>
                    </div>
                    {highlight &&
                        <div className='p-4 pt-0'>
                            <p className='mb-2 text-[14px]'>About the Brand </p>
                            <p className='text-[#212121] text-[14px] font-medium'>
                                Mokshi, a Women's Clothing Brand in Jaipur is one of the leading businesses in the Readymade Garment Retailers which offers excellent Indian wear collections fo...
                            </p>
                        </div>
                    }

                    <div className='flex justify-between items-center gap-2 p-4'>
                        <span className='text-[#212121] text-[14px]'>All Offers & Coupons</span>
                        <button className='text-[20px]'><GoChevronRight /></button>
                    </div>
                </div>
                <div className='bg-[#fff] shadow-[rgba(0,0,0,0.1)_0px_1px_6px_0px]'>
                    <div className='flex justify-between items-center gap-2 p-4'>
                        <span className='text-[#212121] text-[14px]'>Product Details</span>
                    </div>
                    <div className='px-4 grid grid-cols-2'>
                        <p className='text-[#878787] text-[14px] pb-4'>Pattern</p>
                        <p className='text-[#212121] text-[14px] pb-4'>Printed</p>
                        <p className='text-[#878787] text-[14px] pb-4'>Type</p>
                        <p className='text-[#212121] text-[14px] pb-4'>A-line</p>
                        <p className='text-[#878787] text-[14px] pb-4'>Fabric</p>
                        <p className='text-[#212121] text-[14px] pb-4'>Viscose Rayon</p>
                        <p className='text-[#878787] text-[14px] pb-4'>Color</p>
                        <p className='text-[#212121] text-[14px] pb-4'>Light Green</p>
                    </div>
                    <div className='flex justify-between items-center gap-2 p-4'>
                        <span className='text-[#212121] text-[14px]'>All Offers & Coupons</span>
                        <button className='text-[20px]'><GoChevronRight /></button>
                    </div>
                </div>
            </div>
            <div className='flex items-center w-full fixed bottom-0'>
                <button className='h-[50px] bg-white text-center flex justify-center items-center w-1/2'>Add to cart</button>
                <button className='h-[50px] bg-[#ffc200] text-center flex justify-center items-center w-1/2'>Buy now</button>
            </div>
        </div>
    )
}
