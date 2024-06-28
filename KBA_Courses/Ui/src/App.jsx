import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {createBrowserRouter,createRoutesFromElements,RouterProvider,Route} from "react-router-dom"

// import logo from './assets/images/kbalogo.png'
// import pics from './assets/images/rp.png'
// import Navbar from './components/Navbar'
// import Hero from './components/Hero'
// import CourseCards from './components/CourseCards'
import Homepage from './pages/Homepage'
import Coursespage from './pages/Coursespage'
import NotFoundpage from './pages/NotFoundpage'
import AddCoursepage from './pages/AddCoursepage'
import Contactpage from './pages/Contactpage'


function App() {
  // const [count, setCount] = useState(0)

    const router=createBrowserRouter(
      createRoutesFromElements(
        <>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/courses" element={<Coursespage/>}/>
          <Route path='/*' element={<NotFoundpage/>}/>
          <Route path='/addcourse' element={<AddCoursepage/>}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </>
      )

    )

  return (
    <>
           
            {/* <Navbar/>

            <Hero/>
          
              
            <CourseCards/>
   
            <div className='flex justify-center mb-40'>
                <button className='w-80 h-10 rounded-full bg-purple-500 text-white font-medium  hover:bg-purple-600' >View all Courses</button>
            </div> */}

            <RouterProvider router={router}/>
            

    </>
  )
}

export default App
