import Button from '../atoms/Button';
import { useState } from 'react';
import { FaSignInAlt, FaUserPlus } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='py-6 bg-slate-800 fixed w-full z-50 px-4'>
      <div className='flex justify-between'>
        <div className='flex items-center gap-2'>
          <img
            src='/images/navigation bar/laptop.svg'
            alt='DevLearn Logo'
            width={40}
          />
          <h1 className='text-headline text-2xl'>DevLearn</h1>
        </div>

        <button onClick={handleIsOpen}>
          <span
            className={`block w-7 h-[5px] bg-white mb-1.5 transition-transform duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block w-7 h-[5px] bg-white transition-opacity duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          ></span>
          <span
            className={`block w-7 h-[5px] bg-white mt-1.5 transition-transform duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </div>

      {isOpen && (
        <ul
          className={`
          ${
            isOpen
              ? 'flex flex-col items-center transition-all duration-500 ease-linear'
              : 'hidden'
          } text-paragraph
          `}
        >
          <div className='flex hover:text-white hover:bg-button w-3/4 h-8 border justify-center items-center gap-3 border-button text-button rounded-sm mt-5 transition-all duration-300 ease-linear'>
            <FaSignInAlt />
            <Button
              type='button'
              text='Sign Up'
              style='text-base'
            />
          </div>

          <div className='flex w-3/4 h-8 justify-center items-center gap-3  text-buttonText bg-button rounded-sm mt-3 hover:opacity-80 transition-all duration-300 ease-linear'>
            <FaUserPlus />
            <Button
              type='button'
              text='Enroll now'
              style='text-base'
            />
          </div>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
