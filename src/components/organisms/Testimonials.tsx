import Cards from '../molecules/Cards';

const Testimonials = () => {
  return (
    <>
      <h5 className='text-headline text-2xl text-center py-12 lg:text-3xl'>
        Hear From Our Graduates
      </h5>
      <h2 className='px-4 lg:ml-56 text-lg lg:text-xl text-headline mb-2'>
        Front End Developer
      </h2>

      <div className='flex overflow-auto lg:flex-wrap lg:justify-center gap-5 px-4'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>

      <h2 className='px-4 lg:ml-56 text-lg lg:text-xl text-headline mt-6 lg:mt-12 mb-2'>
        Back End Developer
      </h2>
      <div className='flex overflow-auto lg:flex-wrap lg:justify-center gap-5 px-4'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </>
  );
};

export default Testimonials;
