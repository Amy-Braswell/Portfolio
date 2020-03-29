import React from 'react'

function ProjectPage1(){
    return(
        <section className='project-main project-page project-page-background'>
            <h2 className='project-page'>Play in the Dirt<span>.</span></h2>
            <div className='project-flex'>
                <div className='screenshot-wrapper'>
                    <a 
                        href='https://amy-braswell.github.io/NatlPark_API/' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img 
                            className='screenshot' 
                            src={require('../../../Images/Project-Thumbnails/National_Parks_606x1000.jpg')} 
                            alt='screen shot of park app'
                        >
                        </img>
                    </a>
                </div>

                <div className='project-description'>
                    <h3>Find a Park App</h3>
                    <p>This app will return the National Parks within a US State specified by the user. A search can accept up to three states and the user can 
                        limit the number of parks included in the query.</p> 
                    <p>I wanted to build an app to help others find the many parks available to us throughout our country.  </p> 
                    <p>I built this app to share with anyone who likes to get lost every now and then. </p>
                    <p>Skills - HTML, CSS, jQuery, Fetch</p>
                    <div className='links'>
                        <a 
                            className='project-link' 
                            href='https://amy-braswell.github.io/NatlPark_API/' 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                        Find a Park
                        </a>
                        <span className='link-divider'>|</span>
                        <a  
                            className='project-link' 
                            href='https://github.com/Amy-Braswell/NatlPark_API' 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                        See My Code
                        </a>
                    </div>
                </div>
            </div>     
        </section>
    )
}

export default ProjectPage1