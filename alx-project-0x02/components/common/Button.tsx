// components/common/Button.tsx
import React from "react";
import { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({ size = "medium", shape = "rounded-md", children }) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button className={`${sizeClasses[size]} ${shape} bg-blue-600 text-white`}>
      {children}
    </button>
  );
};

export default Button;
