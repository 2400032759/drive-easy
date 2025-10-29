import { Card, CardContent } from "@/components/ui/card";
import { Car, CheckCircle, Navigation } from "lucide-react";

interface StepCardProps {
  icon: React.ReactNode;
  step: string;
  title: string;
  description: string;
  delay?: string;
}

const StepCard = ({ icon, step, title, description, delay = "0s" }: StepCardProps) => {
  return (
    <div className="relative animate-fade-in-up" style={{ animationDelay: delay }}>
      <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-xl h-full">
        <CardContent className="p-8 text-center">
          {/* Step Number Badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg shadow-md">
            {step}
          </div>
          
          {/* Icon */}
          <div className="mt-4 mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10">
            <div className="text-primary">
              {icon}
            </div>
          </div>
          
          {/* Content */}
          <h3 className="text-2xl font-bold text-foreground mb-3">{title}</h3>
          <p className="text-muted-foreground leading-relaxed">{description}</p>
        </CardContent>
      </Card>
    </div>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      icon: <Car className="h-10 w-10" />,
      step: "1",
      title: "Choose Your Car",
      description: "Browse our fleet and select the perfect vehicle for your journey. Compare prices and features.",
      delay: "0.1s"
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      step: "2",
      title: "Confirm Booking",
      description: "Book instantly via WhatsApp or our contact form. Share your travel details and requirements.",
      delay: "0.2s"
    },
    {
      icon: <Navigation className="h-10 w-10" />,
      step: "3",
      title: "Get Your Ride",
      description: "Receive your car at your doorstep or pick it up from our location. Start your journey hassle-free!",
      delay: "0.3s"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Renting a car has never been easier. Follow these simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={index} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
