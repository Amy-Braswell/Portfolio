import React from 'react'
import './Skills.css'

function Skills() {
    return(
        <section className='skills-page skills-background'>
            <h2>Skills<span>.</span></h2>
            <div className='skills-flex'>
                <div className='column skills-1'>
                    <h3>Languages</h3>
                    <hr></hr>
                    <p className='first-p'>JavaScript</p>
                    <p>HTML</p>
                    <p>CSS</p>
                </div>
                <div className='column skills-2'>
                    <h3>Frameworks</h3>
                    <hr></hr>
                    <p className='first-p'>jQuery</p>
                    <p>React</p>
                </div>
                <div className='column skills-3'>
                    <h3>Additional Skills</h3>
                    <hr></hr>
                    <p className='first-p'>APIs</p>
                    <p>Chai</p>
                    <p>Enzyme</p>
                    <p>Fetch</p>
                    <p>Heroku</p>
                    <p>Jest</p>
                    <p>Git &amp; GitHub</p>
                    <p>Mocha</p>
                    <p>Photoshop</p>
                    <p>Responsive Design</p>
                    <p>Web Accessibility</p>
                </div>

            </div>
            
        </section>

    )
}

export default Skills