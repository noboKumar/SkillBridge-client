import Hero from "@/components/sections/Hero";
import NavBar from "../components/sections/NavBar";
import FeaturedTutors from "@/components/sections/FeaturedTutor";
import  PLACEHOLDER_TUTORS from "@/assets/placeholderData"

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <FeaturedTutors tutors={PLACEHOLDER_TUTORS}></FeaturedTutors>
    </>
  );
}
