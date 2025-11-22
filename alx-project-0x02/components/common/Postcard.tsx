import React from "react";
import { type PostProps } from "@/interfaces";

const Postcard: React.FC<PostProps> = ({id, userId, title, body }) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="mb-2">{body}</p>
      <p className="text-sm text-gray-400">Post ID: {id}</p> {/* <-- show id */}
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default Postcard;