import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  name: string;
  initials: string;
  rating: number;
  review: string;
  delay?: string;
}

const TestimonialCard = ({ name, initials, rating, review, delay = "0s" }: TestimonialCardProps) => {
  return (
    <Card className="border-2 hover:border-primary transition-all duration-300 hover:shadow-xl animate-fade-in-up h-full" style={{ animationDelay: delay }}>
      <CardContent className="p-8">
        {/* Quote Icon */}
        <div className="mb-4">
          <Quote className="h-10 w-10 text-accent" />
        </div>

        {/* Rating Stars */}
        <div className="flex gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`h-5 w-5 ${i < rating ? 'fill-accent text-accent' : 'text-muted'}`}
            />
          ))}
        </div>

        {/* Review Text */}
        <p className="text-muted-foreground leading-relaxed mb-6 italic">
          "{review}"
        </p>

        {/* Customer Info */}
        <div className="flex items-center gap-3">
          <Avatar className="h-12 w-12 bg-primary">
            <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-semibold text-foreground">{name}</p>
            <p className="text-sm text-muted-foreground">Verified Customer</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rakesh Kumar",
      initials: "RK",
      rating: 5,
      review: "Excellent service! The car was in perfect condition and the driver was very professional. Booking via WhatsApp was super convenient. Highly recommended!",
      delay: "0.1s"
    },
    {
      name: "Dinesh Reddy",
      initials: "DR",
      rating: 5,
      review: "Best rental experience I've had in India. Transparent pricing, no hidden charges, and 24/7 support. DriveEasy is now my go-to for car rentals!",
      delay: "0.2s"
    },
    {
      name: "Aman Singh",
      initials: "AS",
      rating: 5,
      review: "Fantastic service from start to finish. The SUV was perfect for our family trip. Smooth booking process and great customer support. Will definitely use again!",
      delay: "0.3s"
    }
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our happy customers have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
