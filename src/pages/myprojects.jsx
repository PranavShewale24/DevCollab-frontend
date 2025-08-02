import React, { useState } from "react";

function ProjectPage() {
  const [showChatFor, setShowChatFor] = useState(null);

  const publishedProjects = [
    {
      id: "1",
      title: "AI Attendance System",
      description: "Face recognition-based student attendance system.",
      techStack: ["React", "Node.js", "OpenCV"],
      role: "Frontend Developer",
      status: "Ongoing",
      team: ["Pranav Shewale", "Alice", "Bob"],
    },
    {
      id: "2",
      title: "DevCollab Platform",
      description: "A developer collaboration portal.",
      techStack: ["React", "MongoDB", "Tailwind CSS"],
      role: "Full Stack Developer",
      status: "Done",
      team: ["Pranav Shewale", "Charlie"],
    },
  ];

  const joinedProjects = [
    {
      id: "3",
      title: "E-commerce Clone",
      description: "Amazon-like clone for learning purposes.",
      techStack: ["Vue.js", "Firebase"],
      role: "UI Designer",
      status: "Not Started",
      team: ["Pranav Shewale", "Diana"],
    },
  ];

  const handleToggleChat = (id) => {
    setShowChatFor(showChatFor === id ? null : id);
  };

  const ProjectCard = ({ project }) => (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="text-xl font-bold">{project.title}</h3>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Tech Stack:</strong> {project.techStack.join(", ")}</p>
      <p><strong>Your Role:</strong> {project.role}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Team Members:</strong> {project.team.join(", ")}</p>
      <button
        onClick={() => handleToggleChat(project.id)}
        className="mt-2 px-3 py-1 bg-blue-500 text-white rounded"
      >
        {showChatFor === project.id ? "Hide Chat" : "Open Chat"}
      </button>

      {showChatFor === project.id && (
        <div className="mt-3 border-t pt-2">
          <h4 className="font-semibold mb-2">Project Chat</h4>
          {/* Placeholder for chat */}
          <div className="h-40 border rounded p-2 bg-gray-50 text-sm overflow-y-auto">
            <p><strong>Alice:</strong> We should use face encoding for accuracy.</p>
            <p><strong>Pranav:</strong> I'll handle the frontend.</p>
            <p><strong>Bob:</strong> Setting up MongoDB cluster now.</p>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-6">My Projects</h1>

      {/* Published Projects */}
      <div>
        <h2 className="text-2xl font-semibold mb-4">Published Projects</h2>
        {publishedProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>

      {/* Joined Projects */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Joined Projects</h2>
        {joinedProjects.map((proj) => (
          <ProjectCard key={proj.id} project={proj} />
        ))}
      </div>
    </div>
  );
}

export default ProjectPage;
