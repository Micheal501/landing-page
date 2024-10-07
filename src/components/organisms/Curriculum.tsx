import { useState } from 'react';
import { IoMdArrowDropdownCircle } from 'react-icons/io';
import curriculumData from '../../data/curriculumData';
const Curriculum = () => {
  const [isDropDown, setIsDropDown] = useState<number | null>(null);

  const handleDropDown = (week: number) => {
    setIsDropDown(isDropDown === week ? null : week);
  };

  return (
    <div className='bg-slate-800 py-12 mt-12 lg:flex lg:flex-col lg:gap-3 lg:items-center'>
      <h2 className='text-headline text-2xl text-center mb-6'>
        What’s Inside the Course?
      </h2>
      {curriculumData.map((curriculum) => (
        <div className='rounded-xl bg-slate-700 mx-8 lg:w-2/6'>
          <div className='flex items-center justify-between mt-2 gap-2 p-3'>
            <h5 className='text-headline text-lg w-60'>{`Week ${curriculum.week}: ${curriculum.title}`}</h5>

            <IoMdArrowDropdownCircle
              className={`w-8 h-8 mr-2 text-white transition-all duration-300 ease-linear ${
                isDropDown === curriculum.week ? 'rotate-180' : 'rotate-0'
              }`}
              onClick={() => handleDropDown(curriculum.week)}
            />
          </div>

          <ul
            className={`list-disc mx-4 text-left px-2 text-base flex flex-col gap-3 ${
              isDropDown === curriculum.week ? 'text-paragraph ' : 'hidden'
            }`}
          >
            {curriculum.topics.map((topic, index) => (
              <li key={index}>{topic}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Curriculum;
