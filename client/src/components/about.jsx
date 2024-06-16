import React from 'react';
import ayush_bg from '../assets/ayush_bg.jpg';
import { Link } from 'react-router-dom';

const About = () => {
  
  return (
    <div className="flex items-center justify-center bg-gray-100 ">
      <div className="container rounded-xl my-4 px-8 py-6 bg-white bg-cover bg-center shadow-lg min-h-screen">
        <h1 className="text-6xl font-bold mb-2">Ministry of Ayush</h1>
      
      <div className='flex items-center'>
      <div className='w-1/2 h-full'>
        <p className='py-4 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores laboriosam illo  voluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem ipsuiti voluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem niti voluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem ipsum oluptates magni autem asperiores libero iure odio.
        </p>
        <p className='py-4 text-xl'>Lorem ipeniti voluptates magni autem asperiores libero iure odio.
        </p>
        </div>
        <div className='w-1/2'>
          <img src={ayush_bg} alt="background" />
        </div>
        </div>
        <div className='my-4'>
        <Link to="/searchpage" className="bg-blue-500 px-6 py-4 hover:bg-blue-700 transition rounded-lg duration-300 ease-in-out text-white text-xl font-semibold">Learn More</Link>

        
      </div>
      </div>
    </div>
  );
};

export default About;
