import { IoIosArrowDown } from 'react-icons/io';
import logo from '../../assets/Logo.svg';
import valute from '../../assets/Valute.svg';
import { IoClose, IoSearch } from 'react-icons/io5';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';

export default function Navbar() {
  const [IsActive, setIsActive] = useState(false);

  return (
    <>
      <div className='w-full py-2 shadow-2xl'>
        {/* Desktop */}
        <div className='container justify-around space-x-10 mx-auto hidden md:flex h-15'>
          <div className='flex space-x-3 items-center justify-around text-[#532013]'>
            <img src={logo} width={40} alt='' />
            <div className='flex justify-between h-10 font-normal text-[18px]'>
              <h5 className='w-full flex items-center gap-2 font-bold'>
                Our Resturants <IoIosArrowDown />
              </h5>
            </div>
          </div>
          <div className='w-2/3 flex items-center gap-3'>
            <ul className='flex w-full justify-between items-center'>
              <li className='w-2/3 text-[#A68B7F] text-[18px] font-extrabold'>
                <a href='#'>Careers</a>
              </li>
              <li className='bg-[#e9e0d1] rounded-full p-3 text-[#532013]'>
                <a href=''>
                  <IoSearch />
                </a>
              </li>
              <li className='bg-[#f4823d] p-2 px-3 text-center rounded-full'>
                <a href='' className='text-[14px] text-white font-bold'>
                  EN
                </a>
              </li>
              <li className='flex border text-[18px] text-[#f4823d] border-[#f4823d] rounded-3xl px-5 py-2'>
                <a href='' className='flex gap-2 font-bold'>
                  <img src={valute} width={15} alt='' />
                  0,00 UZS
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile */}
        <div className='flex justify-between pl-3 md:hidden'>
          <div className='text-start flex items-center gap-3'>
            <img src={logo} alt='' />
            <h5 className='font-normal text-2xl gap-2 text-[#532013]'>
              Our Resturants
            </h5>
          </div>
          <button
            onClick={() => setIsActive(true)}
            className='py-4 px-4 border rounded-full border-[#f4823d] text-[#f4823d] mr-5 '
          >
            <BiMenu />
          </button>
        </div>
        {IsActive && (
          <div className='w-full block h-auto py-5 bg-white top-0 absolute md:hidden'>
            <div className='justify-end flex mr-7 mb-5'>
              <button
                onClick={() => setIsActive(false)}
                className='p-3 border rounded-full border-[#f4823d] text-[#f4823d]'
              >
                <IoClose className='text-2xl' />
              </button>
            </div>
            <div className='w-full'>
              <ul className='block mx-auto text-center space-y-3 px-8'>
                <li className='text-[#A68B7F] text-[18px]'>
                  <a href=''>Careers</a>
                </li>
                <hr className='text-amber-400 font-black' />
                <li className='bg-[#e9e0d1] rounded-full p-3 text-[#532013]'>
                  <a
                    href=''
                    className='flex text-[20px] justify-center gap-5 items-center'
                  >
                    <IoSearch className='mt-px' />
                    <span>Search...</span>
                  </a>
                </li>
                <hr className='text-amber-400 font-black' />
                <li className='bg-[#f4823d] p-3 text-center rounded-full'>
                  <a href='' className='text-[20px] text-white font-bold'>
                    EN
                  </a>
                </li>
                <hr className='text-amber-400 font-black' />
                <li className='flex justify-center border text-[20px] text-[#f4823d] border-[#f4823d] rounded-3xl py-2'>
                  <a href='' className='flex gap-2 font-bold'>
                    <img src={valute} width={15} alt='' />
                    0,00 UZS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
