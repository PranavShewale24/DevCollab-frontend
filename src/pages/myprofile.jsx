import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Profile() {
  const { userId } = useParams();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    password: "",
    bio: "",
    skills: "",
    githubURL: "",
    linkedinURL: "",
    profileImage: "",
    ownedProjects: [],
    joinedProjects: [],
  });

  const [imageFile, setImageFile] = useState(null);
  const [editable, setEditable] = useState(false);
  const [isOwner, setIsOwner] = useState(true); // Simulated

//   useEffect(() => {
//     axios.get(`/api/users/${userId}`).then((res) => {
//       setUser(res.data.user);
//       setIsOwner(res.data.isOwner);
//     });
//   }, [userId]);

  const handleChange = (field, value) => {
    setUser({ ...user, [field]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
  };

  const handleSave = async () => {
    const formData = new FormData();
    for (const key in user) {
      if (key !== "ownedProjects" && key !== "joinedProjects") {
        formData.append(key, user[key]);
      }
    }
    if (imageFile) {
      formData.append("profileImage", imageFile);
    }

    try {
      await axios.put(`/api/users/${userId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Profile updated");
      setEditable(false);
    } catch (err) {
      alert("Update failed");
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>

      {/* Profile Image */}
      <div className="relative mb-4">
        <img
          src={
            imageFile
              ? URL.createObjectURL(imageFile)
              : user.profileImage || "https://via.placeholder.com/150"
          }
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-2 border-gray-300"
        />
        {editable && isOwner && (
          <input
            type="file"
            onChange={handleImageChange}
            accept="image/*"
            className="absolute bottom-0 left-0 text-xs"
          />
        )}
      </div>

      {/* Full Name */}
      <div className="mb-4">
        <label className="font-semibold">Full Name:</label>
        {editable ? (
          <input
            value={user.fullName}
            onChange={(e) => handleChange("fullName", e.target.value)}
            className="w-full border px-2 py-1"
          />
        ) : (
          <p>{user.fullName}</p>
        )}
      </div>

      {/* Email */}
      <div className="mb-4">
        <label className="font-semibold">Email:</label>
        {editable ? (
          <input
            value={user.email}
            onChange={(e) => handleChange("email", e.target.value)}
            className="w-full border px-2 py-1"
          />
        ) : (
          <p>{user.email}</p>
        )}
      </div>

      {/* Password */}
      {editable && (
        <div className="mb-4">
          <label className="font-semibold">Password:</label>
          <input
            type="password"
            value={user.password}
            onChange={(e) => handleChange("password", e.target.value)}
            className="w-full border px-2 py-1"
          />
        </div>
      )}

      {/* Bio */}
      <div className="mb-4">
        <label className="font-semibold">Bio:</label>
        {editable ? (
          <textarea
            value={user.bio}
            onChange={(e) => handleChange("bio", e.target.value)}
            className="w-full border px-2 py-1"
          />
        ) : (
          <p>{user.bio}</p>
        )}
      </div>

      {/* Skills */}
      <div className="mb-4">
        <label className="font-semibold">Skills:</label>
        {editable ? (
          <input
            value={user.skills}
            onChange={(e) => handleChange("skills", e.target.value)}
            className="w-full border px-2 py-1"
          />
        ) : (
          <p>{user.skills}</p>
        )}
      </div>

      {/* GitHub URL */}
      <div className="mb-4">
        <label className="font-semibold">GitHub:</label>
        {editable ? (
          <input
            value={user.githubURL}
            onChange={(e) => handleChange("githubURL", e.target.value)}
            className="w-full border px-2 py-1"
          />
        ) : (
          <a href={user.githubURL} target="_blank" rel="noreferrer">
            {user.githubURL}
          </a>
        )}
      </div>

      {/* LinkedIn URL */}
      <div className="mb-4">
        <label className="font-semibold">LinkedIn:</label>
        {editable ? (
          <input
            value={user.linkedinURL}
            onChange={(e) => handleChange("linkedinURL", e.target.value)}
            className="w-full border px-2 py-1"
          />
        ) : (
          <a href={user.linkedinURL} target="_blank" rel="noreferrer">
            {user.linkedinURL}
          </a>
        )}
      </div>

      {/* Owned Projects */}
      <div className="mb-4">
        <label className="font-semibold">Owned Projects:</label>
        <p>{user.ownedProjects?.length > 0 ? user.ownedProjects.join(", ") : "None"}</p>
      </div>

      {/* Joined Projects */}
      <div className="mb-4">
        <label className="font-semibold">Joined Projects:</label>
        <p>{user.joinedProjects?.length > 0 ? user.joinedProjects.join(", ") : "None"}</p>
      </div>

      {/* Action Buttons */}
      {isOwner && (
        <div className="mt-4">
          <button
            onClick={() => setEditable(!editable)}
            className="bg-blue-600 text-white px-4 py-2 rounded mr-2"
          >
            {editable ? "Cancel" : "Edit Profile"}
          </button>
          {editable && (
            <button
              onClick={handleSave}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export default Profile;
  