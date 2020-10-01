import React from 'react'
import './Resume.css'

function Resume() {
    return( 
        <section className='resume resume-background'>
            <div className='resume-container'>
                <h2>Resume<span>.</span></h2> 
                <hr></hr>
  
                <div className='iframe-container'>
                    <iframe 
                        src={require('../../Images/Resume.pdf')} 
                        alt='PDF of Resume' 
                        title='resume' 
                        allowFullScreen
                    >     
                    </iframe>
                </div>
            </div>

        </section>
    )
}

export default Resume