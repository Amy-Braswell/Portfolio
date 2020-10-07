import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import NotFound from '../NotFound/NotFound'
import Home from '../../Components/Home/Home'
import About from '../../Components/About/About'
import Testimonials
 from '../../Components/Testimonials/Testimonials'
import Projects from '../../Components/Projects/Projects'
import Resume from '../../Components/Resume/Resume'
import Skills from '../../Components/Skills/Skills'
import ProjectPage1 from '../../Components/Projects/ProjectPage/ProjectPage-1'
import ProjectPage2 from '../../Components/Projects/ProjectPage/ProjectPage-2'
import ProjectPage3 from '../../Components/Projects/ProjectPage/ProjectPage-3'
import './App.css'


export default class App extends Component {
  render(){
    return (
      <div>
        <Navigation />
        <main className='Content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/resume' component={Resume} />
            <Route path='/testimonials' component={Testimonials} />
            <Route path='/skills' component={Skills} />
            <Route path='/project1' component={ProjectPage1} />
            <Route path='/project2' component={ProjectPage2} />
            <Route path='/project3' component={ProjectPage3} />
            <Route component={NotFound} />  
          </Switch>
        </main>
        <Footer /> 
      </div>
    )
  }
}
