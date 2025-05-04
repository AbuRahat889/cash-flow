

import image from '@/assets/cashflowimage.png'
import Image from 'next/image';
import Link from 'next/link';


export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-between px-8 py-16 bg-white">
      {/* Left Section */}
      <div className="max-w-xl">
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>🔔</span>
          <span>Seamless Payments. Effortless Transactions.</span>
        </div>
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Online payments <br /> for <span className="text-gray-500">everyone.</span>
        </h1>
        <p className="text-md font-semibold text-gray-700 mb-6">
          Revolutionize Your Financial Experience: Effortlessly Manage Payments and Empower Your
          Transactions with Our State-of-the-Art Platform!
        </p>
        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-3 px-6 rounded-xl">
          Get Started
        </button>
      </div>

      {/* Right Section */}
      <div className="hidden md:block">
        <Image
          src={image}
          alt="Green coin stacks illustration"
          className="w-[500px]"
          height={900}
          width={900}
        />
      </div>

      {/* Top Right Links */}
      <div className="absolute top-6 right-8 flex gap-4 items-center">
        <Link href="/sign-up" className="text-green-600 font-semibold hover:underline">
          Register
        </Link>
        <Link href={'/login'} className="bg-black text-white px-5 py-2 rounded-full font-medium">
          Sign in
        </Link>
      </div>
    </section>
  );
}
