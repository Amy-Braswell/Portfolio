import React from 'react'

function ProjectPage2(){
    return(
      <section className='project-main project-page project-page-background'>
         <h2 className='project-page'>A Cat, A Dog, and a Ticked Off Bird<span>.</span></h2>
         <div className='project-flex'>
            <div className='screenshot-wrapper'>
               <a 
                  href='https://amy-braswell.github.io/a_cat_a_dog_and_a_ticked_off_bird/' 
                  target='_blank' 
                  rel='noopener noreferrer'
               >
                  <img 
                     className='screenshot' 
                     src={require('../../../Images/Project-Thumbnails/Weather-App-606x1000.jpg')} 
                     alt='screen shot of weather app'
                  >
                  </img>
               </a>
            </div>

            <div className='project-description'>
               <h3>Weather App</h3>
               <p>This app will return current weather conditions from three separate weather api's for a US Zip Code that the user provides.</p> 
               <p>I wanted to build an app that would return weather conditions from more than one source so the user can have a better idea of
                  the actual weather.</p> 
               <p>I built this app to share with anyone who feels like the weather man is never correct. </p>
               <p>Skills - HTML, CSS, jQuery, Fetch</p>
               <div className='links'>
                  <a 
                     className='project-link' 
                     href='https://amy-braswell.github.io/a_cat_a_dog_and_a_ticked_off_bird/' 
                     target='_blank' 
                     rel='noopener noreferrer'
                  >
                  Check the Weather
                  </a>
                  <span className='link-divider'>|</span>
                  <a 
                     className='project-link' 
                     href='https://github.com/Amy-Braswell/a_cat_a_dog_and_a_ticked_off_bird.git' 
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