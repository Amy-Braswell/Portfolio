import React from 'react'

function ProjectPage1(){
    return(
        <section className='project-main project-page project-page-background'>
            <h2 className='project-page'>Connect<span>.</span></h2>
            <div className='project-flex'>
                <div className='screenshot-wrapper'>
                    <a 
                        href='https://connectivity.now.sh' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img 
                            className='screenshot' 
                            src={require('../../../Images/Project-Thumbnails/Connectivity.jpg')} 
                            alt='screen shot of connectivity app'
                        >
                        </img>
                    </a>
                </div>

                <div className='project-description'>
                    <p>
                        Connectivity is a social media app with a closed, private network of members. 
                        This app was built to provide an option to Facebook so that friends and families 
                        can enjoy the benefits of interacting with each other without the distraction of 
                        advertising and public opinions.
                    </p>
                    <p>Skills - React w/ Hooks, Node JS, Apollo Server, Graph QL, Mongo DB, Cloudinary, FETCH, RESTful API Design, Test-Driven Development (TDD), Jest/Enzyme Unit Testing and Integration Testing</p>
                    <div className='links'>
                        <a 
                            className='project-link' 
                            href='https://connectivity.now.sh' 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                        Try the App
                        </a>
                        <span className='link-divider'>|</span>
                        <a  
                            className='project-link' 
                            href='https://github.com/Amy-Braswell/connectivity' 
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