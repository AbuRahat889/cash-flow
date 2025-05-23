/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { usePostDepositeMutation } from "@/redux/api/deposit"
import { ChevronDown, MessageSquare, Wallet } from "lucide-react"
import { useForm } from "react-hook-form"

export default function MoneyDepositForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()



    const [depositFN] = usePostDepositeMutation()
    const onSubmit = async (data: any) => {
        console.log(data)

        try {
            const res = await depositFN({ name: "user", status: "pending", date: new Date(), ...data }).unwrap()
            console.log(res)
        } catch (error) {
            console.log(error)

        }
        // Handle form submission
    }

    return (
        <div className="w-full flex items-center justify-center p-4 bg-gradient-to-br from-purple-500 to-purple-700">
            <div className="">

                <h1 className="text-2xl text-white font-semibold text-center mb-8">
                    <span className="border-b-2 pb-1">Money Deposit</span>
                </h1>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Amount Input */}
                        <div className="relative">
                            <input
                                {...register("amount")}
                                type="number"
                                placeholder="Amount"
                                className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
                                <Wallet size={20} />
                            </div>
                            {errors.amount && typeof errors.amount.message === 'string' && <span className="text-red-200 text-sm mt-1">{errors.amount.message}</span>}
                        </div>

                        {/* Category Select */}
                        <div className="relative">
                            <select
                                {...register("category")}
                                className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400 appearance-none"
                            >
                                <option value="">Deposit Categories</option>
                                <option value="salary">Salary</option>
                                <option value="investment">Investment</option>
                                <option value="savings">Savings</option>
                                <option value="other">Other</option>
                            </select>
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500 pointer-events-none">
                                <ChevronDown size={20} />
                            </div>
                            {errors.category && typeof errors.category.message === 'string' && <span className="text-red-200 text-sm mt-1">{errors.category.message}</span>}
                        </div>

                        {/* DateTime Input */}
                        <div className="relative">
                            <input
                                {...register("dateTime")}
                                type="datetime-local"
                                placeholder="Date and Time"
                                className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
                                {/* <CalendarClock size={20} /> */}
                            </div>
                            {errors.dateTime && <span className="text-red-200 text-sm mt-1">{String(errors.dateTime.message)}</span>}
                        </div>

                        {/* Message Input */}
                        <div className="relative">
                            <input
                                {...register("message")}
                                type="text"
                                placeholder="Deposit Message"
                                className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
                                <MessageSquare size={20} />
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Deposit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

