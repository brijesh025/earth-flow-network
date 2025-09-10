import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Leaf, 
  Users, 
  Recycle, 
  MapPin, 
  DollarSign,
  Target,
  Globe,
  Trophy,
  Zap
} from "lucide-react";

const ImpactDashboard = () => {
  const stats = [
    {
      title: "Waste Diverted",
      value: "2.5M",
      unit: "tonnes",
      change: "+23%",
      icon: <Recycle className="h-6 w-6" />,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      title: "CO₂ Emissions Avoided",
      value: "1.2M",
      unit: "tonnes",
      change: "+18%",
      icon: <Leaf className="h-6 w-6" />,
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "NGOs Empowered",
      value: "850",
      unit: "organizations",
      change: "+45%",
      icon: <Users className="h-6 w-6" />,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      title: "Revenue Generated",
      value: "₹25M",
      unit: "for communities",
      change: "+65%",
      icon: <DollarSign className="h-6 w-6" />,
      color: "text-warning",
      bgColor: "bg-warning/10"
    }
  ];

  const cityMetrics = [
    { city: "Pune", recyclingRate: 78, households: 45000, ngos: 15 },
    { city: "Indore", recyclingRate: 85, households: 38000, ngos: 12 },
    { city: "Surat", recyclingRate: 72, households: 52000, ngos: 18 },
    { city: "Coimbatore", recyclingRate: 68, households: 28000, ngos: 8 }
  ];

  const achievements = [
    {
      title: "Best Urban Innovation",
      organization: "UN-Habitat",
      year: "2024",
      icon: <Trophy className="h-5 w-5" />
    },
    {
      title: "Sustainability Leader",
      organization: "World Economic Forum",
      year: "2024",
      icon: <Globe className="h-5 w-5" />
    },
    {
      title: "Tech for Good",
      organization: "MIT Technology Review",
      year: "2023",
      icon: <Zap className="h-5 w-5" />
    }
  ];

  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4">
            <TrendingUp className="h-4 w-4 mr-2" />
            Real Impact Data
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            Measuring Our Environmental & Social Impact
          </h2>
          <p className="text-lg text-muted-foreground">
            Transparent tracking of waste diversion, emissions reduction, and community empowerment across our network
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="shadow-medium border-0 hover:shadow-strong transition-all duration-300 group">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className={`p-2 ${stat.bgColor} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                  <div className={stat.color}>
                    {stat.icon}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-baseline space-x-2">
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.unit}</div>
                </div>
                <div className="flex items-center mt-2">
                  <TrendingUp className="h-4 w-4 text-success mr-1" />
                  <span className="text-sm text-success font-medium">{stat.change}</span>
                  <span className="text-sm text-muted-foreground ml-1">vs last year</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* City Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-primary" />
                City Performance Dashboard
              </CardTitle>
              <CardDescription>
                Recycling rates and engagement metrics across partner cities
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {cityMetrics.map((city, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="font-medium text-foreground">{city.city}</div>
                    <div className="text-sm text-muted-foreground">
                      {city.recyclingRate}% recycling rate
                    </div>
                  </div>
                  <Progress value={city.recyclingRate} className="h-2" />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{city.households.toLocaleString()} households</span>
                    <span>{city.ngos} NGO partners</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Target className="h-5 w-5 mr-2 text-accent" />
                SDG Alignment
              </CardTitle>
              <CardDescription>
                Contributing to UN Sustainable Development Goals
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SDG 11: Sustainable Cities</span>
                  <span className="font-medium text-foreground">85%</span>
                </div>
                <Progress value={85} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SDG 8: Decent Work</span>
                  <span className="font-medium text-foreground">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SDG 12: Responsible Consumption</span>
                  <span className="font-medium text-foreground">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">SDG 13: Climate Action</span>
                  <span className="font-medium text-foreground">88%</span>
                </div>
                <Progress value={88} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recognition */}
        <Card className="shadow-strong border-0 bg-gradient-secondary">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Recognition & Awards</CardTitle>
            <CardDescription>
              Acknowledged by leading organizations for innovation and impact
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="p-3 bg-accent/10 rounded-full w-fit mx-auto mb-3">
                    <div className="text-accent">
                      {achievement.icon}
                    </div>
                  </div>
                  <h4 className="font-semibold text-foreground mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.organization}</p>
                  <p className="text-xs text-muted-foreground">{achievement.year}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ImpactDashboard;