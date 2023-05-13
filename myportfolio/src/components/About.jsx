import React from 'react'

const About = () => {
  return (
    <div name = 'about' className= "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        
        <p className='text-xl mt-20'>  
        My name is Prince Kshitij, and I am a recent graduate from JSS Academy of Technical Education, NOIDA.I completed my Bachelor's degree in Computer Science and Engineering (CSE).Throughout my academic journey, I acquired a strong foundation in programming, algorithms, and software development principles. My coursework provided me with a comprehensive understanding of various programming languages and technologies, including HTML, CSS, JavaScript, and framework like React.
        </p>

        <br/>

        <p className='text-xl'>
        I am passionate about creating visually appealing and intuitive web experiences that combine functionality and aesthetics. I thrive in dynamic and challenging environments, continuously seeking opportunities to expand my knowledge and stay updated with the latest trends and technologies in development.
        </p>
        

      </div>
    </div>
  )
}

export default About
