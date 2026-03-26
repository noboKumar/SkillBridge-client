import { Button } from "../ui/button";
import { Search } from "lucide-react";

const HeroSearchBar = () => {
  return (
    <div className="w-full flex items-center justify-center gap-4">
      <div className="relative w-5/12">
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          className="border-2 w-full rounded-2xl p-2 pl-10 pr-4"
          type="text"
          placeholder="Search Teacher..."
        />
      </div>
      <Button className="px-5" size={"lg"}>
        Search
      </Button>
    </div>
  );
};

export default HeroSearchBar;
