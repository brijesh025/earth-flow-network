import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  MapPin, 
  TrendingUp, 
  Users, 
  ShoppingCart, 
  Shield,
  Smartphone,
  BarChart3,
  DollarSign,
  Award,
  Zap,
  Globe
} from "lucide-react";
import aiClassificationIcon from "@/assets/ai-classification-icon.jpg";
import dashboardIcon from "@/assets/dashboard-icon.jpg";
import marketplaceIcon from "@/assets/marketplace-icon.jpg";

const Features = () => {
  const features = [
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "Citizen Mobile App",
      description: "Find nearby recycling centers, schedule pickups, and earn rewards",
      image: aiClassificationIcon,
      features: ["AI Item Recognition", "Geolocation Services", "Reward System", "Impact Tracking"],
      color: "text-primary",
      bgColor: "bg-primary/10",
      link: "/citizen-app"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Municipal Dashboard",
      description: "AI-powered site selection, waste flow modeling, and compliance tools",
      image: dashboardIcon,
      features: ["Site Optimization", "Route Planning", "Compliance Tracking", "Impact Analytics"],
      color: "text-accent",
      bgColor: "bg-accent/10",
      link: "/municipal-dashboard"
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: "Circular Marketplace",
      description: "Connect NGOs with markets for upcycled and recycled products",
      image: marketplaceIcon,
      features: ["Product Listings", "Payment Processing", "Inventory Management", "Quality Assurance"],
      color: "text-success",
      bgColor: "bg-success/10",
      link: "/marketplace"
    }
  ];

  const coreFeatures = [
    {
      icon: <Camera className="h-6 w-6" />,
      title: "AI Item Classification",
      description: "Computer vision instantly identifies recyclable materials"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Smart Location Services",
      description: "Find the nearest authorized collection centers"
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Impact Analytics",
      description: "Track environmental impact and recycling metrics"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "NGO Empowerment",
      description: "Training, microfinance, and market access for NGOs"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Compliance Tracking",
      description: "Automated EPR compliance and regulatory reporting"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Reward System",
      description: "Incentivize recycling with points and cash rewards"
    }
  ];

  return (
    <section id="features" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <Zap className="h-4 w-4 mr-2" />
            AI-Powered Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Complete Waste Management Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive platform serving citizens, municipalities, and NGOs with cutting-edge AI technology
          </p>
        </div>

        {/* Main Feature Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-strong transition-all duration-300 border-0 shadow-soft">
              <CardHeader className="text-center">
                <div className={`w-16 h-16 ${feature.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={feature.color}>
                    {feature.icon}
                  </div>
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="space-y-2">
                  {feature.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feat}
                    </div>
                  ))}
                </div>
                {feature.link && (
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full" 
                      onClick={() => window.location.href = feature.link}
                    >
                      {feature.title === "Circular Marketplace" ? "Explore Marketplace" : 
                       feature.title === "Citizen Mobile App" ? "Try Citizen App" : "Explore Dashboard"}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreFeatures.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-medium transition-all duration-300 border-0 shadow-soft group">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-primary text-primary-foreground rounded-full font-medium shadow-medium">
            <Globe className="h-5 w-5 mr-2" />
            Serving 50+ Cities Worldwide
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;