/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { Modal } from 'antd';
import BudgetsMoney from '@/components/BudgetsModal';
import { useGetBudgetsQuery } from '@/redux/api/budgets';

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

    const { data } = useGetBudgetsQuery('')

    return (
        <div className='bg-[#A85CF9] w-screen p-10 container mx-auto'>
            <Header />
            <div className='flex justify-end items-center px-6'>
                <button onClick={showModal} className='text-xl font-bold bg-[#5B4CF3] px-3 py-2 mt-7 rounded-lg shadow-[0px_6px_25px_rgba(107,78,187,1)] '>Add Bugets</button>

            </div>
            <div className="w-full mx-auto p-6">
                <div className="rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-purple-400">
                    {/* Header section */}
                    <div className="px-6 py-4 flex justify-between items-center">
                        <h2 className="text-white text-xl font-medium">Budgets</h2>
                        <div className="flex space-x-2">
                            <button className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Newest</button>
                            <button className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Oldest</button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full">
                        {/* Table header */}
                        <div className="grid grid-cols-6 px-6 py-3 text-white border-t border-white/20">
                            <div className="font-medium">Budgets Name</div>
                            <div className="font-medium">Discription</div>
                            <div className="font-medium">Budgets category</div>
                            <div className="font-medium">Start Date</div>
                            <div className="font-medium">Ended Date</div>
                            <div className="font-medium text-right">Amount</div>
                        </div>

                        {/* Table row */}
                        {
                            data?.map((item: any) => (
                                <div key={item._id} className="grid grid-cols-6 px-6 py-4 text-white border-t border-white/20">
                                    <div>{item.budgetsName}</div>
                                    <div>{item.description}</div>
                                    <div>{item.category}</div>
                                    <div>{item.startDate}</div>
                                    <div>{item.endDate}</div>
                                    <div className="text-right">{item.amount}</div>
                                </div>
                            ))

                        }

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
                <BudgetsMoney />
            </Modal>
        </div>
    )
}
