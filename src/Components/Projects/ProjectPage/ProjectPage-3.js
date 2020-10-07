import React from 'react'

function ProjectPage3(){
    return(
        <section className='project-main project-page project-page-background'>
            <h2 className='project-page'>Quiz App<span>.</span></h2>
            <div className='project-flex'>
                <div className='screenshot-wrapper'>
                    <a 
                        href='https://amy-braswell.github.io/quiz-app/' 
                        target='_blank' 
                        rel='noopener noreferrer'
                    >
                        <img 
                            className='screenshot' 
                            src={require('../../../Images/Project-Thumbnails/Quiz-App-606x1000.jpg')} 
                            alt='screen shot of quiz app'
                        >     
                        </img>
                    </a>
                </div>

                <div className='project-description'>
                    <p>This quiz app tests the user's understanding of basic camera controls. The app was built to help photography students prepare for graded tests.</p> 
                    <p>The experience of this quiz was designed to offer challenging questions along with some humor to keep the mood light.</p> 
                    <p>I built this app to share with friends who teach photography so they can make it available to their students as a study guide. </p>
                    <p>Skills - HTML, CSS, jQuery</p>
                    <div className='links'>
                        <a 
                            className='project-link' 
                            href='https://amy-braswell.github.io/quiz-app/' 
                            target='_blank' 
                            rel='noopener noreferrer'
                        >
                        Try the App
                        </a>
                        <span className='link-divider'>|</span>
                        <a 
                            className='project-link' 
                            href='https://github.com/Amy-Braswell/quiz-app.git' 
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

export default ProjectPage3
