import React from 'react';
import '../App.css';
import { services } from '../constants';
import ButtonLink from './ButtonLink';
import Footer from './Footer';

const ServiceCard = ({ service }) => (
  <div className='sm:w-[250px] w-full'>
    <div
      className='w-full green-pink-gradient p-[1px] rounded-[20px]'>
      <div
        className='rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        style={{ background: '#151030' }}>
        <img
          src={service.icon}
          alt='some_icon'
          className='w-16 h-16 object-contain'
        />
        <h3 className='text-white text-[20px] font-bold text-center'>
          {service.title}
        </h3>
      </div>
    </div>
  </div>
);

const About = () => {
  return (
    <div>

      <div className='bg-black h-full w-full text-white sm:flex sm:justify-around about py-12 mt-8 overflow-x-hidden' id='about'>
        <div className='flex flex-col justify-around'>
          <div className='sm:px-16 px-2'>
            <h2 className='text-4xl sm:text-5xl font-extrabold mt-2'>Introduction</h2>
            <p className='mt-3 mb-6 text-[17px] max-w-3xl leading-[30px]'>👨‍💻 Hi, I'm Najiullah Khan Niazi, an experienced <a className='text-green-300 hover:text-green-500 duration-300' href='https://www.linkedin.com/in/najiullah-khan-niazi-5a2a98234/' target='_blank'>React.js & React Native developer</a> with a strong background in web and mobile app development. I specialize in creating high-performance applications using modern frameworks like React, React Native, and integrating Machine Learning techniques in real-world projects. 
              <br />
              ✍️ I am passionate about delivering clean, maintainable code and love solving challenging problems. With a solid foundation in software engineering and machine learning, I enjoy working in dynamic, fast-paced environments where I can continue learning and evolving.
              <br />
              🚀 Apart from coding, I have a keen interest in innovation, which drives me to experiment with new technologies. My latest work includes developing assistive tech solutions for visually impaired users and working on end-to-end mobile app solutions.
            </p>

            <ButtonLink
              url='https://drive.google.com/file/d/18fBCEZloNox-2t4t1R3SyB0xcR-knop0/view?usp=sharing'
              text='View Resume →'
              padding={`p-3`}
            />

          </div>
          <div className='mt-20 flex justify-center flex-wrap gap-7'>
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About;
