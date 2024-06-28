import React from 'react'

import email from '../assets/images/email.png'
import comments from '../assets/images/comments.png'
import whatsapp from '../assets/images/whatsapp.png'
import instagram from '../assets/images/instagram.png'

const Buttons = () => {
  return (
    <>
        <div>

            <div className="flex gap-10 p-8 float-right">
                <img className="w-8 h-8 hover:animate-bounce w-6 h-6" src={email}/>
                <img className="w-8 h-8" src={comments}/>
                <img className="w-8 h-8" src={whatsapp}/>
                <img className="w-8 h-8" src={instagram}/>
            </div>
            <p>
                
                <br/> <br/><br/>

                <br/><br/><br/>


            </p>

    
        </div>
    </>
  )
}

export default Buttons