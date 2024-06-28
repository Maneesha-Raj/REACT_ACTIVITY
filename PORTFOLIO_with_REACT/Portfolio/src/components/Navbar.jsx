import React from 'react'

const Navbar = () => {
  return (
    <>
         <div className="h-32">
          <h2 className="text-6xl font-extrabold font-serif mt-10">Portfolio</h2>
        </div>	
        <div className="flex gap-5 font-semibold  h-10 float-right mr-10">
                
                <div className="text-blue-800 hover:underline"><a href="">About Me</a></div>
                <div className="text-blue-800 hover:underline"><a href="" >Education</a></div>
                <div className="text-blue-800 hover:underline"><a href="">Interests</a></div>
            
        </div>
    </>
  )
}

export default Navbar