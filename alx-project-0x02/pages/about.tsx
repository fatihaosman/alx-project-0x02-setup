import React from "react";
// pages/about.tsx
import Button from "@/components/common/Button";
const About: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">About Page</h1>
      <p>This page contains information about our project.</p>

      <Button size="small" shape="rounded-sm">
        Small Rounded-sm
      </Button>

      <br /><br />

      <Button size="medium" shape="rounded-md">
        Medium Rounded-md
      </Button>

      <br /><br />

      <Button size="large" shape="rounded-full">
        Large Rounded-full
      </Button>
    </div>
  );
};
export default About;