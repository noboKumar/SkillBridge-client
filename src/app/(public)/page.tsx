import Hero from "@/components/sections/home/Hero";
import FeaturedTutors from "@/components/sections/home/FeaturedTutor";
import HowItWorks from "@/components/sections/home/HowItWorks";
import ExploreCategories from "@/components/sections/home/ExploreCategories";
import { PLACEHOLDER_REVIEWS } from "@/assets/placeholderData";
import StudentReviews from "@/components/sections/home/StudentsReviews";
import Stats from "@/components/sections/home/Stats";
import BecomeTutorCTA from "@/components/sections/home/BecomeTutorCTA";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Stats></Stats>
      <FeaturedTutors></FeaturedTutors>
      <HowItWorks></HowItWorks>
      <ExploreCategories></ExploreCategories>
      <BecomeTutorCTA></BecomeTutorCTA>
      <StudentReviews reviews={PLACEHOLDER_REVIEWS}></StudentReviews>
    </>
  );
}
