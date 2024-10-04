import Cards from '../molecules/Cards';

const Testimonials = () => {
  return (
    <>
      <h5 className='text-headline text-2xl text-center py-12'>
        Hear From Our Graduates
      </h5>
      <div className='flex overflow-auto gap-5 px-4'>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className='flex overflow-auto gap-5 px-4 mt-8'>
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
