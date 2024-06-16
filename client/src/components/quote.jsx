import React from 'react'
import doc from '../assets/doc_new.jpg'

const quote = () => {
  return (
    <div className='flex flex-col bg-sky-200 items-center'>

        <img src={doc} alt="doc" className='rounded-full my-4' width={100}  />
        <p className='font-semibold text-xl'>Dr. Victor Blane</p>
            <p className='text-lg'>(Therapist)</p>
        <div className='flex  items-center'>
            
        <p className='text-2xl font-sans text-center my-4 font-semibold'>“Understanding why people suffer, how they change,<br /> and how to help them live satisfying lives is a fascinating and important undertaking.”</p>
        </div>
    </div>
  )
}

export default quote