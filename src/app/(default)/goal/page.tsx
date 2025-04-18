
'use client'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { Modal } from 'antd';
import GoalMoney from '@/components/GoalsModal';

export default function Page() {
    const [open, setOpen] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [setModalText] = useState();

    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {

        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setOpen(false);
    };

    return (
        <div className='bg-[#A85CF9] w-screen p-10 container mx-auto'>
            <Header />
            <div className='flex justify-end items-center px-6'>
                <button onClick={showModal} className='text-xl font-bold bg-[#5B4CF3] px-3 py-2 mt-7 rounded-lg shadow-[0px_6px_25px_rgba(107,78,187,1)] '>Add Goals</button>

            </div>
            <div className="w-full mx-auto p-6">
                <div className="rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-purple-400">
                    {/* Header section */}
                    <div className="px-6 py-4 flex justify-between items-center">
                        <h2 className="text-white text-xl font-medium">Goals</h2>
                        <div className="flex space-x-2">
                            <button className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Newest</button>
                            <button className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Oldest</button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full">
                        {/* Table header */}
                        <div className="grid grid-cols-7 px-6 py-3 text-white border-t border-white/20">
                            <div className="font-medium">Goal Name</div>
                            <div className="font-medium">Discription</div>
                            <div className="font-medium">Goal Category</div>
                            <div className="font-medium">Date</div>
                            <div className='font-medium'>Priority Goal</div>
                            <div className="font-medium">Traget  Amount</div>
                            <div className="font-medium text-right">Already Amount</div>
                        </div>

                        {/* Table row */}
                        <div className="grid grid-cols-7 px-6 py-4 text-white border-t border-white/20">
                            <div>Buy a Car</div>
                            <div className='line-clamp-1'>
                                I want to buy a car
                            </div>
                            <div>Career goals</div>
                            <div>01/06/2030</div>
                            <div>top</div>
                            <div>1cr</div>
                            <div className="text-right">1taka</div>
                        </div>
                    </div>
                </div>
            </div>
            <Modal

                open={open}
                footer={false}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
                width={800}
                height={300}

            >
                <GoalMoney />
            </Modal>
        </div>
    )
}
