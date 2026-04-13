export type navLinks = {
  label: string;
  href: string;
};

export interface Tutor {
  id: string;
  name: string;
  subject: string;
  rating: number;
  hourlyRate: number;
  imageUrl: string;
}
 
export interface Review {
  id: string;
  authorName: string;
  avatarUrl: string;
  rating: number;
  content: string;
}
 
export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  profilePhoto: string;
}

// export interface TeachersType {
  
// }
 
