import { Button } from "@/components/ui/button";
import { Play, ArrowRight, Recycle, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-wastewise.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="AI-powered waste management visualization"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-5"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm font-medium mb-6 animate-fade-in-up">
            <Recycle className="h-4 w-4 mr-2" />
            AI-Enabled Inclusive Waste Management
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            Transform Waste Into
            <span className="block bg-gradient-primary bg-clip-text text-transparent">
              Sustainable Livelihoods
            </span>
          </h1>

          {/* Tagline */}
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Match people to recycling, match municipalities to smart disposal, empower NGOs to turn waste into livelihoods. 
            AI-powered platform for complete waste management ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="lg" className="text-lg">
              <MapPin className="h-5 w-5 mr-2" />
              Find Recycling Centers
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg">
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">85%</div>
              <div className="text-muted-foreground">Recycling Rate Increase</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">500+</div>
              <div className="text-muted-foreground">NGOs Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">1M+</div>
              <div className="text-muted-foreground">Tonnes Diverted</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="p-3 bg-primary/10 rounded-full backdrop-blur-sm">
            <Recycle className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
          <div className="p-3 bg-accent/10 rounded-full backdrop-blur-sm">
            <Users className="h-6 w-6 text-accent" />
          </div>
        </div>
        <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "3s" }}>
          <div className="p-3 bg-success/10 rounded-full backdrop-blur-sm">
            <MapPin className="h-6 w-6 text-success" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;