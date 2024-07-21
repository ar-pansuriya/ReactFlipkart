import React from 'react';
import Sidebar from '../../Components/AdminComponents/Sidebar';

function Order() {
    return (
        <div>
            <Sidebar />
            <main className="py-8 lg:pl-72">
                <div className="px-4 sm:px-6 lg:px-8">
                    This is order page
                </div>
            </main>
        </div>
    )
}

export default Order
