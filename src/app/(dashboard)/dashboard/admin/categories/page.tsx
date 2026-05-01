"use client";

import { useAuth } from "@/hooks/useAuth";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminCategoriesPage() {
  const { user } = useAuth();
  const [categories, setCategories] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newCatName, setNewCatName] = useState("");
  const [newCatDesc, setNewCatDesc] = useState("");

  const fetchCategories = async () => {
    try {
      const res = await axiosInstance.get("/categories");
      setCategories(res.data.data);
    } catch (error) {
      toast.error("Failed to fetch categories");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleAddCategory = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCatName || !newCatDesc) return toast.error("Please fill all fields");

    try {
      await axiosInstance.post("/categories", { name: newCatName, description: newCatDesc });
      toast.success("Category added");
      setNewCatName("");
      setNewCatDesc("");
      fetchCategories();
    } catch (error) {
      toast.error("Failed to add category");
    }
  };

  if (user?.role !== "ADMIN") return null;

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
        <h2 className="text-xl font-bold text-slate-800 mb-4">Add New Category</h2>
        <form onSubmit={handleAddCategory} className="flex gap-4 items-end">
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium">Name</label>
            <Input value={newCatName} onChange={e => setNewCatName(e.target.value)} placeholder="e.g. Mathematics" />
          </div>
          <div className="flex-1 space-y-2">
            <label className="text-sm font-medium">Description</label>
            <Input value={newCatDesc} onChange={e => setNewCatDesc(e.target.value)} placeholder="e.g. High school math subjects" />
          </div>
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
            <Plus size={16} className="mr-2" /> Add
          </Button>
        </form>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 min-h-[50vh]">
        <h2 className="text-xl font-bold text-slate-800 mb-4 border-b pb-4">All Categories</h2>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="p-4 border rounded-xl hover:shadow-md transition-shadow">
                <div className="h-6 bg-slate-200 rounded animate-pulse w-3/4 mb-3"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse w-full mb-2"></div>
                <div className="h-4 bg-slate-200 rounded animate-pulse w-5/6"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat) => (
              <div key={cat.id} className="p-4 border rounded-xl hover:shadow-md transition-shadow">
                <h3 className="font-bold text-lg text-slate-800">{cat.name}</h3>
                <p className="text-slate-500 text-sm mt-1">{cat.description}</p>
              </div>
            ))}
            {categories.length === 0 && (
              <div className="col-span-full text-center py-10 text-slate-500">No categories found.</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
