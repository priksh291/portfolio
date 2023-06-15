import React from 'react'

import pkcrypto from '../assets/portfolio/pkcrypto.jpg'
import tenzi from '../assets/portfolio/tenzi.png'
import gym from '../assets/portfolio/gym.jpg'
import oyo from '../assets/portfolio/oyo.jpg'
import download from '../assets/portfolio/download.jpg'
import spotify from '../assets/portfolio/spotify.jpg'

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
            src: gym,
            heading : "Gym and Training Center- Fitclub",
            sitelink : "https://playful-choux-bb46c2.netlify.app/",
            code : 'https://github.com/priksh291/FitClub-Starter'
        },
        {
            id:3,
            src: spotify,
            heading : "Spotify",
            sitelink : 'https://spotify-clone-client.netlify.app/',
            code: 'https://github.com/priksh291/SpotifyClone2.0'
            
        },
        
        {
            id:4,
            src: tenzi,
            heading : "Tenzi Game",
            sitelink : 'https://zippy-sorbet-03c2bc.netlify.app/',
            code : 'https://github.com/priksh291/Tenzies'
        },
        
        {
            id:5,
            src: oyo,
            heading : "Hotel Reservation",
            sitelink : 'https://master--splendid-eclair-1056fd.netlify.app/',
            code : 'https://github.com/priksh291/airbnb-'
        },
        
        {
            id:6,
            src: download,
            heading : "Projects Server",
            sitelink: "https://gorgeous-stardust-0d2c21.netlify.app/",
            code: 'https://github.com/priksh291/reactcourse'
            
        },
        
    ]
    const handleClick = (sitelink) => {
        
        window.open(sitelink,'_blank' ,'noopener,noreferrer');
    };
    const CodeClick = (code) => {
        
        window.open(code,'_blank' ,'noopener,noreferrer');
    };

    return(

        
        <div name = "portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen pb-20'>
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
