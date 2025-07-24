import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import NewPost from './newpost.jsx';

function Home() {
    const [projects,setprojects]=useState([  {
      _id: "1",
      name: "AI Attendance System",
      description: "An AI-based project to auto-mark attendance using face recognition.",
    },
    {
      _id: "2",
      name: "Chat App",
      description: "A real-time chat app using Socket.io and React.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    }]);
    useEffect(()=>{
        fetch().then(res=>res.json()).then(data=>setprojects(data))
    },[]);
    return (

        <>
            <div className="flex items-center justify-center mt-10">
                <h1 className="text-3xl font-bold text-blue-600">WELCOME TO DEVCOLLAB</h1>
            </div>
            <div className="p-6">
      <h1 className="text-3xl font-bold mb-4 ali">Newly Posted Projects</h1>
      <div className="grid gap-4">
        {projects.map(project => (
          <Link key={project.id} to={`/project/${project.id}`} className="block p-4 bg-gray-100 hover:bg-gray-200 rounded shadow">
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-600">{project.description}</p>
          </Link>
        ))}
      </div>
    </div>

           <footer> <div className="relative h-screen">
                <Link to="/NewPost"><button className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded shadow-md hover:bg-blue-600 transition">
                    +
                </button>
                </Link>
            </div></footer>
        </>
    );
}

export default Home;
