import React from 'react'
import './Footer.css'

function Footer() {
    return(
        <footer>
            <a 
                href='https://github.com/Amy-Braswell' 
                target='_blank' 
                rel='noopener noreferrer'
            >
                <img 
                    className='social-icon'
                    src={require('../../Images/Social-Icons/Github-Logo-white-250x250.png')} 
                    alt='Github-icon'
                >
                </img>
            </a>
            <a 
                href='https://www.linkedin.com/in/amybraswell/' 
                target='_blank' 
                rel='noopener noreferrer'
            >
                <img 
                    className='social-icon'
                    src={require('../../Images/Social-Icons/Linked-In-Logo-white-250x250.png')} 
                    alt='LinkedIn-icon'>
                </img>
            </a>
            <a 
                href='mailto:amy@amybraswell.com?Subject=Your-Portfolio' 
                target='_blank' 
                rel='noopener noreferrer'
            >
                <img 
                    className='social-icon'
                    src={require('../../Images/Social-Icons/Email-Logo-white-250x250.png')} 
                    alt='Email-icon'
                >
                </img>
            </a>
        </footer>
    )
}
 
export default Footer