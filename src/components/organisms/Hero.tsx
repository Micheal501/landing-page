import Button from '../atoms/Button';
import { FaUserPlus, FaWhatsapp } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';

const Hero = () => {
  return (
    <div className='pt-48 lg:pt-72 flex flex-col justify-center items-center text-center px-4'>
      <h1 className='text-headline font-bold text-2xl lg:text-4xl'>
        Master Front-End Development in Just 12 Weeks – Hands-On & Career-Ready!
      </h1>
      <h2 className='text-paragraph mt-2 lg:mt-6 lg:text-xl'>
        Learn HTML, CSS, JavaScript, React, and More! Get ready for a job in
        tech with practical, real-world projects.
      </h2>

      <div className='flex justify-center items-center mt-8 py-1.5 px-10 gap-3 rounded-sm bg-button text-buttonText hover:opacity-80 w-3/4 lg:w-1/3 lg:py-6  transition-all duration-300 ease-linear'>
        <FaUserPlus />
        <Button
          type='button'
          text='Enroll Now'
          style='text-base lg:text-xl'
        />
      </div>
      <div className='flex justify-center border border-button lg:mt-8 text-button items-center mt-2 py-1.5  gap-3 rounded-sm hover:bg-button hover:text-buttonText w-3/4 lg:w-1/3 lg:py-6 transition-all duration-300 ease-linear'>
        <FaWhatsapp />
        <Button
          type='button'
          text='Whatsapp'
          style='text-base lg:text-xl'
        />
      </div>
      <div className='flex justify-center border border-button text-button items-center mt-2 lg:mt-8 py-1.5  gap-3 rounded-sm hover:bg-button lg:w-1/3 lg:py-6   hover:text-buttonText  w-3/4 transition-all duration-300 ease-linear'>
        <IoBookSharp />
        <Button
          type='button'
          text='Sylabus'
          style='text-base lg:text-xl'
        />
      </div>
    </div>
  );
};

export default Hero;
