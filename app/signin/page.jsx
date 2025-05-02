"use client";

import { signIn } from 'next-auth/react';
import Image from "next/image";

function Signin() {
    return(
        <>
        <div className="min-h-screen flex flex-col lg:flex-row bg-white">
            {/* Left panel (login) */}
            <div className="w-full lg:w-1/3 flex flex-col p-8 justify-center bg-white text-black">
            {/* Brand logo and name in a row */}
            <div className="flex items-center mb-8">
                <a href="/">
                <Image
                    src="/TT.png"
                    alt="Logo"
                    width={1000}
                    height={1000}
                    className="h-auto w-20 cursor-pointer"
                />
                </a>
                <a href="/">
                <span className="font-bold text-lg ml-2 cursor-pointer">
                    Trend
                    <span
                    style={{
                        color: '#f57f17',
                        textShadow:
                        '1px 1px 0px black, -1px -1px 0px black, 1px -1px 0px black, -1px 1px 0px black',
                    }}
                    >
                    T
                    </span>
                    racker
                </span>
                </a>
            </div>
    
            {/* Sign Up title */}
            <h2 className="text-4xl font-bold mb-6">Sign in</h2>
    
            {/* Form fields */}
            <form className="flex flex-col gap-5 mt-10">
                <input
                type="email"
                placeholder="Email"
                className="p-3 rounded-lg border border-black bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-[#f57f17]"
                />
                <input
                type="password"
                placeholder="Password"
                className="p-3 rounded-lg border border-black bg-white placeholder-gray-500 text-black focus:outline-none focus:ring-2 focus:ring-[#f57f17]"
                autoComplete="new-password"
                />
    
                {/* Sign Up button */}
                <button
                type="button"
                onClick={() => {}}
                className="bg-black hover:bg-gray-900 text-white font-bold py-3 rounded-lg mt-6 cursor-pointer"
                >
                Sign in
                </button>
            </form>
    
            {/* Have an account? */}
            <div className="mt-2 text-sm text-center">
                Need an account?{' '}
                <a href="/signup" className="underline text-[#f57f17] hover:text-black">
                Sign up
                </a>
            </div>
    
            {/* OR Divider */}
            <div className="flex items-center my-6">
                <div className="flex-grow border-t border-gray-300"></div>
                <span className="mx-4 text-gray-500">or</span>
                <div className="flex-grow border-t border-gray-300"></div>
            </div>
    
            {/* Sign Up with Google button */}
            <button
                type="button"
                onClick={() => signIn('google', { callbackUrl: '/dashboard' })}
                className="flex items-center justify-center gap-3 border border-black bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-lg transition-colors duration-200 cursor-pointer"
            >
                <Image
                src="/google-logo.png"
                alt="Google"
                width={20}
                height={20}
                className="h-5 w-5"
                />
                Sign in with Google
            </button>
            </div>
    
            {/* Right panel (feature image and promo text) */}
            <div className="hidden lg:flex lg:w-2/3 items-center justify-center bg-[#f57f17] p-10">
                <div className="text-center max-w-md">
                {/* Placeholder Image */}
                <div className="w-full h-64 bg-white mb-6 rounded-lg flex items-center justify-center">
                    <span className="text-[#f57f17] font-bold">[Feature Image]</span>
                </div>

                {/* Promo Text */}
                <h3 className="text-2xl font-bold text-white mb-2">
                    Need help with something? Ask our AI chatbot!
                </h3>
                <p className="text-white mt-2">
                    Our AI assistant helps you 24/7 with your questions. Instantly get answers and improve your experience!
                </p>
                </div>
            </div>
        </div>
        </>
    );
};

export default Signin;