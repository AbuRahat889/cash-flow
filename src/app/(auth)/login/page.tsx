/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Divider } from "antd"
import { Wallet } from "lucide-react"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { FaArrowLeft, FaFacebookF } from "react-icons/fa6"
import { FcGoogle } from "react-icons/fc"

export default function Page() {
    const router = useRouter()
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data: any) => {
        console.log(data)
        // Handle form submission
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center  p-4 bg-gradient-to-br from-purple-500 to-purple-700">

            <div className='max-w-3xl  bg-[#5534A5] py-12 px-32 rounded-lg mt-10'>
                <h1 onClick={() => router.back()} className="text-white flex items-center gap-3 cursor-pointer"> <FaArrowLeft /> Back</h1>

                <h1 className="text-2xl text-white font-semibold text-center mb-8">
                    <span className="border-b-2 pb-1">Log in into Your Account</span>
                </h1>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Amount Input */}
                        <div className="relative">
                            <input
                                {...register("firstName", { required: "First Name is required" })}
                                type="text"
                                placeholder="First Name"
                                className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
                                <Wallet size={20} />
                            </div>
                            {errors.amount && typeof errors.amount.message === 'string' && <span className="text-red-200 text-sm mt-1">{errors.amount.message}</span>}
                        </div>

                        <div className="relative">
                            <input
                                {...register("lastName", { required: "Last Name is required" })}
                                type="text"
                                placeholder="Last Name"
                                className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
                                <Wallet size={20} />
                            </div>
                            {errors.amount && typeof errors.amount.message === 'string' && <span className="text-red-200 text-sm mt-1">{errors.amount.message}</span>}
                        </div>

                        {/* Amount Input */}
                        <div className="relative">
                            <input
                                {...register("email", { required: "Email is required" })}
                                type="email"

                                placeholder="Enter Your Email"
                                className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
                                <Wallet size={20} />
                            </div>
                            {errors.amount && typeof errors.amount.message === 'string' && <span className="text-red-200 text-sm mt-1">{errors.amount.message}</span>}
                        </div>

                        <div className="relative">
                            <input
                                {...register("password", { required: "Password is required" })}
                                type="password"
                                placeholder="Enter Your Password"
                                className="w-full h-12 px-4 rounded-lg text-gray-800 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-500">
                                <Wallet size={20} />
                            </div>
                            {errors.amount && typeof errors.amount.message === 'string' && <span className="text-red-200 text-sm mt-1">{errors.amount.message}</span>}
                        </div>




                    </div>

                    {/* Submit Button */}
                    <div className="mt-8">
                        <button
                            type="submit"
                            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Sing Up
                        </button>
                    </div>
                </form>

                <Divider style={{ borderColor: '#fff', color: 'white' }}>or</Divider>
                <div className="flex gap-3 w-full">
                    <div className="flex w-full justify-center items-center gap-2 bg-white px-8 py-2 cursor-pointer rounded-xl">
                        <div className="bg-blue-600 p-2 rounded-full cursor-pointer">

                            <FaFacebookF className="text-xl" />
                        </div>
                        <h1 className="text-blue-600">FaceBook</h1>
                    </div>
                    <div className="flex w-full justify-center items-center gap-2 bg-white px-8 py-2 cursor-pointer rounded-xl">
                        <div className="p-2 rounded-full cursor-pointer">

                            <FcGoogle className="text-xl" />
                        </div>
                        <h1 className="text-blue-600">Google</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

