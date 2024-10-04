import featuresData from '../../data/featuresData';
const Features = () => {
  return (
    <div className='mt-12 bg-slate-800 py-12'>
      <h2 className='text-2xl text-headline text-center'>Course Features</h2>
      {featuresData.map((features) => (
        <ul
          key={features.id}
          className='flex items-start gap-3 px-4 md:ml-12 text-paragraph'
        >
          <li className='flex mt-6 gap-3'>
            <img
              src={features.imagesUrl}
              alt={features.altText}
              width={24}
              height={24}
              className=''
            />
            <p>{features.title}</p>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Features;
