import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Leaf, 
  Recycle, 
  TrendingUp,
  Target,
  Globe,
  Users,
  Calendar,
  Award,
  TreePine,
  Droplets,
  Zap,
  Factory,
  Heart
} from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar
} from 'recharts';

const ImpactTracker = () => {
  const monthlyData = [
    { month: 'Jan', co2: 12, waste: 25, items: 45 },
    { month: 'Feb', co2: 18, waste: 32, items: 62 },
    { month: 'Mar', co2: 15, waste: 28, items: 58 },
    { month: 'Apr', co2: 22, waste: 38, items: 73 },
    { month: 'May', co2: 28, waste: 45, items: 89 },
    { month: 'Jun', co2: 32, waste: 52, items: 95 }
  ];

  const wasteBreakdown = [
    { name: 'Plastic', value: 35, color: '#8B5CF6' },
    { name: 'Paper', value: 25, color: '#10B981' },
    { name: 'Glass', value: 20, color: '#F59E0B' },
    { name: 'Electronics', value: 15, color: '#EF4444' },
    { name: 'Others', value: 5, color: '#6B7280' }
  ];

  const personalStats = {
    totalCO2Saved: 156.7,
    totalWasteReduced: 234.5,
    totalItemsRecycled: 578,
    treesEquivalent: 12.4,
    waterSaved: 2840,
    energySaved: 145,
    monthlyGrowth: 23.5,
    globalRanking: 2847
  };

  const milestones = [
    { 
      title: "First 100 Items", 
      description: "Recycled your first 100 items", 
      achieved: true, 
      date: "2 months ago",
      icon: <Target className="h-5 w-5" />
    },
    { 
      title: "Carbon Warrior", 
      description: "Saved 100kg of CO₂ emissions", 
      achieved: true, 
      date: "1 month ago",
      icon: <Leaf className="h-5 w-5" />
    },
    { 
      title: "Community Leader", 
      description: "Top 1% in your neighborhood", 
      achieved: true, 
      date: "2 weeks ago",
      icon: <Award className="h-5 w-5" />
    },
    { 
      title: "Tree Saver", 
      description: "Impact equivalent to planting 20 trees", 
      achieved: false, 
      progress: 62,
      icon: <TreePine className="h-5 w-5" />
    }
  ];

  const communityGoals = [
    {
      title: "Neighborhood Challenge",
      description: "Reduce community waste by 30%",
      progress: 73,
      target: "30%",
      participants: 156,
      timeLeft: "12 days"
    },
    {
      title: "City-wide Initiative",
      description: "1 Million items recycled",
      progress: 45,
      target: "1M items",
      participants: 12450,
      timeLeft: "2 months"
    }
  ];

  const impactComparisons = [
    { metric: "CO₂ Saved", value: "156.7 kg", equivalent: "3 months of car emissions", icon: <Factory className="h-5 w-5" /> },
    { metric: "Water Saved", value: "2,840 L", equivalent: "19 days of drinking water", icon: <Droplets className="h-5 w-5" /> },
    { metric: "Energy Saved", value: "145 kWh", equivalent: "1 month of home electricity", icon: <Zap className="h-5 w-5" /> },
    { metric: "Trees Equivalent", value: "12.4 trees", equivalent: "1 year of oxygen production", icon: <TreePine className="h-5 w-5" /> }
  ];

  return (
    <div className="space-y-6">
      {/* Impact Overview */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {impactComparisons.map((impact, index) => (
          <Card key={index} className="shadow-medium border-0">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {impact.icon}
                </div>
                <TrendingUp className="h-4 w-4 text-success" />
              </div>
              <div className="text-2xl font-bold mb-1">{impact.value}</div>
              <div className="text-sm text-muted-foreground mb-1">{impact.metric}</div>
              <div className="text-xs text-muted-foreground">{impact.equivalent}</div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Monthly Progress Chart */}
        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5" />
              Monthly Impact Trend
            </CardTitle>
            <CardDescription>Your environmental impact over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area 
                  type="monotone" 
                  dataKey="co2" 
                  stackId="1" 
                  stroke="#10B981" 
                  fill="#10B981" 
                  fillOpacity={0.6}
                  name="CO₂ Saved (kg)"
                />
                <Area 
                  type="monotone" 
                  dataKey="waste" 
                  stackId="1" 
                  stroke="#8B5CF6" 
                  fill="#8B5CF6" 
                  fillOpacity={0.6}
                  name="Waste Reduced (kg)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Waste Category Breakdown */}
        <Card className="shadow-medium border-0">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Recycle className="h-5 w-5" />
              Waste Category Breakdown
            </CardTitle>
            <CardDescription>Distribution of recycled materials</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={wasteBreakdown}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {wasteBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, 'Percentage']} />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {wasteBreakdown.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm">{item.name}</span>
                  <span className="text-sm font-medium ml-auto">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Milestones */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Achievement Milestones
          </CardTitle>
          <CardDescription>Track your recycling journey milestones</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-muted/30 rounded-lg">
              <div className={`p-2 rounded-full ${
                milestone.achieved 
                  ? 'bg-success text-success-foreground' 
                  : 'bg-muted text-muted-foreground'
              }`}>
                {milestone.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{milestone.title}</h3>
                  {milestone.achieved && (
                    <Badge className="bg-success/10 text-success">Achieved</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground mb-2">{milestone.description}</p>
                {milestone.achieved ? (
                  <p className="text-xs text-muted-foreground">{milestone.date}</p>
                ) : (
                  <div className="space-y-1">
                    <Progress value={milestone.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">{milestone.progress}% complete</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Community Goals */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5" />
            Community Challenges
          </CardTitle>
          <CardDescription>Join community-wide environmental initiatives</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {communityGoals.map((goal, index) => (
            <div key={index} className="p-4 bg-gradient-to-r from-primary/5 to-success/5 rounded-lg">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h3 className="font-semibold mb-1">{goal.title}</h3>
                  <p className="text-sm text-muted-foreground">{goal.description}</p>
                </div>
                <Badge variant="outline">
                  <Calendar className="h-3 w-3 mr-1" />
                  {goal.timeLeft}
                </Badge>
              </div>
              <div className="mb-3">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{goal.progress}% of {goal.target}</span>
                </div>
                <Progress value={goal.progress} className="h-2" />
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Users className="h-4 w-4" />
                  {goal.participants.toLocaleString()} participants
                </div>
                <div className="flex items-center gap-1 text-primary">
                  <Heart className="h-4 w-4" />
                  Join Challenge
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Global Impact */}
      <Card className="shadow-medium border-0 bg-gradient-to-r from-success/5 to-primary/5">
        <CardContent className="p-6 text-center">
          <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-bold mb-2">Global Impact Contribution</h2>
          <p className="text-muted-foreground mb-4">
            Your recycling efforts contribute to global sustainability goals
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <div className="text-2xl font-bold text-success">0.02%</div>
              <div className="text-xs text-muted-foreground">of city's waste reduction</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">#{personalStats.globalRanking}</div>
              <div className="text-xs text-muted-foreground">global ranking</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-warning">+{personalStats.monthlyGrowth}%</div>
              <div className="text-xs text-muted-foreground">monthly growth</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-destructive">12.4</div>
              <div className="text-xs text-muted-foreground">trees equivalent</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ImpactTracker;
