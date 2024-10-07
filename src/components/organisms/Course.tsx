import courseData from '../../data/courseData';

const Course = () => {
  return (
    <div className='px-4 mt-16 lg:mt-40 lg:mb-40'>
      <h2 className='text-headline text-center text-2xl lg:text-3xl'>
        What You`ll Learn
      </h2>
      <ul className='list-disc text-paragraph px-10 mt-3 flex flex-col md:flex-row md:justify-around gap-0 lg:mt-16'>
        <div className='lg:text-xl md:flex md:flex-col md:gap-5'>
          <li>HTML, CSS, and responsive web design</li>
          <li>JavaScript basics and advanced concepts</li>
          <li>Modern frameworks like React and Vue.js</li>
        </div>
        <div className='lg:text-xl md:flex md:flex-col md:gap-5'>
          <li>Version control with Git & GitHub</li>
          <li>Best practices in UI/UX design</li>
          <li>Building and deploying real-world projects</li>
        </div>
      </ul>
      <div className='flex flex-wrap justify-center gap-8 mt-8 lg:mt-20'>
        {courseData.map((course) => (
          <img
            key={course.id}
            src={course.imagesUrl}
            alt={course.altText}
            className='w-12 lg:w-28'
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
