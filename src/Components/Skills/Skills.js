import React from 'react'
import './Skills.css'

function Skills() {
    return(
        <section className='skills-page skills-background'>
            <h2>Skills<span>.</span></h2>
            <div className='skills-flex'>
                <div className='column skills-1'>
                    <h3>Frontend</h3>
                    <hr></hr>
                    <p className='first-p'>React Native</p>
                    <p>React Redux</p>
                    <p>React w/ Hooks</p>
                    <p>JavaScript</p>
                    <p>HTML 5</p>
                    <p>CSS 3</p>
                    <p>jQuery</p>
                    <p>Axios</p>
                    <p>Fetch</p>
                    <p>Jest / Enzyme</p>
                    <p>Progressive Enhancement</p>
                    <p>Web Accessibility</p>
                </div>
                <div className='column skills-2'>
                    <h3>Backend</h3>
                    <hr></hr>
                    <p className='first-p'>Node JS</p>
                    <p>Express Server</p>
                    <p>FireBase</p>
                    <p>RESTful APIs</p>
                    <p>Apollo Server</p>
                    <p>GraphQL</p>
                    <p>MongoDB</p>
                    <p>Postgres</p>
                    <p>AuthO</p>
                    <p>JWT</p>
                    <p>Passport</p>
                    <p>Mocha / Chai</p>
                </div>
                <div className='column skills-3'>
                    <h3>Dev Tools / Other Skills</h3>
                    <hr></hr>
                    <p className='first-p'>Git</p>
                    <p>GitHub</p>
                    <p>Command Line Interface (CLI)</p>
                    <p>Chrome Dev Tools</p>
                    <p>Cloudinary</p>
                    <p>Heroku</p>
                    <p>Vercel</p>
                    <p>Adobe Photoshop</p>
                </div>

            </div>
            
        </section>

    )
}

export default Skills