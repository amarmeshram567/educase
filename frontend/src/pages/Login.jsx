import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { PiEyeSlashLight } from "react-icons/pi";
import { IoEyeSharp } from "react-icons/io5";


import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [showPassword, setShowPassword] = useState(false)

    const navigate = useNavigate()

    // Checking validation
    const isValid = () => {
        return email.trim() !== '' && password.trim() !== ''
        
    }

    const handleSubmit = () => {
        if (isValid()) {
            navigate('/profile')
            toast.success("login successfull")
        }
    }

  return (
   <div className='flex justify-center items-center h-screen'>
      <div className='border p-5  border-[#e1e1e1] w-[350px] h-[700px]  bg-gray-100  flex flex-col '>
        <h1 className='text-2xl font-bold font-sans'>Signin to your <br/> PopX account</h1>

        <p className='text-gray-500 text-normal mt-1.5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam suscipit necessitatibus sint? Iure eum?</p>
        
        <div className='group'>
            <label className='text-sm font-medium text-violet-600 relative px-2 top-3.5 left-2 bg-gray-100'>
                Email Address
            </label>
            <input required onChange={(e) => setEmail(e.target.value)} value={email} className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-100 hover:border-violet-400 hover:shadow transition-all duration-400' type="text" placeholder='Enter your email address' />
        </div>

         <div className='group relative'>
            <label className='text-sm font-medium text-violet-600 relative px-2 top-3.5 left-2 bg-gray-100'>
                Password
            </label>
             
            <input required onChange={(e) => setPassword(e.target.value)} value={password} className='mt-1 w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-violet-100 hover:border-violet-400 hover:shadow transition-all duration-400' type={showPassword ? 'text' : 'password'} placeholder='Enter your password' />
            <span className='absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 cursor-pointer pt-6' onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <PiEyeSlashLight className='text-gray-400' /> : <IoEyeSharp className='text-gray-400' /> }
                </span>
        </div>

        <button disabled={!isValid()} type='submit' onClick={handleSubmit} className={` w-full rounded font-normal px-2 py-2 text-white mt-4 transition-all duration-400  h-11 ${!isValid() ? 'bg-gray-300 cursor-not-allowed' : 'bg-sky-400 hover:bg-sky-600 cursor-pointer'}`}>Login</button>
        </div>
    </div>
  );
}

export default Login;
