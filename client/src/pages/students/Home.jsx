import React from 'react'
import Hero from '../../components/students/Hero'
import CoursesList from './CoursesList'
import CoursesSection from '../../components/students/CourseSection'
import TestimonialsSection from '../../components/students/TestimonialsSection'
import CallToAction from '../../components/students/CallToAction'
import Footer from '../../components/students/Footer'

const Home = () => {
  return (
    <div className='flex flex-col items-center space-y-7'>
        <Hero/> 
        <CoursesSection/>  
        <TestimonialsSection/>
        <CallToAction/>
        <Footer/>
    </div>
  )
}

export default Home
