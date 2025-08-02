import React, { useState } from "react";
import axios from "axios";

const techOptions = ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Python", "Flask"];
const roleOptions = ["Frontend Developer", "Backend Developer", "Full Stack Developer", "UI/UX Designer"];

function AddPost() {
  const [post, setPost] = useState({
    title: "",
    description: "",
    techStack: [],
    role: [],
    status: "Not Started",
  });

  const handleChange = (field, value) => {
    setPost({ ...post, [field]: value });
  };

  const handleCheckboxChange = (field, value) => {
    setPost((prev) => {
      const isSelected = prev[field].includes(value);
      return {
        ...prev,
        [field]: isSelected
          ? prev[field].filter((item) => item !== value)
          : [...prev[field], value],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/projects", post);
      alert("Project posted successfully!");
      setPost({
        title: "",
        description: "",
        techStack: [],
        role: [],
        status: "Not Started",
      });
    } catch (err) {
      alert("Failed to post project.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4">Add New Project</h2>
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label className="font-semibold">Project Title</label>
          <input
            type="text"
            value={post.title}
            onChange={(e) => handleChange("title", e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          />
        </div>

        {/* Description */}
        <div className="mb-4">
          <label className="font-semibold">Description</label>
          <textarea
            value={post.description}
            onChange={(e) => handleChange("description", e.target.value)}
            className="w-full border px-3 py-2 rounded"
            rows="4"
            required
          />
        </div>

        {/* Tech Stack - Multi Select */}
        <div className="mb-4">
          <label className="font-semibold">Tech Stack</label>
          <div className="flex flex-wrap gap-2">
            {techOptions.map((tech) => (
              <label key={tech} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={tech}
                  checked={post.techStack.includes(tech)}
                  onChange={() => handleCheckboxChange("techStack", tech)}
                />
                {tech}
              </label>
            ))}
          </div>
        </div>

        {/* Role - Multi Select */}
        <div className="mb-4">
          <label className="font-semibold">Looking for:</label>
          <div className="flex flex-wrap gap-2">
            {roleOptions.map((role) => (
              <label key={role} className="flex items-center gap-1">
                <input
                  type="checkbox"
                  value={role}
                  checked={post.role.includes(role)}
                  onChange={() => handleCheckboxChange("role", role)}
                />
                {role}
              </label>
            ))}
          </div>
        </div>

        {/* Status */}
        <div className="mb-4">
          <label className="font-semibold">Project Status</label>
          <select
            value={post.status}
            onChange={(e) => handleChange("status", e.target.value)}
            className="w-full border px-3 py-2 rounded"
            required
          >
            <option value="Not Started">Not Started</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Done">Done</option>
          </select>
        </div>

        {/* Submit */}
        <button
          type="submit"
         
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Submit Project
        </button>
      </form>
    </div>
  );
}

export default AddPost;
