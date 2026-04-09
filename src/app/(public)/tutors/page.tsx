"use client";

import { ChevronDown, Search, Star, ExternalLink } from "lucide-react";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface Tutor {
  id: number;
  name: string;
  title: string;
  specialties: string[];
  rating: number;
  reviews: number;
  price: string;
  image: string;
}

interface Category {
  name: string;
  count: number;
  checked: boolean;
}

interface Filters {
  categories: Category[];
  priceRange: [number, number];
  ratings: string[];
  availability: string[];
}

const tutorsData: Tutor[] = [
  {
    id: 1,
    name: "Maria L.",
    title: "Mathematics Expert",
    specialties: ["Mathematics", "Language Expert"],
    rating: 4.9,
    reviews: 120,
    price: "$45/hour",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "David K.",
    title: "Physics & Coding",
    specialties: ["Physics", "Physics & Coding"],
    rating: 4.9,
    reviews: 120,
    price: "$25/hour",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "Sarah J.",
    title: "English Language",
    specialties: ["English Language"],
    rating: 4.9,
    reviews: 120,
    price: "$25/hour",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 4,
    name: "Alex P.",
    title: "Science Tutor",
    specialties: ["Science", "and Tutor"],
    rating: 4.9,
    reviews: 120,
    price: "$35/hour",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
  {
    id: 5,
    name: "Chloe R.",
    title: "Chemistry & Math",
    specialties: ["Chemistry", "Math"],
    rating: 4.9,
    reviews: 30,
    price: "$40/hour",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
  {
    id: 6,
    name: "Ben H.",
    title: "Data Science",
    specialties: ["Data Science"],
    rating: 4.9,
    reviews: 70,
    price: "$50/hour",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

const initialCategoriesData: Category[] = [
  { name: "Mathematics", count: 236, checked: true },
  { name: "Languages", count: 78, checked: true },
  { name: "Science", count: 19, checked: true },
  { name: "Programming", count: 78, checked: true },
  { name: "Test Prep", count: 106, checked: true },
];

const availabilityOptions: string[] = [
  "Morning",
  "Afternoon",
  "Evening",
  "Weekend",
];

const ratingOptions: string[] = ["4+ Stars", "3+ Stars"];

const TutorListingPage = () => {
  const [showSortMenu, setShowSortMenu] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({
    categories: initialCategoriesData,
    priceRange: [25, 90],
    ratings: [],
    availability: [],
  });

  const handleCategoryChange = (index: number): void => {
    const newCategories = [...filters.categories];
    newCategories[index].checked = !newCategories[index].checked;
    setFilters({ ...filters, categories: newCategories });
  };

  const handlePriceChange = (
    e: ChangeEvent<HTMLInputElement>,
    index: number,
  ): void => {
    const newRange = [...filters.priceRange] as [number, number];
    newRange[index] = parseInt(e.target.value);
    setFilters({ ...filters, priceRange: newRange });
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Find tutors for Math, Physics, French..."
              className="w-full pl-12 pr-6 py-4 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-slate-700 placeholder-slate-400"
            />
          </div>
        </div>

          <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside className="w-64 shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-6 space-y-6 sticky top-24">
              {/* Categories */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">CATEGORY</h3>
                  <div className="w-8 h-5 bg-linear-to-r from-blue-500 to-blue-600 rounded-full relative cursor-pointer">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  {filters.categories.map((cat, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer group"
                    >
                      <input
                        type="checkbox"
                        checked={cat.checked}
                        onChange={() => handleCategoryChange(idx)}
                        className="w-4 h-4 rounded border-slate-300"
                      />
                      <span className="text-sm text-slate-700">{cat.name}</span>
                      <span className="text-xs text-slate-400 ml-auto">
                        ({cat.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">PRICE RANGE</h3>
                  <div className="w-8 h-5 bg-linear-to-r from-slate-300 to-slate-400 rounded-full relative">
                    <div className="absolute left-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="gap-4">
                    <div>
                      <span className="text-sm font-medium text-slate-900">
                      ${filters.priceRange[0]} 
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="150"
                      value={filters.priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                    </div>
                    <div>
                      <span className="text-sm font-medium text-slate-900">
                      ${filters.priceRange[1]}
                    </span>
                    <input
                      type="range"
                      min="0"
                      max="150"
                      value={filters.priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="flex-1 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                    />
                    </div>
                  </div>
                  <div className="text-xs text-slate-500 text-center">
                    $0-$150/hour
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-slate-900">RATING</h3>
                  <div className="w-8 h-5 bg-linear-to-r from-blue-500 to-blue-600 rounded-full relative cursor-pointer">
                    <div className="absolute right-0.5 top-0.5 w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>
                <div className="space-y-2">
                  {ratingOptions.map((rating, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300"
                      />
                      <div className="flex items-center gap-1">
                        {[...Array(parseInt(rating))].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-amber-400 text-amber-400"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-slate-700">{rating}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <h3 className="font-bold text-slate-900 mb-3">AVAILABILITY</h3>
                <div className="space-y-2">
                  {availabilityOptions.map((time, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-slate-300"
                      />
                      <span className="text-sm text-slate-700">{time}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Sort Bar */}
            <div className="flex justify-end mb-6">
              <div className="relative">
                <button
                  onClick={() => setShowSortMenu(!showSortMenu)}
                  className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg hover:border-slate-300 transition"
                >
                  <span className="text-sm text-slate-700">
                    Sort By: <span className="font-medium">Hello</span>
                  </span>
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                </button>
                {showSortMenu && (
                  <div className="absolute right-0 mt-2 w-40 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
                    <button className="block w-full text-left px-4 py-2 hover:bg-slate-50 text-sm text-slate-700 font-medium">
                      Relevance
                    </button>
                    <button className="block w-full text-left px-4 py-2 hover:bg-slate-50 text-sm text-slate-600">
                      Other options
                    </button>
                  </div>
                )}
              </div>
            </div>

            {/* Tutors Grid */}
            <div className="grid grid-cols-2 gap-6">
              {tutorsData.map((tutor) => (
                <div
                  key={tutor.id}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow p-6 border border-slate-100"
                >
                  <div className="flex gap-4 mb-4">
                    <Image
                      src={tutor.image}
                      alt={tutor.name}
                      width={40}
                      height={40}
                      className="rounded-full object-cover border-2 border-slate-100"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-slate-900">{tutor.name}</h3>
                      <p className="text-sm text-slate-600">{tutor.title}</p>
                    </div>
                  </div>

                  <div className="mb-4 flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(tutor.rating)
                              ? "fill-amber-400 text-amber-400"
                              : "text-slate-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-slate-900">
                      {tutor.rating}
                    </span>
                    <span className="text-sm text-slate-500">
                      ({tutor.reviews} reviews)
                    </span>
                  </div>

                  <div className="mb-6">
                    <p className="text-2xl font-bold text-slate-900">
                      {tutor.price}
                    </p>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition">
                    VIEW PROFILE
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default TutorListingPage;
