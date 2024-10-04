import { FaWhatsapp } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <footer>
      <div className='justify-between px-4 py-12 text-center'>
        <div className='pt-2 pb-6'>
          <h2 className='text-headline text-xl'>DevLearn</h2>
          <p className='text-paragraph'>
            Jl. Gempol Raya, Gempol, Condongcatur, Kec. Depok, Kabupaten Sleman,
            Daerah Istimewa Yogyakarta 55281
          </p>
        </div>

        <div className='justify-between pb-12 text-center'>
          <h2 className='text-headline'>Contact</h2>
          <ul className='mt-2'>
            <li className='flex items-center gap-2 justify-center text-base text-paragraph'>
              <FaWhatsapp />
              +62 812-3456-7890
            </li>
            <li className='flex items-center gap-2 justify-center text-lg text-paragraph'>
              <MdOutlineEmail />
              testaja@gmail.com
            </li>
          </ul>
        </div>
        <div className='flex flex-col items-center'>
          <h2 className='text-headline text-lg'>Location</h2>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d784.4417356501684!2d110.40502523508032!3d-7.753860700855679!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a59006bd0fbfd%3A0x6ea9cc8a2968e157!2sDAZ%20HOUSE!5e0!3m2!1sen!2sid!4v1727999900939!5m2!1sen!2sid'
            width='300'
            height='300'
            allowFullScreen={true}
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </div>
      </div>
      <p className='text-white text-center pt-6 pb-12'>
        &copy;2024 Micheal Owen All Rights Reserved
      </p>
    </footer>
  );
};

export default Footer;
