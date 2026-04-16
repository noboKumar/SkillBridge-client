export type navLinks = {
  label: string;
  href: string;
};

export interface Tutor {
  id: string;
  bio: string;
  categoryId: string;
  hourlyRate: number;
  experienceYears: number;
  ratingAverage: number;
  totalReview: number;
  createdAt: string;
  updatedAt: string;

  userId: string;
  user: {
    id: string;
    name: string;
    email: string;
    profilePhoto: string;
    role: string;
  };

  category: {
    id: string;
    name: string;
    description: string;
  } | null;
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
