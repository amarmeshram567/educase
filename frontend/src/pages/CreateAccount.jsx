import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {toast} from "react-hot-toast"
import { PiEyeSlashLight } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";


const CreateAccount = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        phoneNumber: '',
        companyName: '',
        isAgency: 'yes',
    })

    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false)


    // Checking validation
    const isValid = () => {
        const {
        fullName,
        email,
        password,
        phoneNumber,
        companyName,
        isAgency
        } = formData

        return fullName.trim() !== '' && email.trim() !== ''  && password.trim() !== ''  && phoneNumber.trim() !== ''  && companyName.trim() !== ''  && isAgency !== ''
    }

    const handleSubmit = () => {

        if (isValid() !== '') {
            navigate('/profile')
            console.log(formData)
                
            toast.success("Account created successfull")
        }
        else {
            toast.error("Invalid form data")
            
        }

        
    }


  return (
    <div className='flex justify-center items-center h-screen '>
      <div className='border p-4 border-[#e1e1e1] w-[350px] bg-gray-100 h-[700px]  flex flex-col '>
        <h1 className='text-2xl mb-2 text-black font-bold'>Create your <br/> PopX account</h1>
        <div>
        <div className=' group'>
            <label className='text-sm font-medium text-violet-600 relative px-2 top-3.5 left-2 bg-gray-100 transition-all duration-200 group-hover:text-violet-800' htmlFor="">
                Full Name <span className='text-red-500'>*</span>
            </label>
            <input 
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                placeholder='Enter your full name'
                className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-100 hover:border-violet-400 hover:shadow transition-all duration-200'
            />
        </div>

        <div className=' group'>
            <label className='text-sm font-medium text-violet-600 relative px-2 top-3.5 left-2 bg-gray-100 transition-all duration-200 group-hover:text-violet-800' htmlFor="">
                Phone Number <span className='text-red-500'>*</span>
            </label>
            <input 
                type="number"
                value={formData.phoneNumber}
                onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})}
                placeholder='Enter your phone number'
                className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-100 hover:border-violet-400 hover:shadow transition-all duration-200'
            />
        </div>

        <div className=' group'>
            <label className='text-sm font-medium text-violet-600 relative px-2 top-3.5 left-2 bg-gray-100 transition-all duration-200 group-hover:text-violet-800' htmlFor="">
                Email <span className='text-red-500'>*</span>
            </label>
            <input 
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder='Enter your email'
                className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-100 hover:border-violet-400 hover:shadow transition-all duration-200'
            />
        </div>

        <div className='group relative'>
            <label className='text-sm font-medium text-violet-600 relative px-2 top-3.5 left-2 bg-gray-100 transition-all duration-200 group-hover:text-violet-800' htmlFor="">
                Password <span className='text-red-500'>*</span>
            </label>
            <input 
                type={showPassword ? 'text': 'password'}
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
                placeholder='Enter your password'
                className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-100 hover:border-violet-400 hover:shadow transition-all duration-200'
            />
            <span className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer pt-6' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <PiEyeSlashLight className='text-gray-400' /> : <IoEyeSharp className='text-gray-400' /> }
            </span>
        </div>

        <div className='group mb-4'>
            <label className='text-sm font-medium text-violet-600 relative px-2 top-3.5 left-2 bg-gray-100 transition-all duration-200 group-hover:text-violet-800' htmlFor="">
                Company Name <span className='text-red-500'>*</span>
            </label>
            <input 
                type="text"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                placeholder='Enter your company name'
                className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-100 hover:border-violet-400 hover:shadow transition-all duration-200'
            />
        </div>

        <div className='mb-4'>
            <p className='text-sm font-medium mb-2'> Are you an Agency? <span className='text-red-500'>*</span> </p>
            <div className='flex space-x-6'>
                <label htmlFor="" className='flex items-center space-x-2'>
                    <input type="radio"
                    className='text-indigo-600 focus:ring-indigo-500'
                      name='agency'  onChange={(e) => setFormData({...formData, isAgency: e.target.value})}
                    />
                    <span>Yes</span>
                </label>
                <label htmlFor="" className='flex items-center space-x-2'>
                    <input type="radio"
                    className='text-indigo-600 focus:ring-indigo-500'
                      name='agency'  onChange={(e) => setFormData({...formData, isAgency: e.target.value})}
                    />
                    <span>No</span>
                </label>
            </div>
        </div>
        
       
            <button onClick={handleSubmit} disabled={!isValid()} className={` w-full  rounded px-2 mt-25 py-2 h-11 text-white  transition-all duration-400 ${!isValid() ?  'bg-gray-400 text-white cursor-not-allowed' : 'bg-violet-700  cursor-pointer hover:bg-indigo-700'}`} type='submit'>
                Create Account
            </button>
        
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
