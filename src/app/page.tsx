import { Hero } from "../components/Sections/Hero";
import  { Introduction } from "../components/Sections/Introduction";
import { Programs } from "../components/Sections/Programs";
import { CareerCounselling } from "../components/Sections/CareerCounselling";
import { Assessments } from "../components/Sections/Assessments";
import  Mentors  from "../components/Sections/Mentors";
// import { StudyAbroad } from "./components/StudyAbroad";
import { CourseExploration } from "../components/Sections/CourseExploration";
import  Contact  from "../components/Sections/Contact";
import  Footer  from "../components/Footer/Footer";
import CallbackButton   from "../components/Sections/CallbackButton";
import Testimonial from "../components/Sections/Testimonial";
export default function App() {
  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(rgb(255, 255, 255) 0%, rgb(254, 255, 221) 100%" }}>
      <Hero />
      <Introduction />
      <Programs />
      {/* <CareerCounselling /> */}
      {/* <Assessments /> */}
      {/* <StudyAbroad /> */}
      <Mentors />
      <CourseExploration />
      <Contact />
      <Testimonial />
      <Footer />
      <CallbackButton />
    </div>
  );
}
