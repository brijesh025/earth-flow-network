import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Gift, 
  Star, 
  Award, 
  TrendingUp,
  Leaf,
  DollarSign,
  Users,
  Target,
  CheckCircle,
  Calendar,
  Zap,
  Trophy,
  Crown,
  Flame,
  ShoppingBag,
  CreditCard,
  ArrowRight
} from "lucide-react";

const RewardTracker = () => {
  const userStats = {
    totalPoints: 2847,
    level: "Eco Champion",
    levelProgress: 75,
    nextLevel: "Green Guardian",
    pointsToNext: 653,
    streak: 12,
    totalImpact: {
      itemsRecycled: 156,
      co2Saved: 23.4,
      wasteReduced: 45.2,
      treesEquivalent: 3.2
    }
  };

  const recentActivities = [
    { id: 1, action: "Recycled plastic bottles", points: 50, date: "Today", impact: "0.5kg CO₂ saved" },
    { id: 2, action: "Completed weekly challenge", points: 100, date: "Yesterday", impact: "Community goal achieved" },
    { id: 3, action: "Referred a friend", points: 200, date: "2 days ago", impact: "Network expanded" },
    { id: 4, action: "Proper e-waste disposal", points: 150, date: "3 days ago", impact: "Toxic materials safely handled" }
  ];

  const availableRewards = [
    {
      id: 1,
      title: "₹50 Shopping Voucher",
      description: "Redeem at partner stores",
      points: 500,
      category: "Shopping",
      available: true,
      image: "🛍️"
    },
    {
      id: 2,
      title: "Tree Planting Certificate",
      description: "Plant a tree in your name",
      points: 300,
      category: "Environmental",
      available: true,
      image: "🌱"
    },
    {
      id: 3,
      title: "Premium App Features",
      description: "1 month premium access",
      points: 800,
      category: "Digital",
      available: false,
      image: "⭐"
    },
    {
      id: 4,
      title: "Eco-friendly Products",
      description: "Sustainable merchandise",
      points: 1200,
      category: "Products",
      available: true,
      image: "♻️"
    }
  ];

  const challenges = [
    {
      id: 1,
      title: "Weekly Recycling Goal",
      description: "Recycle 10 items this week",
      progress: 70,
      reward: 100,
      timeLeft: "3 days",
      difficulty: "Easy"
    },
    {
      id: 2,
      title: "Community Champion",
      description: "Help 5 neighbors with recycling",
      progress: 40,
      reward: 250,
      timeLeft: "1 week",
      difficulty: "Medium"
    },
    {
      id: 3,
      title: "Zero Waste Day",
      description: "Complete a day with zero waste",
      progress: 0,
      reward: 500,
      timeLeft: "2 weeks",
      difficulty: "Hard"
    }
  ];

  const leaderboard = [
    { rank: 1, name: "You", points: 2847, badge: "🥇" },
    { rank: 2, name: "Alex Chen", points: 2654, badge: "🥈" },
    { rank: 3, name: "Maria Garcia", points: 2432, badge: "🥉" },
    { rank: 4, name: "Raj Patel", points: 2201, badge: "🏅" },
    { rank: 5, name: "Sarah Johnson", points: 2089, badge: "🏅" }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-success/10 text-success';
      case 'Medium': return 'bg-warning/10 text-warning';
      case 'Hard': return 'bg-destructive/10 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <div className="space-y-6">
      {/* Points Overview */}
      <Card className="shadow-medium border-0 bg-gradient-to-r from-primary/5 to-success/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <Crown className="h-6 w-6 text-warning" />
                {userStats.totalPoints.toLocaleString()} Points
              </h2>
              <p className="text-muted-foreground">Level: {userStats.level}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                <Flame className="h-4 w-4 text-orange-500" />
                {userStats.streak} day streak
              </div>
              <Badge className="bg-primary/10 text-primary">
                Rank #1 in your area
              </Badge>
            </div>
          </div>
          
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Progress to {userStats.nextLevel}</span>
              <span>{userStats.pointsToNext} points to go</span>
            </div>
            <Progress value={userStats.levelProgress} className="h-2" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-primary">{userStats.totalImpact.itemsRecycled}</div>
              <div className="text-xs text-muted-foreground">Items Recycled</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-success">{userStats.totalImpact.co2Saved}</div>
              <div className="text-xs text-muted-foreground">kg CO₂ Saved</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">{userStats.totalImpact.wasteReduced}</div>
              <div className="text-xs text-muted-foreground">kg Waste Reduced</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-destructive">{userStats.totalImpact.treesEquivalent}</div>
              <div className="text-xs text-muted-foreground">Trees Equivalent</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="rewards" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="rewards">Rewards</TabsTrigger>
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="activity">Activity</TabsTrigger>
          <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
        </TabsList>

        {/* Rewards Tab */}
        <TabsContent value="rewards" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {availableRewards.map((reward) => (
              <Card key={reward.id} className="shadow-medium border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="text-4xl">{reward.image}</div>
                    <Badge variant="outline">{reward.category}</Badge>
                  </div>
                  <h3 className="font-semibold mb-2">{reward.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{reward.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-warning" />
                      <span className="font-medium">{reward.points} points</span>
                    </div>
                    <Button 
                      size="sm" 
                      disabled={!reward.available || userStats.totalPoints < reward.points}
                      className="ml-auto"
                    >
                      {userStats.totalPoints >= reward.points ? "Redeem" : "Need more points"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Challenges Tab */}
        <TabsContent value="challenges" className="space-y-4">
          {challenges.map((challenge) => (
            <Card key={challenge.id} className="shadow-medium border-0">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold">{challenge.title}</h3>
                      <Badge className={getDifficultyColor(challenge.difficulty)}>
                        {challenge.difficulty}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{challenge.description}</p>
                    <div className="mb-2">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Progress</span>
                        <span>{challenge.progress}%</span>
                      </div>
                      <Progress value={challenge.progress} className="h-2" />
                    </div>
                  </div>
                  <div className="text-right ml-4">
                    <div className="flex items-center gap-1 text-sm font-medium text-primary mb-1">
                      <Star className="h-4 w-4" />
                      {challenge.reward} points
                    </div>
                    <div className="text-xs text-muted-foreground">{challenge.timeLeft} left</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full">
                  <Target className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        {/* Activity Tab */}
        <TabsContent value="activity" className="space-y-4">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Recent Activity
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.impact}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-primary">+{activity.points}</div>
                    <div className="text-xs text-muted-foreground">{activity.date}</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Leaderboard Tab */}
        <TabsContent value="leaderboard" className="space-y-4">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="h-5 w-5 text-warning" />
                Community Leaderboard
              </CardTitle>
              <CardDescription>Top recyclers in your area this month</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {leaderboard.map((user, index) => (
                <div 
                  key={user.rank} 
                  className={`flex items-center justify-between p-3 rounded-lg ${
                    user.name === 'You' ? 'bg-primary/10 border border-primary/20' : 'bg-muted/30'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-2xl">{user.badge}</div>
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">Rank #{user.rank}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-primary">{user.points.toLocaleString()}</div>
                    <div className="text-xs text-muted-foreground">points</div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default RewardTracker;
