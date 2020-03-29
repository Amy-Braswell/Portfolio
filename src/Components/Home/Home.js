import React from 'react'
import './Home.css'


function Home() {
    return(
        <header>
            <div className='left bio-head'>
                <h2 className='hello'>Hello<span>.</span></h2>
                <p>My name is Amy Braswell.</p>
                <p>I am a fullstack developer based out of Chicago. I have a strong proclivity for dynamic puzzles...</p>
                <p>I was that kid who would sit in the corner with a brain teaser for hours.</p> 
                <p>No, really! They had to take my Rubik's Cube away...</p>
            </div>
            <div className='right'>
                <img 
                    className='header-img'
                    src={require('../../Images/Backgrounds/Cube.png')} 
                    alt='cube-diagram'
                >
                </img>        
            </div>
        </header>
    )
}

export default Home