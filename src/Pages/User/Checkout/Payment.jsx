import React, { useState } from 'react';
import { FaAngleDown, FaGooglePay, FaRegCreditCard, FaTag, FaUniversity, FaWallet } from 'react-icons/fa';
import { GoArrowLeft } from 'react-icons/go';
import { BiLockOpen } from "react-icons/bi";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft, faLock } from '@fortawesome/free-solid-svg-icons';
import 'tailwindcss/tailwind.css';
import { IoIosArrowDown } from 'react-icons/io';
import Axis from '../../../../public/Images/checkout/axis.svg';
import UPI from '../../../../public/Images/checkout/upi.svg';
import GooglePay from '../../../../public/Images/checkout/google-pay.svg';
import Phonepay from '../../../../public/Images/checkout/phonepe.svg';
import Cash from '../../../../public/Images/checkout/cash-icon.svg';
import Gift from '../../../../public/Images/checkout/gift-card.svg';
import EMI from '../../../../public/Images/checkout/EMI.svg';
import { CiCreditCard1, CiFaceSmile, CiWallet } from 'react-icons/ci';
import { PiBankLight } from 'react-icons/pi';
import { HiOutlineQuestionMarkCircle } from 'react-icons/hi';

const Payment = () => {
    const [upi, setUpi] = useState(false)

    const [isChecked, setIsChecked] = useState(false);
    const [isCheckedPhone, setIsCheckedPhone] = useState(false);

    const handleRadioChange = () => {
        setIsChecked(!isChecked);
    };
    const handleRadioChange2 = () => {
        setIsCheckedPhone(!isCheckedPhone);
    };
    return (
        <div className="max-w-md mx-auto bg-white">
            <div>
                <div className='pr-4 pl-2 py-[16px] h-[74px] flex justify-between items-end'>
                    <div className='flex items-center gap-3'>
                        <GoArrowLeft className='text-[24px]' />
                        <div>
                            <span className='text-[12px]'>Step 3 of 3</span>
                            <h2 className="text-[17px] font-semibold text-[#212121]">
                                Payment
                            </h2>
                        </div>
                    </div>
                    <div className='bg-[#f5f5f5] text-[#424242] text-[12px] font-semibold flex items-center gap-1 px-1 rounded'><BiLockOpen className='' />
                        100% Secure</div>
                </div>
                <div className='px-4'>
                    <div className="mb-4 bg-[#f0f5ff] h-[49px] flex items-center w-full px-3 rounded-lg">
                        <div className="flex justify-between items-center w-full">
                            <div className='flex items-center gap-1'>
                                <span className="text-[#2a55e5] text-[14px]">Total Amount</span>
                            </div>
                            <span className="text-lg font-medium text-[#2a55e5]">₹329</span>
                        </div>
                    </div>
                    <div className="bg-green-100 p-2 rounded mb-4 flex items-center justify-between">
                        <div>
                            <p className="text-[14px] font-semibold discount">10% instant discount</p>
                            <span className="text-[12px] text-[#108934]">Claim now with payment offers</span>
                        </div>
                        <div className='flex items-center'>
                            <div className='w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center border-[3px] border-[#e7f8ec] z-10'>
                                <img src={Axis} alt='Axis' className='w-[16px]' />
                            </div>
                            <div className='w-[36px] h-[36px] rounded-full bg-white flex justify-center items-center ml-[-6px] border-[3px] border-[#e7f8ec]'>
                                <FaTag className='text-[#108934] text-[14px]' />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={upi ? 'border-y-[#e0e0e0] border-y-[1px] bg-[#f5f5f5]' : 'border-y-[#e0e0e0] border-y-[1px] '}>
                        <div onClick={() => setUpi(!upi)} className='flex justify-between items-center p-4'>
                            <div className='flex items-center gap-3'>
                                <img src={UPI} alt='UPI' />
                                <p className='text-[14px] text-[#212121] font-medium'>UPI</p>
                            </div>
                            <IoIosArrowDown className={upi ? 'text-[#212121] rotate-180' : 'text-[#212121]'} />
                        </div>
                        {upi &&
                            <div className='bg-white rounded-lg m-4 mt-0'>
                                <div className='p-4 border-b-[#e0e0e0] border-b-[1px]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-3'>
                                            <input type="radio" id='googlepay' checked={isChecked}
                                                onChange={handleRadioChange}
                                                className='w-[20px] h-[20px]' />
                                            <label htmlFor="googlepay" className='text-[14px] text-[#212121] font-medium'>Google Pay</label>
                                        </div>
                                        <img src={GooglePay} alt='GooglePay' />
                                    </div>
                                    {isChecked && (
                                        <div className='ml-[30px]'>
                                            <button className='bg-[#ffc200] text-[#212121] h-[40px] text-[14px] w-full rounded font-semibold mt-4'>Pay ₹479 </button>
                                        </div>)}
                                </div>
                                <div className='p-4 border-b-[#e0e0e0] border-b-[1px]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-3'>
                                            <input type="radio" id='googlepay' checked={isCheckedPhone}
                                                onChange={handleRadioChange2}
                                                className='w-[20px] h-[20px]' />
                                            <label htmlFor="googlepay" className='text-[14px] text-[#212121] font-medium'>PhonePe</label>
                                        </div>
                                        <img src={Phonepay} alt='Phonepay' />
                                    </div>
                                    {isCheckedPhone && (
                                        <div className='ml-[30px]'>
                                            <button className='bg-[#ffc200] text-[#212121] h-[40px] text-[14px] w-full rounded font-semibold mt-4'>Pay ₹479 </button>
                                        </div>)}
                                </div>
                                <div className='p-4 border-b-[#e0e0e0] border-b-[1px]'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-3'>
                                            <input type="radio" id='googlepay' disabled
                                                className='w-[20px] h-[20px]' />
                                            <label htmlFor="googlepay" className='text-[14px] text-[#212121] font-medium'>Add new UPI ID</label>
                                        </div>
                                        <a href="#" className='text-[#2a55e5] text-[12px] font-semibold'>How to find?</a>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                    <div className='opacity-70'>
                        <div className='flex justify-between items-center p-4'>
                            <div className='flex items-center gap-3'>
                                <CiCreditCard1 className='text-[24px]' />
                                <div>
                                    <p className='text-[14px] text-[#212121] font-medium'>Credit / Debit / ATM Card</p>
                                    <p className='text-[12px] text-[#ccc]'>This option is disable for this product.</p>
                                </div>
                            </div>
                            <IoIosArrowDown className='text-[#212121]' />
                        </div>
                        <div className='flex justify-between items-center p-4 border-y-[#e0e0e0] border-y-[1px]'>
                            <div className='flex items-center gap-3'>
                                <PiBankLight className='text-[24px]' />
                                <div>
                                    <p className='text-[14px] text-[#212121] font-medium'>Net Banking</p>
                                    <p className='text-[12px] text-[#ccc]'>This option is disable for this product.</p>
                                </div>
                            </div>
                            <IoIosArrowDown className='text-[#212121]' />
                        </div>
                        <div className='flex justify-between items-center p-4'>
                            <div className='flex items-center gap-3'>
                                <CiWallet className='text-[24px]' />
                                <div>
                                    <p className='text-[14px] text-[#212121] font-medium'>Wallets</p>
                                    <p className='text-[12px] text-[#ccc]'>This option is disable for this product.</p>
                                </div>
                            </div>
                            <IoIosArrowDown className='text-[#212121]' />
                        </div>
                        <div className='flex justify-between items-center p-4 border-y-[#e0e0e0] border-y-[1px]'>
                            <div className='flex items-center gap-3'>
                                <img src={Cash} alt='Cash' />
                                <div>
                                    <p className='text-[14px] text-[#212121] font-medium'>Cash on Delivery</p>
                                    <p className='text-[12px] text-[#ccc]'>This option is disable for this product.</p>
                                </div>
                            </div>
                            <IoIosArrowDown className='text-[#212121]' />
                        </div>
                        <div className='flex justify-between items-center p-4'>
                            <div className='flex items-center gap-3'>
                                <img src={Gift} alt='Gift' />
                                <div>
                                    <p className='text-[14px] text-[#212121] font-medium'>Have a Flipkart Gift Card?</p>
                                    <p className='text-[12px] text-[#ccc]'>This option is disable for this product.</p>
                                </div>
                            </div>
                            <a href="#" className='text-[#2a55e5] text-[12px] font-semibold'>Add</a>
                        </div>
                        <div className='flex justify-between items-center p-4 border-y-[#e0e0e0] border-y-[1px]'>
                            <div className='flex items-center gap-3'>
                                <img src={EMI} alt='EMI' />
                                <div>
                                    <p className='text-[14px] text-[#212121] font-medium'>EMI</p>
                                    <p className='text-[12px] text-[#ccc]'>This option is disable for this product.</p>
                                </div>
                            </div>
                            <div className='text-[#666] flex items-center gap-1'>
                                {/* <p className='text-[12px] font-medium'>Unavailable</p> */}
                                <HiOutlineQuestionMarkCircle />
                            </div>
                        </div>
                    </div>
                    <div className='pt-[32px] pb-[36px] flex justify-center items-center flex-col gap-1'>
                        <p className='text-[#9e9e9e] text-[17px] max-w-[182px] mx-auto text-center font-semibold'>35 Crore happy customers and counting!</p>
                        <CiFaceSmile className='text-[40px] text-[#9e9e9e]' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;
