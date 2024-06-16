import React from 'react';
import HosBan from '../assets/hos_ban.jpg';
import { Link , useLocation} from 'react-router-dom';

const Banner = () => {
  const location = useLocation();
  const pathname = location.pathname.substring(1); // Get pathname without leading slash
  const name = pathname.charAt(0).toUpperCase() + pathname.slice(1);
  return (
    <div className="relative">
      {/* Image Container */}
      <div className="relative">
        <img src={HosBan} alt="Hos ban" className="w-screen max-h-[50vh]" />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex flex-col justify-center mx-11">
          <h1 className="text-6xl font-inter">{name} Us &gt;</h1>
          <p className='py-8 px-4 text-xl'><Link to='/'>Home</Link><span className='text-gray-700 text-xl px-4'>&gt; {name}</span> </p> 
        </div>
      </div>
    </div>
  );
};

export default Banner;
