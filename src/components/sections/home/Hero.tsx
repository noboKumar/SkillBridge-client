import Link from "next/link";
import HeroSearchBar from "../../shared/HeroSearchBar";
import { Button } from "../../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col items-center py-20">
      <div className="text-center">
        <h1 className="text-4xl font-semibold text-primary">
          Connect with Expert Tutors, Learn Anything
        </h1>
        <p className="py-8 text-xl">
          Find the perfect tutor to help you master any subject. anytime.
        </p>
      </div>
      <HeroSearchBar />
      <div className="py-5 flex gap-5">
        <Link href="/tutors">
          <Button className="px-10 py-5 shadow-xl">Find a Tutor</Button>
        </Link>
        <Link href={"howItWorks"}>
          <Button className="px-10 py-5 shadow-xl" variant={"outline"}>
            How it Works
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
