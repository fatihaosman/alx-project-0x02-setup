
import React, { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard"; // Import the PostCard component from "\components\common\PostCard.tsx"
import { PostProps } from "@/interfaces";

interface PostsPageProps {
  posts: PostProps[];
}

const PostsPage: React.FC<PostsPageProps> = ({ posts }) => {
  // const [posts, setPosts] = useState<PostProps[]>([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
  //     .then((res) => res.json())
  //     .then((data: PostProps[]) => {
  //       setPosts(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching posts:", err);
  //       setLoading(false);
  //     });
  // }, []);

 return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="p-6 space-y-4">
        <h1 className="text-2xl font-bold">Posts</h1>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            id={post.id}
            userId={post.userId}
            title={post.title}
            body={post.body}
          />
        ))}
      </div>
    </div>
  );
};

export default PostsPage;


// Next.js static data fetching
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
  const posts: PostProps[] = await res.json();

  return {
    props: {
      posts,
    },
  };
};

// What this does

// Fetches first 10 posts from JSONPlaceholder

// Maps over the posts and renders PostCard for each

// Shows User ID, title, and body

// Includes Header for navigation





// import React from "react";
// import Header from "@/components/layout/Header";

// const PostsPage: React.FC = () => {
//   return (
//     <div>
//       <Header />
//       <h1 className="p-6 text-2xl font-bold">Posts Page</h1>
//     </div>
//   );
// };

// export default PostsPage;