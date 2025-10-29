import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Fleet from "@/components/Fleet";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Fleet />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
