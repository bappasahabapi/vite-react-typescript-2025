import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import IndustryExpertise from "@/components/IndustryExpertise";
import LoginForm from "@/components/LoginForm";
import Navbar from "@/components/Nav";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/Testimonial";
import WhoWeAre from "@/components/WhoWeAre";


const LoginPage = () => {
  return (
    <>   
    <div className="min-h-screen bg-gray-100 flex flex-col">

    <Navbar/>
    <Hero/>
      <LoginForm />
    <ServicesSection/>
    <WhoWeAre/>
    <IndustryExpertise/>
    <TestimonialSection/>
    <Footer/>
    </div>
    
    </>

  );
};

export default LoginPage;
