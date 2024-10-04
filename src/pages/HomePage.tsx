import NavBar from '../components/organisms/NavBar';
import Hero from '../components/organisms/Hero';
import Course from '../components/organisms/Course';
import Features from '../components/organisms/Features';
import Testimonials from '../components/organisms/Testimonials';
import Curriculum from '../components/organisms/Curriculum';
import Footer from '../components/organisms/Footer';
const HomePage = () => {
  return (
    <div className='bg-slate-900'>
      <NavBar />
      <Hero />
      <Course />
      <Features />
      <Testimonials />
      <Curriculum />
      <Footer />
    </div>
  );
};

export default HomePage;
