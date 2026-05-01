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

export interface User {
  id: string;
  name: string;
  email: string;
  profilePhoto: string;
  role: string;
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

export type userRole = "STUDENT" | "TUTOR" | "ADMIN";

export interface AvailabilitySlot {
  id: string;
  tutorId: string;
  daysOfWeek: string[];
  startTime: string;
  endTime: string;
  isBooked: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Booking {
  id: string;
  studentId: string;
  tutorId: string;
  slotId: string;
  price: number;
  bookingDate: string;
  status: bookingStatus;
  paymentStatus: paymentStatus;
  createdAt: string;
  updatedAt: string;

  student: {
    id: string;
    name: string;
    email: string;
    profilePhoto: string;
  };

  tutor: {
    id: string;
    user: {
      id: string;
      name: string;
      email: string;
      profilePhoto: string;
    };
    category: {
      id: string;
      name: string;
    };
  };

  slot: {
    id: string;
    startTime: string;
    endTime: string;
  };
}

export type paymentStatus = "PENDING" | "SUCCESS" | "FAILED" | "REFUNDED";

export type bookingStatus = "PENDING" | "CONFIRMED" | "COMPLETED" | "CANCELLED";
