import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "./navbar";

function ProjectDetail() {
  const { id } = useParams();

  const [project, setProject] = useState({
    id: 123,
    name: "Collaborative Code Editor",
    description: "An online real-time collaborative code editor like Google Docs for code.",
    techStack: ["React", "Node.js", "Socket.IO", "MongoDB"],
    rolesNeeded: ["Frontend Developer", "Backend Developer", "UI/UX Designer"],
    postedBy: "Pranav Shewale",
    postedDate: "2025-07-23",
  });

  const [requestSent, setRequestSent] = useState(false);
  const [isEditable, setIsEditable] = useState(true);
  const [message, setMessage] = useState("");
  const [role, setRole] = useState("");

  const handleRequestJoin = () => {
    if (isEditable) {
      if (!role || !message.trim()) {
        alert("Please select a role and enter your message.");
        return;
      }
      alert("Request sent to project owner!");
    } else {
      alert("You can now edit your request.");
    }

    setRequestSent(true);
    setIsEditable(!isEditable);
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

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Select Role:</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            disabled={!isEditable}
          >
            <option value="">-- Choose a role --</option>
            {project.rolesNeeded.map((r, index) => (
              <option key={index} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">Why are you a good fit?</label>
          <textarea
            rows="4"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
            placeholder="Explain your skills, experience, and interest..."
            disabled={!isEditable}
          />
        </div>

        <button
          onClick={handleRequestJoin}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {isEditable ? "Send Request to Join" : "Edit Request"}
        </button>

        {requestSent && (
          <div className="mt-6 p-4 border rounded bg-green-50">
            <h3 className="text-lg font-semibold text-green-700 mb-2">Your Request:</h3>
            <p><strong>Role:</strong> {role}</p>
            <p><strong>Message:</strong> {message}</p>
            <p className="text-sm text-gray-500 mt-2 italic">You can edit and resend your request if needed.</p>
          </div>
        )}
      </div>
    </>
  );
}

export default ProjectDetail;
