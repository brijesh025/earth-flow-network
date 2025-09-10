import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  Camera, 
  MapPin, 
  Star, 
  Gift, 
  Leaf, 
  Recycle,
  Smartphone,
  QrCode,
  Navigation,
  Award,
  TrendingUp,
  Calendar,
  Clock,
  DollarSign,
  Users,
  Target,
  CheckCircle,
  AlertCircle,
  Info,
  Zap,
  ArrowRight,
  Search,
  Filter,
  Bell,
  Settings
} from "lucide-react";
import AIItemScanner from "@/components/citizen/AIItemScanner";
import LocationFinder from "@/components/citizen/LocationFinder";
import RewardTracker from "@/components/citizen/RewardTracker";
import ImpactTracker from "@/components/citizen/ImpactTracker";
import SchedulePickup from "@/components/citizen/SchedulePickup";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CitizenApp = () => {
  const [activeTab, setActiveTab] = useState("scanner");
  const [userStats] = useState({
    totalPoints: 2847,
    level: "Eco Champion",
    itemsRecycled: 156,
    co2Saved: 45.6,
    treesPlanted: 12,
    cashEarned: 1250,
    streak: 28
  });

  const [recentActivity] = useState([
    {
      id: 1,
      type: "scan",
      item: "Plastic Water Bottle",
      points: 15,
      location: "Home Collection",
      timestamp: "2 hours ago",
      status: "completed",
      impact: "0.2kg CO₂ saved"
    },
    {
      id: 2,
      type: "pickup",
      item: "Mixed Recyclables (5kg)",
      points: 75,
      location: "Green Hands NGO Center",
      timestamp: "1 day ago",
      status: "completed",
      impact: "2.1kg CO₂ saved"
    },
    {
      id: 3,
      type: "reward",
      item: "₹50 Mobile Recharge",
      points: -500,
      location: "Rewards Store",
      timestamp: "2 days ago",
      status: "redeemed",
      impact: "Reward claimed"
    },
    {
      id: 4,
      type: "scan",
      item: "Glass Jar",
      points: 20,
      location: "Kitchen",
      timestamp: "3 days ago",
      status: "completed",
      impact: "0.3kg CO₂ saved"
    }
  ]);

  const [nearbyLocations] = useState([
    {
      id: 1,
      name: "Green Hands Recycling Center",
      type: "NGO Center",
      distance: "0.8 km",
      rating: 4.8,
      address: "123 Green Street, Bandra West",
      hours: "9:00 AM - 6:00 PM",
      accepts: ["Plastic", "Paper", "Glass", "Metal"],
      bonusPoints: 1.2,
      image: "/api/placeholder/150/100"
    },
    {
      id: 2,
      name: "EcoWaste Collection Point",
      type: "Municipal",
      distance: "1.2 km",
      rating: 4.5,
      address: "456 Eco Lane, Bandra East",
      hours: "24/7",
      accepts: ["E-waste", "Batteries", "Bulbs"],
      bonusPoints: 1.5,
      image: "/api/placeholder/150/100"
    },
    {
      id: 3,
      name: "Community Compost Center",
      type: "Community",
      distance: "1.8 km",
      rating: 4.6,
      address: "789 Community Road, Khar",
      hours: "6:00 AM - 8:00 PM",
      accepts: ["Organic Waste", "Garden Waste"],
      bonusPoints: 1.3,
      image: "/api/placeholder/150/100"
    }
  ]);

  const [availableRewards] = useState([
    {
      id: 1,
      title: "₹100 Mobile Recharge",
      points: 1000,
      category: "Mobile",
      image: "/api/placeholder/100/100",
      description: "Instant mobile recharge for any operator",
      availability: "Available",
      validUntil: "31 Dec 2024"
    },
    {
      id: 2,
      title: "₹500 Shopping Voucher",
      points: 5000,
      category: "Shopping",
      image: "/api/placeholder/100/100",
      description: "Use at any partnered retail store",
      availability: "Limited",
      validUntil: "15 Jan 2025"
    },
    {
      id: 3,
      title: "Eco-friendly Water Bottle",
      points: 2500,
      category: "Products",
      image: "/api/placeholder/100/100",
      description: "Sustainable steel water bottle",
      availability: "Available",
      validUntil: "28 Feb 2025"
    },
    {
      id: 4,
      title: "Tree Planting Certificate",
      points: 1500,
      category: "Impact",
      image: "/api/placeholder/100/100",
      description: "Plant a tree in your name",
      availability: "Available",
      validUntil: "Ongoing"
    }
  ]);

  const quickStats = [
    { label: "Today's Points", value: "45", icon: <Star className="h-5 w-5" />, color: "text-warning" },
    { label: "Items Scanned", value: "8", icon: <Camera className="h-5 w-5" />, color: "text-primary" },
    { label: "CO₂ Saved Today", value: "1.2kg", icon: <Leaf className="h-5 w-5" />, color: "text-success" },
    { label: "Current Streak", value: `${userStats.streak} days`, icon: <TrendingUp className="h-5 w-5" />, color: "text-accent" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-secondary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Smartphone className="h-4 w-4 mr-2" />
              AI-Powered Citizen App
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Turn Your Waste Into
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Rewards & Impact
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Scan items with AI, find nearby recycling centers, earn rewards, and track your environmental impact. 
              Join thousands making a difference, one scan at a time.
            </p>
            
            {/* User Stats Overview */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <Card className="text-center shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-primary">{userStats.totalPoints}</div>
                  <div className="text-sm text-muted-foreground">Total Points</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-success">{userStats.itemsRecycled}</div>
                  <div className="text-sm text-muted-foreground">Items Recycled</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-accent">{userStats.co2Saved}kg</div>
                  <div className="text-sm text-muted-foreground">CO₂ Saved</div>
                </CardContent>
              </Card>
              <Card className="text-center shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="text-2xl font-bold text-warning">₹{userStats.cashEarned}</div>
                  <div className="text-sm text-muted-foreground">Cash Earned</div>
                </CardContent>
              </Card>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <Camera className="h-5 w-5 mr-2" />
                Start Scanning
              </Button>
              <Button variant="outline" size="lg">
                <MapPin className="h-5 w-5 mr-2" />
                Find Centers
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="p-3 bg-success/10 rounded-full backdrop-blur-sm">
            <Recycle className="h-6 w-6 text-success" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "2s" }}>
          <div className="p-3 bg-primary/10 rounded-full backdrop-blur-sm">
            <Camera className="h-6 w-6 text-primary" />
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {quickStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="flex justify-center mb-2">
                    <div className={`p-2 bg-muted rounded-full ${stat.color}`}>
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main App Interface */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-6 max-w-4xl mx-auto mb-12">
              <TabsTrigger value="scanner" className="flex items-center">
                <Camera className="h-4 w-4 mr-2" />
                Scanner
              </TabsTrigger>
              <TabsTrigger value="locations" className="flex items-center">
                <MapPin className="h-4 w-4 mr-2" />
                Locations
              </TabsTrigger>
              <TabsTrigger value="rewards" className="flex items-center">
                <Gift className="h-4 w-4 mr-2" />
                Rewards
              </TabsTrigger>
              <TabsTrigger value="impact" className="flex items-center">
                <Leaf className="h-4 w-4 mr-2" />
                Impact
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                Schedule
              </TabsTrigger>
              <TabsTrigger value="activity" className="flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                Activity
              </TabsTrigger>
            </TabsList>

            {/* AI Scanner Tab */}
            <TabsContent value="scanner">
              <AIItemScanner />
            </TabsContent>

            {/* Locations Tab */}
            <TabsContent value="locations">
              <LocationFinder locations={nearbyLocations} />
            </TabsContent>

            {/* Rewards Tab */}
            <TabsContent value="rewards">
              <RewardTracker 
                userPoints={userStats.totalPoints}
                availableRewards={availableRewards}
                userLevel={userStats.level}
              />
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact">
              <ImpactTracker userStats={userStats} />
            </TabsContent>

            {/* Schedule Tab */}
            <TabsContent value="schedule">
              <SchedulePickup />
            </TabsContent>

            {/* Activity Tab */}
            <TabsContent value="activity" className="space-y-6">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-4">Recent Activity</h2>
                <p className="text-muted-foreground">
                  Track all your recycling activities, points earned, and environmental impact
                </p>
              </div>

              <div className="max-w-4xl mx-auto space-y-4">
                {recentActivity.map((activity) => (
                  <Card key={activity.id} className="shadow-medium border-0">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-full ${
                            activity.type === 'scan' ? 'bg-primary/10' :
                            activity.type === 'pickup' ? 'bg-success/10' :
                            'bg-accent/10'
                          }`}>
                            {activity.type === 'scan' && <Camera className="h-5 w-5 text-primary" />}
                            {activity.type === 'pickup' && <Recycle className="h-5 w-5 text-success" />}
                            {activity.type === 'reward' && <Gift className="h-5 w-5 text-accent" />}
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground">{activity.item}</h3>
                            <p className="text-sm text-muted-foreground">{activity.location}</p>
                            <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <div className={`text-lg font-bold ${
                            activity.points > 0 ? 'text-success' : 'text-warning'
                          }`}>
                            {activity.points > 0 ? '+' : ''}{activity.points} pts
                          </div>
                          <p className="text-xs text-muted-foreground">{activity.impact}</p>
                          <Badge variant={activity.status === 'completed' ? 'default' : 'secondary'}>
                            {activity.status}
                          </Badge>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center">
                <Button variant="outline">
                  Load More Activities
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Achievement Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Your Achievements</h2>
            <p className="text-lg text-muted-foreground">
              Celebrate your environmental impact milestones and earn special badges
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="text-center shadow-medium border-0">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Eco Champion</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Recycled 100+ items
                </p>
                <Badge variant="default">Current Level</Badge>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium border-0">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Leaf className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Green Warrior</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Saved 50kg+ CO₂
                </p>
                <Badge variant="outline">Unlocked</Badge>
              </CardContent>
            </Card>

            <Card className="text-center shadow-medium border-0 opacity-60">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Sustainability Master</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Recycle 500+ items
                </p>
                <Badge variant="secondary">Locked</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CitizenApp;
