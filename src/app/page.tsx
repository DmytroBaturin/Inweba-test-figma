import { MainScreen } from "@/screens/main";
import { AdvantagesScreen } from "@/screens/advantages";
import { AboutUsScreen } from "@/screens/about-us";
import { OurCoursesScreen } from "@/screens/our-courses";
import { ContactUsScreen } from "@/screens/contact";
import { TestimonialsScreen } from "@/screens/testimonials";
import { FAQScreen } from "@/screens/faq";

export default function Home() {
  return (
    <>
      <MainScreen />
      <AdvantagesScreen />
      <AboutUsScreen />
      <OurCoursesScreen />
      <ContactUsScreen />
      <TestimonialsScreen />
      <FAQScreen />
    </>
  );
}
