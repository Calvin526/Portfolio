import { useState } from 'react'

import './App.css'

import { Link, Route, Routes } from 'react-router'

import Education from './Education';
import Homepage from './Homepage';
import Projects from './Projects';
import Contact from './Contact';


function App() {


  return (
    <>
     <nav class="flex items-center justify-between flex-wrap bg-blue-500 p-5">
      <br />
  <div class="flex items-center flex-shrink-0 text-white mr-6 font-cabin">
    
    <a class="font-semibold text-5xl tracking-tight">
        Calvin Garcia
      </a>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
    
    </div>
    <div>
      <a href="/Calvin_Garcia_Resume.pdf" class="inline-block text-3xl px-6 py-3 leading-none border rounded text-white border-white hover:border-transparent hover:text-purple-500 hover:bg-white mt-4 lg:mt-0"  target="_blank" rel="noopener noreferrer"> View Resume</a>
    </div>
  </div>
</nav>
    
    <Routes>
      <Route path = "/" element = {<Homepage />} />
    </Routes>


    {/*<Link to  = '/' className = "text-4xl">
    Return to Homepage
    </Link>

    <br />

    <Link to  = '/education' className = "text-4xl">
    Education
    </Link>

    <br />

    <Link to  = '/projects' className = "text-4xl">
    Projects
    </Link>

    <br />

    <Link to  = '/contact' className = "text-4xl">
    Contact Me
    </Link>*/}
  

    </>
  )
}

export default App
