import React, { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal ";

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [posts, setPosts] = useState<
    { title: string; content: string }[]
  >([]);

  const handleAddPost = (data: { title: string; content: string }) => {
    setPosts((prev) => [...prev, data]);
  };

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>

      {/* Button to open modal */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Add New Post
      </button>

      {/* Modal */}
      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleAddPost}
      />

      {/* Static cards from task 3 */}
      <Card
        title="Luxury Apartment"
        content="A beautiful apartment located in the heart of the city."
      />

      <Card
        title="Cozy Cottage"
        content="A relaxing cottage perfect for weekend getaways."
      />

      {/* Newly added posts */}
      <div className="space-y-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
