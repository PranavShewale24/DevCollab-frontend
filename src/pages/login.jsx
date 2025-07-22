import { useState } from "react";
import { Link,useNavigate } from 'react-router-dom'
import { FcGoogle } from "react-icons/fc";
import Home from './home.jsx'


import React from "react";
function Login(){
    const [formdata,setform]=useState({
        name:"",
        email:"",
        password:"",
        confirm_password:""
    })
    const [message, setmessage] = useState("");

    const handlechange=(e)=>{
        setform(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const navigate = useNavigate();
    const handlesubmit=(e)=>{
        console.log("successfully signedup");
        setmessage("successfully signedup");
        navigate("/");
    }; 
    return(
    <div className="flex items-center justify-center ">
    <div className="bg-gray-500 w-[500px] h-[600px] rounded-3xl shadow-lg p-6 mx-auto  mt-5">
        <h1 className="text-4xl font-bold mb-6 text-center ">Login</h1>
        <form onSubmit={handlesubmit}>
            <div>
                <label >UserName</label>
                <input type="text" name="name" value={formdata.name} onChange={handlechange} className="bg-white ml-10 rounded "required></input>
            </div>
             <div className="mt-4">
                <label >email</label>
                <input type="email" name="email" value={formdata.email} onChange={handlechange} className="bg-white ml-10 rounded"required></input>
            </div>
             <div className="mt-4">
                <label >password</label>
                <input type="password" name="password" value={formdata.password} onChange={handlechange} className="bg-white ml-10 rounded "required></input>
                 <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
                    Forgot Password?
                  </a>
            </div>
           
            <div>

            {/* Legal */}
            <p className="mt-8 text-xs text-center text-gray-500">
              By signing up, you agree to our{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-indigo-600 hover:text-indigo-800">
                Privacy Policy
              </a>.
            </p>
            </div>
              <button
            type="submit"
            
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-200"
          >
            Login
          </button>
        </form>
    </div>
    </div>
    )
}
export default Login;
