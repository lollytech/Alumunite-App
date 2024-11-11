import React, { useState } from 'react';
import { IoPersonAddSharp, IoMenu } from "react-icons/io5";
import { MdManageAccounts } from "react-icons/md";
import { Link } from 'react-router-dom';
function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div className='w-full h-[4rem] mt-5 bg-white shadow-md shadow-gray-500 flex justify-between items-center px-6'>
      {/* Logo Section */}
      <div className='text-xl font-bold text-[#064E3B]'>
        <h1>Alumunite</h1>
      </div>

      {/* Menu Icon for Mobile/Medium Screens */}
      <div className='md:hidden cursor-pointer' onClick={toggleMenu}>
        <IoMenu size={28} className="text-[#047857]" />
      </div>

      {/* Menu Items */}
      <div
        className={`flex-col md:flex-row md:flex items-baseline space-y-2 md:space-y-0 space-x-6 text-gray-600 absolute md:static top-16 right-4 md:right-0 md:space-x-8 bg-white w-[30%] md:w-auto p-4 md:p-0 transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'} md:flex`}
      >
         <Link to='/userprofile' className='hover:text-[#047857] transition duration-200 flex items-center cursor-pointer'>
          <IoPersonAddSharp size={24} color='#047857' />
          <p className='ml-2 hidden sm:inline'>User Profile</p>
        </Link>
        <Link to='/adduser' className='hover:text-[#047857] transition duration-200 flex items-center cursor-pointer'>
          <IoPersonAddSharp size={24} color='#047857' />
          <p className='ml-2 hidden sm:inline'>Add User</p>
        </Link>
        <Link to='/manageuser' className='hover:text-[#047857] transition duration-200 flex items-center cursor-pointer'>
          <MdManageAccounts size={24} color='#047857' />
          <p className='ml-2 hidden sm:inline'>Manage User</p>
        </Link>
      </div>
    </div>
  );
}

export default Nav;
