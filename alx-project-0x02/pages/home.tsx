import React from "react";
import Card from "@/components/common/Card";

const HomePage: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <p>This is the home page of the project.</p>

     {/* Use Card component */}
      <Card
        title="Luxury Apartment"
        content="A beautiful apartment located in the heart of the city."
      />

      <Card
        title="Cozy Cottage"
        content="A relaxing cottage perfect for weekend getaways."
      />

      <Card
        title="Beach House"
        content="Enjoy ocean views from this modern beach house."
      />
    </div>
  );
};

export default HomePage;
