import React from 'react'
import Logo from '../../../public/logo 1.png';

const Header = () => {
    return (
        <div className=' w-[80%] m-auto h-[70px] flex-wrap p-1 flex gap-10 items-center  border-b-2 border-[#d2d2d2]  '>
            <img src={ Logo.src } className='  w-[147px]  h-[50px]' alt="" />
            <ul className=' flex flex-wrap items-center gap-16 font-medium text-white  m-auto w-[60%] px-7 py-4 '>
                <li>Home</li>
                <li>Landloard</li>
                <li>Tenants</li>
                <li>Contact Us</li>
            </ul>
        </div>
    )
}

export default Header