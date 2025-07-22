import { Link } from 'react-router-dom'
import React from 'react'
import { useState } from 'react'

function Navbar(){
    const [isopen,setopen]=useState(false);
    const toggleMenu=()=>{
        setopen(!isopen);
    }
   

    
return(

    <nav className='bg-gray-800 h-20 ' >
        <div className=' '><button className='bg-white rounded ml-4 mt-6 '  onClick={toggleMenu}> ☰ dashboard </button> <Link to="/login"><button className='bg-white rounded mr-20'>Login</button></Link><Link to ="/signup"><button className='rounded bg-white mr-10'>SignUp</button></Link></div>
        {isopen && (
            <div className='bg-black  w-40 absolute top-20 left-0' >
                <ul>
                    <li className='text-white p-2'><Link to="/">Home 🏠</Link></li>
                    <li className='text-white p-2'><Link to="/myprofile">myprofile 👤</Link></li>
                    <li className='text-white p-2'><Link to="/myprojects">myprojects</Link></li>
                    <li className='text-white p-2'><Link to="/request_invitation 👥">requests</Link></li>
                     <li className='text-white p-2'><Link to="/newpost">newpost</Link></li>
                </ul>
            </div>
        )}

    </nav>
)
}
export default Navbar