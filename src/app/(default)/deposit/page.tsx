/* eslint-disable @typescript-eslint/no-explicit-any */

'use client'
import Header from '@/components/Header'
import React, { useState } from 'react'
import { Modal } from 'antd';
import MoneyDepositForm from '@/components/DepositModal';
import { useGetExpencesQuery } from '@/redux/api/expence';

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

    const { data } = useGetExpencesQuery('')

    // { name, status, date, amount, category, message }

    return (
        <div className='bg-[#A85CF9] w-screen p-10 container mx-auto'>
            <Header />
            <div className='flex justify-end items-center px-6'>
                <button onClick={showModal} className='text-xl font-bold bg-[#5B4CF3] px-3 py-2 mt-7 rounded-lg shadow-[0px_6px_25px_rgba(107,78,187,1)] '>Add Deposit</button>

            </div>
            <div className="w-full mx-auto p-6">
                <div className="rounded-lg overflow-hidden bg-gradient-to-r from-purple-500 to-purple-400">
                    {/* Header section */}
                    <div className="px-6 py-4 flex justify-between items-center">
                        <h2 className="text-white text-xl font-medium">Deposit</h2>
                        <div className="flex space-x-2">
                            <button className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Newest</button>
                            <button className="bg-white/30 text-white px-4 py-1 rounded-full text-sm">Oldest</button>
                        </div>
                    </div>

                    {/* Table */}
                    <div className="w-full">
                        {/* Table header */}
                        <div className="grid grid-cols-5 px-6 py-3 text-white border-t border-white/20">
                            <div className="font-medium">#</div>
                            <div className="font-medium">Name</div>
                            <div className="font-medium">Status</div>
                            <div className="font-medium">Date</div>
                            <div className="font-medium text-right">Amount</div>
                        </div>

                        {/* Table row */}
                        {
                            data?.map((item: any, index: number) => (
                                <div key={index} className="grid grid-cols-5 px-6 py-4 text-white border-t border-white/20">
                                    <div>{index + 1}</div>
                                    <div>{item?.category}</div>
                                    <div>
                                        <span className="flex items-center line-clamp-1">
                                            {item.description
                                            }
                                        </span>
                                    </div>
                                    <div>  {new Date(item.date).toLocaleDateString("en-GB", {
                                        day: "2-digit",
                                        month: "2-digit",
                                        year: "numeric",
                                    })}</div>
                                    <div className="text-right">{item?.amount}</div>
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
                <MoneyDepositForm />
            </Modal>
        </div>
    )
}
