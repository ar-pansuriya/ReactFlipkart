import React from 'react';
import { AiOutlineClose, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';

const Popup = ({ status, onClose }) => {
    const isSuccess = status === 'COMPLETED';
    const title = isSuccess ? 'Payment Successful!' : 'Payment Failed!';
    const message = isSuccess
        ? 'Your payment has been processed successfully.'
        : 'Please try again. If the amount was deducted from your account, it will be refunded.';

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-70">
            <div className="bg-[#ffffffe5] rounded-lg shadow-lg max-w-sm w-full flex flex-col gap-2 p-6">
                <div className="flex items-center justify-end">
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition">
                        <AiOutlineClose className="text-2xl" />
                    </button>
                </div>
                <div className="mt-4 flex justify-center">
                    {isSuccess ? (
                        <AiOutlineCheckCircle className="text-green-600 text-4xl" />
                    ) : (
                        <AiOutlineCloseCircle className="text-red-600 text-4xl" />
                    )}
                </div>
                <h2 className={`text-xl text-center font-bold ${isSuccess ? 'text-green-600' : 'text-red-600'}`}>
                    {title}
                </h2>
                <p className="mt-2 text-gray-700 text-center">{message}</p>
            </div>
        </div>
    );
};

export default Popup;
