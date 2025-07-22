import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from 'react-router-dom';
import Login from "./login";

import React from "react";
function SignUp(){
    const [message, setmessage] = useState("");

    const [formdata,setform]=useState({
        name:"",
        email:"",
        password:"",
        confirm_password:""
    })
    const navigate = useNavigate();
    const handlechange=(e)=>{
        setform(prev=>({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }
    const handlesubmit=(e)=>{
        console.log("successfully signedup");
        setmessage("successfully signedup");
        navigate("/login"); 
    }; 
    
    return(
    <div className="flex items-center justify-center ">
    <div className="bg-gray-500 w-[500px] h-[600px] rounded-3xl shadow-lg p-6 mx-auto  mt-5">
        <h1 className="text-4xl font-bold mb-6 text-center ">SignUP</h1>
        <form onSubmit={handlesubmit}>
            <div>
                <label >UserName</label>
                <input type="text" name="name" value={formdata.name} onChange={handlechange} placeholder="UserName" className="bg-white ml-10 rounded " required></input>
            </div>
             <div className="mt-4">
                <label >email</label>
                <input type="email" name="email" value={formdata.email} onChange={handlechange} placeholder="...@gmail.com"className="bg-white ml-10 rounded" required></input>
            </div>
             <div className="mt-4">
                <label >password</label>
                <input type="password" name="password" value={formdata.password} onChange={handlechange} placeholder="******"className="bg-white ml-10 rounded "required></input>
                 <a href="#" className="text-xs font-medium text-indigo-600 hover:text-indigo-800">
                    Forgot Password?
                  </a>
            </div>
            <div className="mt-4">
                <label >Confirm password</label>
                <input type="password" name="confirm_password" value={formdata.confirm_password} placeholder="******" onChange={handlechange} className="bg-white ml-10 rounded" required></input>
            </div>
            <div>
                <button
              type="button"
              className="w-full flex items-center justify-center bg-white border border-gray-300 py-3 px-4 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
            >
              <FcGoogle className="w-5 h-5 mr-2" />
              Sign up with Google
            </button>
            </div>
            <div>
                 <p className="mt-8 text-center text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 hover:text-indigo-800 font-medium">
                 Log in
              </Link>
            </p>

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
            Sign Up
          </button>
         
        </form>
         {/* {message && (
          <p className="text-green-600 mt-4 text-center">{message}</p>
        )} */}
    </div>
    </div>
    )
}
export default SignUp;
