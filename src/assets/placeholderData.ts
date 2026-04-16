import { Tutor, Review, Category } from "@/types";

// ─── Placeholder Tutors (replace with API fetch) ──────────────────────────────
export const PLACEHOLDER_TUTORS: Tutor[] = [
  {
    id: "1",
    name: "Sarah Miller",
    subject: "Math",
    rating: 4.9,
    hourlyRate: 40,
    imageUrl: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: "2",
    name: "James Lee",
    subject: "Programming",
    rating: 5.0,
    hourlyRate: 50,
    imageUrl: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "3",
    name: "Emily Clark",
    subject: "English",
    rating: 4.8,
    hourlyRate: 35,
    imageUrl: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: "4",
    name: "David Nguyen",
    subject: "Physics",
    rating: 5.0,
    hourlyRate: 45,
    imageUrl: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

// ─── Placeholder Reviews (replace with API fetch) ─────────────────────────────
export const PLACEHOLDER_REVIEWS: Review[] = [
  {
    id: "1",
    authorName: "Alex R.",
    avatarUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    content:
      "Amazing tutors! I improved my grades significantly. Highly recommend!",
  },
  {
    id: "2",
    authorName: "Maya S.",
    avatarUrl: "https://randomuser.me/api/portraits/women/21.jpg",
    rating: 5,
    content: "Great experience! The tutors are knowledgeable and friendly.",
  },
  {
    id: "3",
    authorName: "Alex R.",
    avatarUrl: "https://randomuser.me/api/portraits/men/12.jpg",
    rating: 5,
    content:
      "Amazing tutors! I improved my grades significantly. Highly recommend!",
  },
];
