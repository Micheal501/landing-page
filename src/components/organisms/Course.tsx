import courseData from '../../data/courseData';

const Course = () => {
  return (
    <div className='px-4'>
      <h2 className='text-headline text-center mt-36 text-2xl'>
        What You`ll Learn
      </h2>
      <ul className='list-disc text-paragraph px-10 mt-3 flex flex-col gap-3'>
        <li>HTML, CSS, and responsive web design</li>
        <li>JavaScript basics and advanced concepts</li>
        <li>Modern frameworks like React and Vue.js</li>
        <li>Version control with Git & GitHub</li>
        <li>Best practices in UI/UX design</li>
        <li>Building and deploying real-world projects</li>
      </ul>
      <div className='flex flex-wrap justify-center gap-8 mt-8'>
        {courseData.map((course) => (
          <img
            key={course.id}
            src={course.imagesUrl}
            alt={course.altText}
            width={70}
          />
        ))}
      </div>
    </div>
  );
};

export default Course;
