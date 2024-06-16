import React from 'react'
import logo from '../assets/logo.png'

const cura = () => {
  return (
    <div>
    <div className='flex justify-center  min-h-[70vh] mx-4 my-6'>
        
        <div className='w-1/2  text-lg font-sans flex flex-col justify-evenly'>        
        <p>Our website serves as a vital hub for health-conscious individuals seeking both reliable hospital data and up-to-the-minute health news. We aggregate a vast array of hospital information, offering detailed insights into facilities, specialties, ratings, and patient feedback, ensuring users can make informed decisions about their healthcare options. Whether searching for the nearest emergency room or comparing treatment outcomes, our comprehensive database simplifies the process of finding optimal care providers. In addition to this wealth of hospital data, we curate timely health news from reputable sources worldwide.</p>
        <p>From breakthrough medical advancements to public health advisories and wellness tips, our platform keeps users informed and empowered to prioritize their well-being. With a commitment to accessibility and accuracy, we aim to be the go-to resource for anyone navigating the complexities of healthcare decisions and staying updated on critical health developments.</p>
        </div>
        <div className='w-1/2 flex items-center justify-center'>
            <img src={logo} alt="cura" width={600}/>
        </div>
    </div>
    </div>
  )
}

export default cura