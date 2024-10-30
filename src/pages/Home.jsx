import React from 'react'
import Herosection from '../component/Herosection'
import About from './About'
import Project from './Project'
import Skills from './Skills'
import Contact from './Contact'

export default function Home() {
  return (
    <div>
       <Herosection />
        <About />
        <Project />
        <Skills />
        <Contact />
    </div>
  )
}
