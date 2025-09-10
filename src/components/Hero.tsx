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
          className="w-full h-full object-cover opacity-10 mix-blend-luminosity"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_30%,hsl(var(--accent)/0.15),transparent_60%),radial-gradient(circle_at_75%_70%,hsl(var(--primary)/0.35),transparent_65%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[hsl(var(--primary))/0.15] text-accent text-sm font-semibold mb-6 animate-fade-in-up border border-[hsl(var(--primary))/0.4] backdrop-blur-md">
            <Recycle className="h-4 w-4 mr-2" />
            AI-Enabled Inclusive Waste Management
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-foreground mb-6 animate-fade-in-up tracking-tight text-balance"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-glow">Kairoon:</span> Where
            <span className="block bg-gradient-primary bg-clip-text text-transparent drop-shadow-xl">
              Sustainability Meets Inclusivity
            </span>
          </h1>

          {/* Tagline */}
          <p
            className="text-lg sm:text-xl text-muted-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Timely climate action powered by inclusive tech. We connect
            citizens, municipalities, NGOs and circular sellers to turn waste
            streams into regenerative economies.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
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
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">85%</div>
              <div className="text-muted-foreground">
                Recycling Rate Increase
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">NGOs Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-success mb-2">1M+</div>
              <div className="text-muted-foreground">Tonnes Diverted</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div
          className="absolute top-24 left-16 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <div className="p-3 rounded-xl bg-[hsl(var(--primary))/0.15] border border-[hsl(var(--primary))/0.4] backdrop-blur-md shadow-soft">
            <Recycle className="h-6 w-6 text-accent" />
          </div>
        </div>
        <div
          className="absolute top-48 right-24 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <div className="p-3 rounded-xl bg-[hsl(var(--accent))/0.15] border border-[hsl(var(--accent))/0.4] backdrop-blur-md shadow-soft">
            <Users className="h-6 w-6 text-primary" />
          </div>
        </div>
        <div
          className="absolute bottom-40 left-24 animate-float"
          style={{ animationDelay: "3s" }}
        >
          <div className="p-3 rounded-xl bg-success/15 border border-success/40 backdrop-blur-md shadow-soft">
            <MapPin className="h-6 w-6 text-success" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
