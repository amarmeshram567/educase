import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate()

    const handleCreateAccount = () => {
        navigate('/create-account')
    }

    const handleAlreadyLogin = () => {
        navigate('/login')
    }

    

  return (
    <div className='flex justify-center items-center h-screen pb-5'>
        <div className='border p-5 pb-4 mb-4 border-[#e1e1e1] w-[350px] h-[700px] mt-[40px] flex flex-col justify-end'>
            <div className=''>
                <h1 className='text-3xl font-semibold font-sans'>Welcome to PopX</h1>
                <p className=' text-normal mt-2 text-gray-500 font-sans'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque assumenda consequatur est eligendi nostrum? Eius mollitia officia accusantium necessitatibus molestiae!
                </p>
            </div>
            <br />
            <div>
                <button onClick={handleCreateAccount} className='bg-indigo-700 w-full hover:bg-indigo-600 rounded px-2 py-2 text-white h-11 transition-all duration-400 cursor-pointer mb-3'>Create Account</button>
                <button onClick={handleAlreadyLogin} className='bg-violet-300 w-full hover:bg-sky-200 rounded px-2 py-2 text-black font-semibold h-11 transition-all duration-400 cursor-pointer'>Already Registered? Login</button>
            </div>
        </div>
    </div>
  );
}

export default Home;
