import React, {Component} from 'react'
import{Link} from 'react-router-dom'
import './Projects.css'


class Projects extends Component{
    constructor(props){
        super(props)
        this.state={
            hover: false
        }
    }
   
    handleHover = () => {
    this.setState(prevState => ({
        hover: !prevState.hover
        }))
    }

    render(){
        const {hover} = this.state

        return(    
            <section className='project-section projects-background'>
                <h2>Projects<span>.</span></h2>
                <div className='flexbox-container'>
                    
                    <Link 
                        className='flex-project project-1-wrapper'
                        to='/project1'
                        target='blank'
                        // onMouseOver={this.handleHover} 
                        // onMouseLeave={this.handleHover}                  
                    >
                        <div className ='project-wrapper'>
                            <div className='project-1'>
                            <p className={`project-1-title ${hover ? 'hover' : ''}`}>Natl Park App</p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link 
                        className='flex-project project-2-wrapper'
                        to='/project2' 
                        target='blank'
                    >
                        <div className ='project-wrapper'>
                            <div className='project-2'>
                            <br></br>
                                <p id='p2-desktop' className='project-2-title-desktop project-title'>A Cat, A Dog, and<br></br>a Ticked Off Bird</p>
                                <p id='p2-mobile' className='project-2-title-mobile project-title'>Weather App</p>
                            </div>
                        </div>
                    </Link>
                    
                    <Link 
                        className='flex-project project-3-wrapper'
                        to='/project3'
                        target='blank'
                    >
                        <div className ='project-wrapper'>
                            <div className='project-3'>
                                <p id='p3' className='project-3-title project-title'>Quiz App</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        )
    }
}

export default Projects