import Hero from "@/components/sections/home/Hero";
import FeaturedTutors from "@/components/sections/home/FeaturedTutor";
import HowItWorks from "@/components/sections/home/HowItWorks";
import ExploreCategories from "@/components/sections/home/ExploreCategories";
import {
  PLACEHOLDER_REVIEWS,
  PLACEHOLDER_TUTORS,
} from "@/assets/placeholderData";
import StudentReviews from "@/components/sections/home/StudentsReviews";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedTutors tutors={PLACEHOLDER_TUTORS}></FeaturedTutors>
      <HowItWorks></HowItWorks>
      <ExploreCategories ></ExploreCategories>
      <StudentReviews reviews={PLACEHOLDER_REVIEWS}></StudentReviews>
    </>
  );
}
