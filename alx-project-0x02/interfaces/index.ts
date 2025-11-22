export interface Address {
  state: string;
  city: string;
  country: string;
}

export interface Offers {
  bed: string;
  shower: string;
  occupants: string;
}

export interface PropertyProps {
  name: string;
  address: Address;
  rating: number;
  category: string[];
  price: number;
  offers: Offers;
  image: string;
  discount: string;
}



// interfaces/index.ts

export interface CardProps {
  title: string;
  content: string;
}

// interfaces/index.ts
export interface ButtonProps {
  size?: "small" | "medium" | "large";
  shape?: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
}


// interfaces/index.ts
export interface PostProps {
   id: number;  
  userId: number;
  title: string;
  body: string; // JSONPlaceholder returns `body` instead of content
}


