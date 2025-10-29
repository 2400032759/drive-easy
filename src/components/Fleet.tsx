import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Users, Fuel, Settings } from "lucide-react";
import sedanImg from "@/assets/sedan.jpg";
import suvImg from "@/assets/suv.jpg";
import hatchbackImg from "@/assets/hatchback.jpg";

interface CarCardProps {
  name: string;
  image: string;
  price: string;
  seats: string;
  fuel: string;
  transmission: string;
  delay?: string;
}

const CarCard = ({ name, image, price, seats, fuel, transmission, delay = "0s" }: CarCardProps) => {
  const whatsappMessage = `Hi! I'm interested in renting the ${name}. Price: ${price}/day. Can you provide more details?`;
  const whatsappUrl = `https://wa.link/ynsr6a`;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border-2" style={{ animationDelay: delay }}>
      <CardContent className="p-0">
        <div className="aspect-video overflow-hidden bg-secondary">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-bold text-foreground mb-2">{name}</h3>
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-3xl font-bold text-primary">₹{price}</span>
            <span className="text-muted-foreground">/day</span>
          </div>
          <div className="grid grid-cols-3 gap-3 text-sm">
            <div className="flex flex-col items-center gap-1 p-2 bg-secondary rounded-lg">
              <Users className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{seats} Seats</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 bg-secondary rounded-lg">
              <Fuel className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{fuel}</span>
            </div>
            <div className="flex flex-col items-center gap-1 p-2 bg-secondary rounded-lg">
              <Settings className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">{transmission}</span>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button 
          className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white font-semibold py-6 rounded-lg transition-all duration-300 hover:shadow-lg"
          onClick={() => window.open(whatsappUrl, '_blank')}
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          Book via WhatsApp
        </Button>
      </CardFooter>
    </Card>
  );
};

const Fleet = () => {
  const cars = [
    {
      name: "Sedan",
      image: sedanImg,
      price: "1,999",
      seats: "5",
      fuel: "Petrol",
      transmission: "Manual",
      delay: "0.1s"
    },
    {
      name: "SUV",
      image: suvImg,
      price: "3,499",
      seats: "7",
      fuel: "Diesel",
      transmission: "Auto",
      delay: "0.2s"
    },
    {
      name: "Hatchback",
      image: hatchbackImg,
      price: "1,499",
      seats: "5",
      fuel: "Petrol",
      transmission: "Manual",
      delay: "0.3s"
    }
  ];

  return (
    <section id="fleet" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Premium Fleet
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our wide range of well-maintained vehicles for every need and budget
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {cars.map((car) => (
            <CarCard key={car.name} {...car} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
