import React from 'react'
import Hero from '../../components/students/Hero'
import CoursesList from './CoursesList'
import CoursesSection from '../../components/students/CourseSection'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7'>
        <Hero/> 
        <CoursesSection/>  
        
    </div>
  )
}

export default Home
