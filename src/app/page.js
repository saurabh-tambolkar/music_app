import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Meet from "@/components/Meet";
import TestimonialCards from "@/components/TestimonialCards";
import UpcomingWebinars from "@/components/UpcomingWebinars";


export default function Home() {
  return (
   <div className="min-h-screen antialiased bg-white dark:bg-black">
    <HeroSection/>
    <FeaturedCourses/>
    <TestimonialCards/>
    <UpcomingWebinars/>
    <Meet/>
    {/* <Footer/> */}
   </div>
  );
}
