import React from 'react'

const About = () => {
  return (
    <div name = 'about' className= "w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
        </div>
        
        <p className='text-xl mt-20'>  
        My name is Prince Kshitij, and I am graduated from JSS Academy of Technical Education, NOIDA.I completed my Bachelor's degree in Computer Science and Engineering (CSE).

        <br/>
        
        Passionate about the artistry and functionality of web development, I am a dedicated front-end developer with a strong drive to create engaging and user-centric digital experiences. I find joy in the intricate process of transforming designs into interactive websites that captivate and delight users. With a solid foundation in HTML, CSS, and JavaScript, I am committed to staying at the forefront of emerging trends and technologies in the rapidly evolving world of front-end development
        </p>

        <br/>

        {/* <p className='text-xl'>
        I strive to create visually stunning and functional websites. I am constantly exploring new technologies and trends in the industry to stay ahead of the curve and deliver cutting-edge solutions.
        </p> */}

        <p className='text-xl'>
        I have recently completed an enriching internship as a front-end developer, where I gained practical experience in collaborating with cross-functional teams and delivering high-quality projects within tight deadlines. Through my internship, I honed my skills in responsive design, optimized performance, and intuitive user interfaces.
        </p>
        

      </div>
    </div>
  )
}

export default About
