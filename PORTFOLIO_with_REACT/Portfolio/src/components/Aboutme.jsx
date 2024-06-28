import React from 'react'

import photo1 from '../assets/images/photo1.jpg'

const Aboutme = () => {
  return (
    <>
        <div className="p-8 bg-teal-200 ml-12"> 

            <div>
                <div className="p-8">
                    <h4 className="font-bold font-serif text-3xl">Hello</h4>
                    <h1 className="font-bold font-serif text-5xl">I am <span className="text-7xl font-extrabold font-serif"> Maneesha </span> </h1>	
                </div>

                    
                    <h2 className="font-bold font-serif text-3xl "> About Me...</h2>
                    <div className="flex gap-10 ">
                
                        <p className="text-justify font-serif font-semibold w-6/12 mt-10">
                        I am Maneesha Raj.I live in Chengannur,a small town 
                        in the Alappuzha district of Kerala.I have a degree 
                        in B.Sc. Computer Science from Assumption College , 
                        Changanacherry.After that I also pursued an MCA from 
                        Cochin University of Science and Technology. My 
                        career interests include coding,designing and 
                        developing. I seek a creative and challenging 
                        position in an organization that gives me an 
                        opportunity for self-improvement , while 
                        contributing to the symbolic growth of the 
                        organization with my skills.
                        
                        </p>
            
            
                        <img className="w-44 shadow-xl shadow-black" src={photo1} alt=""/>
            
                    </div>

            </div>
        </div>
    </>
  )
}

export default Aboutme