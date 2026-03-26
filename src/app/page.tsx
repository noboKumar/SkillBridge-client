import Hero from "@/components/sections/home/Hero";
import NavBar from "../components/sections/home/NavBar";
import FeaturedTutors from "@/components/sections/home/FeaturedTutor";
import HowItWorks from "@/components/sections/home/HowItWorks";
import ExploreCategories from "@/components/sections/home/ExploreCategories";
import {
  CATEGORIES,
  PLACEHOLDER_REVIEWS,
  PLACEHOLDER_TUTORS,
} from "@/assets/placeholderData";
import StudentReviews from "@/components/sections/home/StudentsReviews";
import Footer from "@/components/sections/home/Footer";

export default function Home() {
  return (
    <>
      <NavBar></NavBar>
      <Hero></Hero>
      <FeaturedTutors tutors={PLACEHOLDER_TUTORS}></FeaturedTutors>
      <HowItWorks></HowItWorks>
      <ExploreCategories categories={CATEGORIES}></ExploreCategories>
      <StudentReviews reviews={PLACEHOLDER_REVIEWS}></StudentReviews>
      <Footer></Footer>
    </>
  );
}
