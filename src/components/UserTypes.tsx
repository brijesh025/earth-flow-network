import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  User, 
  Building2, 
  Heart, 
  Camera, 
  MapPin, 
  Gift,
  BarChart3,
  Route,
  FileCheck,
  GraduationCap,
  ShoppingBag,
  DollarSign,
  Recycle,
  TrendingUp,
  Award
} from "lucide-react";

const UserTypes = () => {
  const [activeTab, setActiveTab] = useState("citizens");

  const userTypes = {
    citizens: {
      title: "For Citizens",
      subtitle: "Smart Waste Management at Your Fingertips",
      icon: <User className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10",
      features: [
        {
          icon: <Camera className="h-5 w-5" />,
          title: "AI Item Recognition",
          description: "Snap a photo and instantly know if it's recyclable and where to take it"
        },
        {
          icon: <MapPin className="h-5 w-5" />,
          title: "Find Collection Centers",
          description: "Locate nearest authorized recycling centers with real-time availability"
        },
        {
          icon: <Gift className="h-5 w-5" />,
          title: "Earn Rewards",
          description: "Get points, discounts, and cash credits for proper waste disposal"
        }
      ],
      benefits: [
        "Reduce environmental impact",
        "Earn money from waste",
        "Convenient pickup services",
        "Track your impact metrics"
      ]
    },
    municipalities: {
      title: "For Municipalities",
      subtitle: "AI-Powered City Planning & Optimization",
      icon: <Building2 className="h-6 w-6" />,
      color: "text-accent",
      bgColor: "bg-accent/10",
      features: [
        {
          icon: <BarChart3 className="h-5 w-5" />,
          title: "Site Planning AI",
          description: "Multi-criteria optimization for landfill and transfer station locations"
        },
        {
          icon: <Route className="h-5 w-5" />,
          title: "Route Optimization",
          description: "Intelligent collection routing with real-time traffic and capacity data"
        },
        {
          icon: <FileCheck className="h-5 w-5" />,
          title: "Compliance Dashboard",
          description: "Automated reporting for CPCB/SPCB and EPR compliance tracking"
        }
      ],
      benefits: [
        "Reduce operational costs by 30%",
        "Improve collection efficiency",
        "Meet regulatory requirements",
        "Data-driven policy decisions"
      ]
    },
    ngos: {
      title: "For NGOs & Cooperatives",
      subtitle: "Empowering Sustainable Livelihoods",
      icon: <Heart className="h-6 w-6" />,
      color: "text-success",
      bgColor: "bg-success/10",
      features: [
        {
          icon: <GraduationCap className="h-5 w-5" />,
          title: "Training & Certification",
          description: "Comprehensive training programs for waste handling and business management"
        },
        {
          icon: <ShoppingBag className="h-5 w-5" />,
          title: "Marketplace Access",
          description: "Sell upcycled products and recycled materials directly to consumers"
        },
        {
          icon: <DollarSign className="h-5 w-5" />,
          title: "Microfinance",
          description: "Working capital loans and revenue-sharing agreements for growth"
        }
      ],
      benefits: [
        "Increase income by 250%",
        "Access to formal markets",
        "Financial inclusion",
        "Dignified employment"
      ]
    }
  };

  const currentType = userTypes[activeTab as keyof typeof userTypes];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <Recycle className="h-4 w-4 mr-2" />
            Multi-Stakeholder Platform
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Designed for Everyone in the Ecosystem
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored solutions for citizens, municipalities, and NGOs working together for sustainable waste management
          </p>
        </div>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-2xl mx-auto mb-12 h-auto p-2">
            {Object.entries(userTypes).map(([key, type]) => (
              <TabsTrigger 
                key={key} 
                value={key} 
                className="flex flex-col items-center p-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <div className="mb-2">
                  {type.icon}
                </div>
                <span className="text-sm font-medium">{type.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tab Content */}
          {Object.entries(userTypes).map(([key, type]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Content */}
                <div className="space-y-8">
                  <div>
                    <div className={`inline-flex items-center px-4 py-2 rounded-full ${type.bgColor} ${type.color} font-medium mb-4`}>
                      {type.icon}
                      <span className="ml-2">{type.title}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                      {type.subtitle}
                    </h3>
                  </div>

                  {/* Features */}
                  <div className="space-y-6">
                    {type.features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className={`p-2 ${type.bgColor} rounded-lg`}>
                          <div className={type.color}>
                            {feature.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                          <p className="text-muted-foreground">{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <Button variant="hero" size="lg" className="w-full sm:w-auto">
                    Get Started
                  </Button>
                </div>

                {/* Right Column - Benefits */}
                <div className="space-y-6">
                  <Card className="shadow-medium border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="h-5 w-5 mr-2 text-success" />
                        Key Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {type.benefits.map((benefit, index) => (
                        <div key={index} className="flex items-center">
                          <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                          <span className="text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Stats Card */}
                  <Card className="shadow-medium border-0 bg-gradient-secondary">
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <Award className="h-5 w-5 mr-2 text-accent" />
                        Impact Metrics
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-accent mb-1">92%</div>
                          <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-success mb-1">2.5M</div>
                          <div className="text-sm text-muted-foreground">Active Users</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default UserTypes;