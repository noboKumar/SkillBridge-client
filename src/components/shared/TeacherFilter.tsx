"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useState } from "react";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Button } from "../ui/button";

interface Category {
  id: string;
  name: string;
  description: string;
}

const TeacherFilter = ({ categories = [] }: { categories: Category[] }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = useState(searchParams.get("searchTerm") || "");
  const [rating, setRating] = useState(searchParams.get("rating") || "all");
  const [category, setCategory] = useState(searchParams.get("category") || "all");
  const [priceRange, setPriceRange] = useState([
    Number(searchParams.get("minPrice") || 0),
    Number(searchParams.get("maxPrice") || 100),
  ]);

  const applyFilters = useCallback(() => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (searchTerm) params.set("searchTerm", searchTerm);
    else params.delete("searchTerm");

    if (rating && rating !== "all") params.set("rating", rating);
    else params.delete("rating");

    if (category && category !== "all") params.set("category", category);
    else params.delete("category");

    params.set("minPrice", priceRange[0].toString());
    params.set("maxPrice", priceRange[1].toString());

    router.push(`/tutors?${params.toString()}`);
  }, [searchTerm, rating, category, priceRange, router, searchParams]);

  const resetFilters = () => {
    setSearchTerm("");
    setRating("all");
    setCategory("all");
    setPriceRange([0, 100]);
    router.push("/tutors");
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col gap-6">
      <h3 className="font-semibold text-lg border-b pb-2">Filters</h3>

      <div className="space-y-2">
        <Label htmlFor="search">Search</Label>
        <Input 
          id="search" 
          placeholder="Subject or name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <select 
          id="category"
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="all">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="rating">Minimum Rating</Label>
        <select 
          id="rating"
          value={rating} 
          onChange={(e) => setRating(e.target.value)}
          className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <option value="all">Any Rating</option>
          <option value="4.5">4.5 & up</option>
          <option value="4">4.0 & up</option>
          <option value="3">3.0 & up</option>
        </select>
      </div>

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <Label>Hourly Rate ($)</Label>
          <span className="text-sm font-medium text-slate-600">
            ${priceRange[0]} - ${priceRange[1]}
          </span>
        </div>
        <Slider
          value={priceRange}
          onValueChange={setPriceRange}
          min={0}
          max={100}
          step={5}
          className="py-4"
        />
      </div>

      <div className="flex gap-2 pt-4">
        <Button onClick={applyFilters} className="flex-1 bg-blue-600 hover:bg-blue-700 text-white">Apply</Button>
        <Button onClick={resetFilters} variant="outline" className="flex-1">Reset</Button>
      </div>
    </div>
  );
};

export default TeacherFilter;
