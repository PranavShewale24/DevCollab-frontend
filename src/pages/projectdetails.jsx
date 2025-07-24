import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar"; // Optional: if you’re using a navbar
import { useEffect } from "react";
function ProjectDetail() {
  const { id } = useParams();

  // Hardcoded dummy project data
  const [request,setrequest]=useState(false);

  const [project,setProject]=useState({
    id: 123,
    name: "Collaborative Code Editor",
    description: "An online real-time collaborative code editor like Google Docs for code.",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    rolesNeeded: ["Frontend Developer", "Backend Developer", "UI/UX Designer"],
    postedBy: "Pranav Shewale",
    postedDate: "2025-07-23",
  });
//   useEffect(() => {
//     fetch(`/projects/${id}`)
//       .then(res => res.json())
//       .then(data => setProject(data));
//   }, [id]);

  const handleRequestJoin = () => {
    if(!request)alert("Request sent to project owner!");
    else{
        alert("Request is Cancelled successfully!")
    }
    setrequest(!request);
  };

  return (
    <>

      <div className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">{project.name}</h1>
        <p className="text-gray-700 mb-4">{project.description}</p>

        <div className="mb-4">
          <strong>Tech Stack:</strong>
          <ul className="list-disc list-inside text-gray-600">
            {project.techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="mb-4">
          <strong>Looking for:</strong>
          <ul className="list-disc list-inside text-gray-600">
            {project.rolesNeeded.map((role, index) => (
              <li key={index}>{role}</li>
            ))}
          </ul>
        </div>

        <p className="text-sm text-gray-500 mb-2">
          <strong>Posted by:</strong> {project.postedBy}
        </p>
        <p className="text-sm text-gray-500 mb-6">
          <strong>Posted on:</strong> {project.postedDate}
        </p>
      {(request) ?  (<button
          onClick={handleRequestJoin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          cancel Request
        </button>): (
        <button
          onClick={handleRequestJoin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send Request to Join
        </button>
      )}
      </div>
    </>
  );
}

export default ProjectDetail;
