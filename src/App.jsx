import { HeroSection } from "./sections/HeroSection";
import { Statistics } from "./sections/Statistics";
import { AboutUs } from "./sections/AboutUs";
import { ClassCards } from "./components/classCards/ClassCards";
import { InstructorCards } from "./components/instructorCards/InstructorCards";
import { ValueCards } from "./components/valueCards/ValueCards";
import { Membership } from "./components/Membership";
import { BecomeMember } from "./components/BecomeMember";
import { Footer } from "./components/Footer";

export const App = () => {
  return (
    <>
      <HeroSection />
      <Statistics />
      <AboutUs />
      <ClassCards />
      <InstructorCards />
      <ValueCards />
      <Membership />
      <BecomeMember />
      <Footer />
    </>
  );
};
