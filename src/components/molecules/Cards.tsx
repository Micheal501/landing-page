const Cards = () => {
  return (
    <div className='border border-white rounded-md w-5/6 h-56 flex-none'>
      <div className='flex items-center'>
        <img
          src='/public/images/testimonials/avatar-man.svg'
          alt='Avatar man'
          className='border border-white rounded-full w-16 h-16 m-2'
        />
        <div className='flex flex-col justify-center'>
          <h5 className='text-headline mx-2'>Micheal Owen</h5>
          <p className='text-paragraph mx-2'>Software Engineer at Gojek</p>
          <div className='flex mx-2 gap-1'>
            <img
              src='/public/images/testimonials/star.svg'
              alt='rating'
              className='w-1/12'
            />
            <img
              src='/public/images/testimonials/star.svg'
              alt='rating'
              className=' w-1/12'
            />
            <img
              src='/public/images/testimonials/star.svg'
              alt='rating'
              className=' w-1/12'
            />
            <img
              src='/public/images/testimonials/star.svg'
              alt='rating'
              className=' w-1/12'
            />
            <img
              src='/public/images/testimonials/star.svg'
              alt='rating'
              className=' w-1/12'
            />
          </div>
        </div>
      </div>
      <p className='text-paragraph mx-2 mt-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quas
        commodi qui incidunt aut rerum quidem hic? Provident, facilis deserunt.
      </p>
    </div>
  );
};

export default Cards;
