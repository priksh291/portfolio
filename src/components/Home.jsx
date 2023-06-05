import React from 'react'
import HeroImage from "../assets/HeroImage.jpg";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-scroll";
import '../App.css'

const Home = () => {

   
    
    
  return (
    <div name= "home" className="h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black text-white">
      
        <div className=" max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold">I'm a Web Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                I am Graduated Fresher.
                a fresh graduate with a strong desire to learn and grow
                I am driven by the desire to build beautiful, intuitive, and 
                responsive user interfaces that delight users and
                enhance their overall experience.
                </p>

                <div>
                    <Link to = "portfolio" smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        portfolio

                        <span className='group-hover:rotate-90 duration-300'><MdOutlineKeyboardArrowRight size={27} className='ml-1'/></span>
                        
                    </Link>
                </div>
            </div>
            <div>
                <img src = {HeroImage} alt="My profile" className="rounded-3xl w-2/3 md:w-50 px-2 mx-auto animate-border-radius"/>
            </div>
        </div>

    </div>
  )
}

export default Home;
