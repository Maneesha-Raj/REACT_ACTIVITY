import React from 'react'

const Interests = () => {
  return (
    <>
        <div className=" w-11/12 h-5/6 p-12">
	    <div className="grid grid-cols-2 gap-20 ml-12">
		<div className="border rounded-3xl border-4 border-white border-solid w-48 p-8 bg-white shadow-xl shadow-black">
		<h3 className="font-bold font-serif text-xl">Interests</h3>
		<ul className="font-bold font-serif ml-8 mt-4 list-disc">
			<li>Designing</li>
			<li>Coding</li>
			<li>Developing</li>
			
		
		</ul>
		</div>
		
		<div className="border rounded-3xl border-4 border-white border-solid w-48 p-8 bg-white shadow-xl shadow-black">
		<h3 className="font-bold font-serif text-xl">Hobbies</h3>
		<ul className="font-bold font-serif ml-8 mt-4 list-disc">
			<li>Drawing</li>
			<li>Painting</li>
			<li>Listening to Music</li>
			<li>Reading</li>
		
		</ul>
		</div>
	    </div>	
        </div>
    </>
  )
}

export default Interests