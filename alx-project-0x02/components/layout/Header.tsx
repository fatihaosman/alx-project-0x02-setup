// import React from "react";
// import Link from "next/link";

// const Header: React.FC = () => {
//   return (
//     <header className="bg-white shadow-md p-4">
//       <div className="max-w-7xl mx-auto flex items-center justify-between">
//         <div className="text-2xl font-bold">alx-listing</div>
//         <div className="flex items-center gap-3">
//           <input
//             className="border rounded px-3 py-1 hidden sm:block"
//             placeholder="Search properties..."
//             aria-label="search"
//           />
//           <nav className="flex gap-2">
//             <Link href="/home" className="px-3 py-1 rounded hover:bg-gray-100">
//               Home
//             </Link>

//             <Link href="/about" className="px-3 py-1 rounded hover:bg-gray-100">
//               About
//             </Link>

//              <Link href="/about" className="px-3 py-1 rounded hover:bg-gray-100">
//               posts
//             </Link>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;


import React from "react";
import Link from "next/link"; 
// import PostsPage from "@/pages/posts";

const Header: React.FC = () => {
  return (
    <header className="w-full bg-gray-200 p-4 flex gap-6">
      <Link href="/home">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/posts">Posts</Link> {/* <-- make sure this exists */}
    </header>
  );
};

export default Header;

