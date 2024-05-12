import { Fade } from 'react-awesome-reveal';
import { Typewriter } from 'react-simple-typewriter'

const Phones = () => {
  return (
    <div>
      <div className="text-center">
        <h2 className="font-bold text-3xl">5 color options </h2>
        <p className="mt-6  text-xl "> <Typewriter words={['Select the perfect color']}
         typeSpeed={70}
         deleteSpeed={50}
         delaySpeed={1000}
         loop={true} /></p>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-12'>
        <Fade cascade={true} triggerOnce={false} duration={3000} damping={5000} delay={1}>
        <img src={'https://i.ibb.co/mT1VW4J/niche-18-img-7.png'} alt="" />
        </Fade >
        <Fade cascade={true} triggerOnce={false} duration={4000} damping={6000} delay={1.5}>
        <img src={'https://i.ibb.co/3c29sy5/niche-18-img-8.png'} alt="" />
        </Fade>
        <Fade cascade={true} triggerOnce={false} duration={5000} damping={7000} delay={2}>
        <img src={'https://i.ibb.co/6YbjjZd/niche-18-img-9.png'} alt="" />
        </Fade>
        <Fade cascade={true} triggerOnce={false} duration={6000} damping={8000} delay={2.5}>
        <img src={'https://i.ibb.co/19VL3fx/niche-18-img-10.png'} alt="" />
        </Fade>
        <Fade cascade={true} triggerOnce={false} duration={7000} damping={9000} delay={3}>
        <img src={'https://i.ibb.co/8dSN4Zb/niche-18-img-11.png'} alt="" />
        </Fade>
        
        
        
       
        
      </div>
    </div>
  );
};

export default Phones;
