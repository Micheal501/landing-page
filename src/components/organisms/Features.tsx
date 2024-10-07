const Features = () => {
  return (
    <div className='mt-12 bg-slate-800 py-12 lg:py-20'>
      <h2 className='text-2xl text-headline text-center lg:text-3xl'>
        Course Features
      </h2>

      <div className='lg:flex lg:justify-around'>
        <ul className='flex flex-col gap-3 px-4 md:ml-12 text-paragraph'>
          <li className='flex mt-6 gap-3 lg:items-center'>
            <img
              src='/images/features section/interactive.svg'
              alt='Interactive Icon'
              width={24}
              height={24}
              className='lg:w-16'
            />
            <p className='lg:text-xl md:text-lg'>
              Interactive Learning: Live coding sessions and hands-on exercises.
            </p>
          </li>
          <li className='flex mt-6 gap-3 lg:items-center'>
            <img
              src='/images/features section/mentorship.svg'
              alt='Mentorship Icon'
              width={24}
              height={24}
              className='lg:w-16'
            />
            <p className='lg:text-xl md:text-lg'>
              Mentorship: Weekly 1-on-1 mentoring.
            </p>
          </li>
        </ul>

        <ul className='flex flex-col gap-3 px-4 md:ml-12 text-paragraph'>
          <li className='flex mt-6 gap-3 lg:items-center'>
            <img
              src='/images/features section/community.svg'
              alt='Community Icon'
              width={24}
              height={24}
              className='lg:w-16'
            />
            <p className='lg:text-xl md:text-lg'>
              Community Support: Join a vibrant community of learners and
              alumni.
            </p>
          </li>
          <li className='flex mt-6 gap-3 lg:items-center'>
            <img
              src='/images/features section/certificate.svg'
              alt='Certificate Features Icon'
              width={24}
              height={24}
              className='lg:w-16'
            />
            <p className='lg:text-xl md:text-lg'>
              Certificate of Completion: Earn a certificate to showcase your
              skills.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Features;
