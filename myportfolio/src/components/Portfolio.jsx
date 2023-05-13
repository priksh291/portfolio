import React from 'react'
import digital from '../assets/portfolio/digital.jpg'
import pkcrypto from '../assets/portfolio/pkcrypto.jpg'
import tenzi from '../assets/portfolio/tenzi.png'
import one from '../assets/portfolio/one.jpg'
import oyo from '../assets/portfolio/oyo.jpg'
import download from '../assets/portfolio/download.jpg'

const Portfolio = ()=> {

    
    
    

    const portfolios = [
        {
            id:1,
            src: pkcrypto,
            heading : "Crypto App",
            sitelink : 'https://645f36ccc41fbc00075b00b1--benevolent-strudel-1e1b68.netlify.app/',
            code : 'https://github.com/priksh291/crypto-site'
        },
        {
            id:2,
            src: tenzi,
            heading : "Tenzi Game",
            sitelink : 'https://zippy-sorbet-03c2bc.netlify.app/',
            code : 'https://github.com/priksh291/Tenzies'
        },
        {
            id:3,
            src: one,
            heading : "Gaming Hub",
            sitelink : 'https://github.com/priksh291/gaming-video'
        },
        {
            id:4,
            src: oyo,
            heading : "Hotel Reservation",
            sitelink : 'https://dashing-tanuki-60664a.netlify.app/',
            code : 'https://github.com/priksh291/airbnb-'
        },
        {
            id:5,
            src: download,
            heading : "Pacman Game",
            code: 'https://github.com/priksh291/pacman-game-using-c-'
            
        },
        {
            id:6,
            src: digital,
            heading : "Digital Marketing",
            code: 'https://github.com/priksh291/digital-market'
            
        },

    ]
    const handleClick = (sitelink) => {
        
        window.open(sitelink,'_blank' ,'noopener,noreferrer');
    };
    const CodeClick = (code) => {
        
        window.open(code,'_blank' ,'noopener,noreferrer');
    };

    return(

        
        <div name = "portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-6 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-10 sm:px-0'>
                    {
                        portfolios.map(({id,src,heading,sitelink,code}) =>(
                            <div key={id}  className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src} alt = "" className='rounded-md duration-200 hover:scale-105'/>
                        <h2 className='flex items-center justify-center p-4'>{heading}</h2>
                        <div className='flex items-center justify-center'>
                            <button onClick={() => handleClick(sitelink)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                            <button onClick={() => CodeClick(code)} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                        </div>
                    </div>
                            
                            
                    ))
                    }
                    
                </div>
            </div>
        </div>
       
    )
}

export default Portfolio