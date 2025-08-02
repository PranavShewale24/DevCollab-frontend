import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from './navbar.jsx';
import NewPost from './newpost.jsx';

function Home() {
  const [projects, setProjects] = useState([
    {
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
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    },
    {
      _id: "3",
      name: "Portfolio Builder",
      description: "A project to create customizable portfolio websites.",
    }
  ]);

  useEffect(() => {
    // fetch('/api/projects').then(res => res.json()).then(data => setProjects(data))
  }, []);

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <div className="flex items-center justify-center mt-10">
          <h1 className="text-3xl font-bold text-blue-600">WELCOME TO DEVCOLLAB</h1>
        </div>

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">Newly Posted Projects</h1>
          <div className="grid gap-4">
            {projects.map(project => (
              <Link
                key={project._id}
                to={`/project/${project._id}`}
                className="block p-4 bg-gray-100 hover:bg-gray-200 rounded shadow"
              >
                <h2 className="text-xl font-semibold">{project.name}</h2>
                <p className="text-gray-600">{project.description}</p>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-auto p-4 flex justify-center">
          <Link to="/NewPost">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-600 text-xl">
              +
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
