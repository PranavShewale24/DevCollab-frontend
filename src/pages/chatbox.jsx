// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// //import io from "socket.io-client";

// //const socket = io("http://localhost:5000"); // Your backend socket URL

// function ChatBox() {
//   const { projectId } = useParams(); // Get projectId from URL
//   const [messages, setMessages] = useState([]);
//   const [newMsg, setNewMsg] = useState("");

//   // useEffect(() => {
//   //   if (!projectId) return;

//   //   socket.emit("joinRoom", projectId);

//   //   socket.on("receiveMessage", ({ message, sender }) => {
//   //     setMessages((prev) => [...prev, { message, sender }]);
//   //   });

//   //   return () => {
//   //     socket.emit("leaveRoom", projectId);
//   //     socket.off("receiveMessage");
//   //   };
//   // }, [projectId]);

//   // const sendMessage = () => {
//   //   if (!newMsg.trim()) return;

//   //   socket.emit("sendMessage", {
//   //     projectId,
//   //     message: newMsg,
//   //     sender: currentUser.fullName,
//   //   });

//     setMessages((prev) => [...prev, { message: newMsg, sender: currentUser.fullName }]);
//     setNewMsg("");
//   };
// {
//   return (
//     <div className="chat-container border p-4 rounded shadow mt-4">
//       <h3 className="text-lg font-bold mb-2">Project Chat</h3>
//       <div className="chat-messages h-48 overflow-y-scroll bg-gray-100 p-2 mb-2">
//         {messages.map((msg, index) => (
//           <div key={index}>
//             <strong>{msg.sender}:</strong> {msg.message}
//           </div>
//         ))}
//       </div>
//       <div className="flex gap-2">
//         <input
//           type="text"
//           className="flex-1 border px-2 py-1"
//           value={newMsg}
//           onChange={(e) => setNewMsg(e.target.value)}
//           placeholder="Type a message..."
//         />
//         <button
//           onClick={sendMessage}
//           className="bg-blue-500 text-white px-3 py-1 rounded"
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// }


// export default ChatBox;
