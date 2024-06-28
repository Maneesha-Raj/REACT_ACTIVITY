import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Aboutme from './components/Aboutme'
import Education from './components/Education'
import Interests from './components/Interests'
import Buttons from './components/Buttons'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-gradient-to-r from-teal-400 from-10% via-teal-200via-30% to-teal-100 to-90%'>
            <Navbar/>

            <Aboutme/>
            <hr/>
            <Education/>
            <hr/>
            <Interests/>
            <hr/>
            <Buttons/>

       </div>

    </>
  )
}

export default App
