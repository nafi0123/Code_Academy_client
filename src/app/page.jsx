import Banner from "@/components/Banner";
import PopularCourse from "@/components/PopularCourse";
import HighlightSection from "@/components/HighlightSection";
import CallToAction from "@/components/CallToAction";
import TrustedSection from "@/components/TrustedSection";

export default function Home() {
  return (
    <div className="bg-gray-50">
      <Banner 
        title="Unlock Your Potential with CodeAcademy"
        subtitle="Learn modern technologies, master coding skills, and join a global developer community."
        primaryColor="text-indigo-600"
        buttonColor="bg-teal-500 hover:bg-teal-600"
      />

      <PopularCourse 
        title="Popular Courses"
        titleColor="text-indigo-700"
        cardBg="bg-white"
        cardShadow="shadow-md"
      />

      <HighlightSection 
        title="Why CodeAcademy?"
        titleColor="text-indigo-700"
        cardsBg="bg-white"
        cardsShadow="shadow-md"
      />

      <TrustedSection 
        title="Trusted by Top Tech Brands"
        subtitle="Thousands of students and developers grow their careers with CodeAcademy."
        titleColor="text-indigo-700"
        bg="bg-gray-50"
      />

      <CallToAction 
        title="Ready to start learning?"
        subtitle="Join thousands of learners and upgrade your skills today."
        buttonColor="bg-indigo-600 hover:bg-indigo-700"
      />
    </div>
  );
}
