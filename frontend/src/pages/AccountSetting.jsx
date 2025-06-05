import React from 'react';

import { FaCamera } from "react-icons/fa";


const AccountSetting = () => {
  return (

    <div className='flex justify-center items-center h-screen'>
        <div className='border  border-[#e1e1e1] w-[350px] h-[700px] mb-3 flex flex-col'>
        
            <h1 className='text-xl font-semibold text-left text-black p-4'>Account setting</h1>

            <div className='bg-gray-100 h-full'>

                <div className='flex items-start space-x-6 p-4'>
                    <div className='relative p-1'>
                        <img className='w-24 h-24 rounded-full object-cover shadow-md shadow-gray-300' src="https://plus.unsplash.com/premium_photo-1690086519096-0594592709d3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className='p-0.5 ml-4'>
                            <span className="absolute bottom-1 right-1 bg-violet-600 text-white rounded-full p-2 w-8 h-8 flex items-center justify-center shadow-lg cursor-pointer">
                                <FaCamera className='text-white' />
                            </span>
                        </div>
                    </div>

                    <div className='flex-1'>
                        <h2 className='text-xl font-bold text-gray-900 mb-0'>Marry Doe</h2>
                        <p className='text-sm font-sm text-black'>Marry@gmail.com</p>
                    </div>
                </div>
                <p className='text-black font-normal p-4 text-sm leading-relaxed pt-2'>
                   Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tenetur unde sequi itaque quo eum ipsam odit labore obcaecati. Ullam.
                </p>
                
                <div className='flex flex-row self-baseline-last'>
                    <div className='w-full mt-2 border border-dashed border-gray-300'></div>
                </div>
                <div className='flex flex-col mt-85 justify-center flex-10/12 '>
                    <div className='w-full mt-2 border border-dashed border-gray-300'></div>
                 </div>

            </div>
        </div>
    </div>
  );
}

export default AccountSetting;
