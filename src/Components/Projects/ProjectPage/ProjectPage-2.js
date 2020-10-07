import React from 'react'

function ProjectPage2(){
    return(
        <section className='project-main project-page project-page-background'>
            <h2 className='project-page'>Play in the Dirt<span>.</span></h2>
            <div className='project-flex'>
                <div className='screenshot-wrapper'>
                    <a 
                        href='https://play-in-the-dirt.com/' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img 
                            className='screenshot' 
                            src={require('../../../Images/Project-Thumbnails/National_Park.jpg')} 
                            alt='screen shot of park app'
                        >
                        </img>
                    </a>
                </div>

                <div className='project-description'>
                    <p>
                        This app was built for anyone who likes to get lost every now and then... 
                    </p>
                    <p>
                        Find a Park is a lightweight app designed to return the National Parks within a US State 
                        specified by the user. Find a Park is a RESTful API that connects with the NPS Data API 
                        through an attractive and well-organized interface.
                    </p>
                    <p>Skills - React Native, FETCH, RESTful API Design, Test-Driven Development (TDD), Jest/Enzyme Unit Testing and Integration Testing</p>
                    <div className='links'>
                        <a 
                            className='project-link' 
                            href='https://play-in-the-dirt.com/' 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                        Try the App
                        </a>
                        <span className='link-divider'>|</span>
                        <a  
                            className='project-link' 
                            href='https://github.com/Amy-Braswell/find-a-park.git' 
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

export default ProjectPage2