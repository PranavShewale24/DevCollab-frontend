import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";

function RequestInvitationPage() {
  const { userId } = useParams();

  const [requests] = useState([
    {
      _id: "req1",
      sender: {
        _id: "user123",
        fullName: "Alice Johnson",
      },
      message: "Hey, I'd like to join your project on AI Attendance System.",
      status: "pending",
    },
    {
      _id: "req2",
      sender: {
        _id: "user456",
        fullName: "Bob Smith",
      },
      message: "Interested in collaborating on your E-Commerce Clone.",
      status: "accepted",
    },
  ]);

  const [invitations] = useState([
    {
      _id: "inv1",
      receiver: {
        _id: "user789",
        fullName: "Charlie Brown",
      },
      message: "Would love to have you on the DevCollab Platform project.",
      status: "pending",
    },
    {
      _id: "inv2",
      receiver: {
        _id: "user999",
        fullName: "Diana Prince",
      },
      message: "Join me for a portfolio builder app.",
      status: "rejected",
    },
  ]);

  const [isRequest, setIsRequest] = useState(true);
  const handleToggle = () => {
    setIsRequest(true);
    setIsInvitation(false);}
  const [isInvitation, setIsInvitation] = useState(false);
  const handleInvitationToggle = () => {
    setIsInvitation(true);
    setIsRequest(false);
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-center mb-6">
        <button
          onClick={handleToggle}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition mr-10"
        >
          Show Incoming Requests
        </button>
     
        <button
          onClick={handleInvitationToggle}
          className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700 transition"
        >
           Show Sent Invitations
        </button>
      </div>

      {isRequest && !isInvitation ? (
        <>
          <h2 className="text-2xl font-bold mb-4">Incoming Requests</h2>
          {requests.length === 0 ? (
            <p>No requests received.</p>
          ) : (
            <ul className="space-y-4">
              {requests.map((req) => (
                <li key={req._id} className="border p-3 rounded shadow">
                  <p><strong>From:</strong> {req.sender.fullName}</p>
                  <p><strong>Message:</strong> {req.message}</p>
                  <p><strong>Status:</strong> {req.status}</p>
                  <Link
                    to={`/profile/${req.sender._id}`}
                    className="text-blue-600 underline"
                  >
                    View Sender Profile
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-4">Sent Invitations</h2>
          {invitations.length === 0 ? (
            <p>No invitations sent.</p>
          ) : (
            <ul className="space-y-4">
              {invitations.map((invite) => (
                <li key={invite._id} className="border p-3 rounded shadow">
                  <p><strong>To:</strong> {invite.receiver.fullName}</p>
                  <p><strong>Message:</strong> {invite.message}</p>
                  <p><strong>Status:</strong> {invite.status}</p>
                  <Link
                    to={`/profile/${invite.receiver._id}`}
                    className="text-blue-600 underline"
                  >
                    View Receiver Profile
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </>
      )}
    </div>
  );
}

export default RequestInvitationPage;
