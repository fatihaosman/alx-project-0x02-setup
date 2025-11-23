import React from "react";
import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ id, name, email, address }) => {
  return (
    <div className="bg-white border p-4 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-600">{email}</p>

      <div className="mt-2 text-sm text-gray-500">
        <p>
          {address.street}, {address.city}
        </p>
      </div>

       <p className="text-xs text-gray-400">User ID: {id}</p>
    </div>
  );
};

export default UserCard;
