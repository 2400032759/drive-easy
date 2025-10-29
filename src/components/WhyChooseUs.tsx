import { Card, CardContent } from "@/components/ui/card";
import { IndianRupee, Shield, Clock, MapPin } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: string;
}

const FeatureCard = ({ icon, title, description, delay = "0s" }: FeatureCardProps) => {
  return (
    <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg animate-fade-in-up group" style={{ animationDelay: delay }}>
      <CardContent className="p-8 text-center">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 group-hover:bg-primary transition-colors duration-300">
          <div className="text-primary group-hover:text-primary-foreground transition-colors duration-300">
            {icon}
          </div>
        </div>
        <h3 className="text-xl font-bold text-foreground mb-3">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      icon: <IndianRupee className="h-8 w-8" />,
      title: "Affordable Rates",
      description: "Best prices in the market with no hidden charges. Transparent pricing for all our services.",
      delay: "0.1s"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Trusted Drivers",
      description: "Professional, verified drivers with years of experience. Your safety is our priority.",
      delay: "0.2s"
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "24×7 Support",
      description: "Round-the-clock customer support. We're always here when you need us.",
      delay: "0.3s"
    },
    {
      icon: <MapPin className="h-8 w-8" />,
      title: "Pan-India Service",
      description: "Available in major cities across India. Pick up and drop anywhere you need.",
      delay: "0.4s"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Why Choose DriveEasy?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to providing the best car rental experience in India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
