import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area
} from 'recharts';
import { 
  MapPin, 
  Truck, 
  BarChart3, 
  FileCheck, 
  TrendingUp, 
  AlertTriangle,
  CheckCircle,
  Clock,
  DollarSign,
  Recycle,
  Leaf,
  Users,
  Settings,
  Download,
  Filter,
  Calendar,
  Navigation,
  Target,
  Zap
} from "lucide-react";
import MapboxMap from "@/components/MapboxMap";

const MunicipalDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedSites, setSelectedSites] = useState([
    { lng: 77.1200, lat: 28.7300, score: 85, type: 'landfill' },
    { lng: 77.0700, lat: 28.6800, score: 72, type: 'transfer' },
    { lng: 77.1500, lat: 28.7600, score: 91, type: 'recycling' }
  ]);

  // Dummy data for charts
  const wasteGenerationData = [
    { month: 'Jan', organic: 450, plastic: 280, paper: 150, glass: 80, metal: 60 },
    { month: 'Feb', organic: 420, plastic: 290, paper: 160, glass: 85, metal: 65 },
    { month: 'Mar', organic: 480, plastic: 310, paper: 170, glass: 90, metal: 70 },
    { month: 'Apr', organic: 510, plastic: 320, paper: 165, glass: 88, metal: 68 },
    { month: 'May', organic: 540, plastic: 340, paper: 180, glass: 95, metal: 75 },
    { month: 'Jun', organic: 520, plastic: 330, paper: 175, glass: 92, metal: 72 }
  ];

  const recyclingRateData = [
    { ward: 'Ward 1', rate: 78, target: 80 },
    { ward: 'Ward 2', rate: 65, target: 80 },
    { ward: 'Ward 3', rate: 82, target: 80 },
    { ward: 'Ward 4', rate: 71, target: 80 },
    { ward: 'Ward 5', rate: 88, target: 80 },
    { ward: 'Ward 6', rate: 74, target: 80 }
  ];

  const costAnalysisData = [
    { category: 'Collection', current: 1200, optimized: 950 },
    { category: 'Transport', current: 800, optimized: 620 },
    { category: 'Processing', current: 600, optimized: 480 },
    { category: 'Disposal', current: 400, optimized: 300 }
  ];

  const pieData = [
    { name: 'Organic', value: 45, color: '#10b981' },
    { name: 'Plastic', value: 25, color: '#f59e0b' },
    { name: 'Paper', value: 15, color: '#3b82f6' },
    { name: 'Glass', value: 10, color: '#8b5cf6' },
    { name: 'Metal', value: 5, color: '#ef4444' }
  ];

  const complianceData = [
    { metric: 'CPCB Reporting', status: 'Compliant', score: 95 },
    { metric: 'EPR Tracking', status: 'Compliant', score: 88 },
    { metric: 'Emission Standards', status: 'Warning', score: 75 },
    { metric: 'Waste Diversion', status: 'Compliant', score: 92 }
  ];

  const routeEfficiencyData = [
    { route: 'Route A', distance: 45, time: 180, efficiency: 92 },
    { route: 'Route B', distance: 38, time: 165, efficiency: 88 },
    { route: 'Route C', distance: 52, time: 210, efficiency: 85 },
    { route: 'Route D', distance: 41, time: 155, efficiency: 95 }
  ];

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <div className="bg-background border-b border-border sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Municipal Dashboard</h1>
              <p className="text-muted-foreground">AI-Powered Waste Management Control Center</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                <CheckCircle className="h-3 w-3 mr-1" />
                System Online
              </Badge>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Export Report
              </Button>
              <Button variant="hero" size="sm">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="shadow-medium border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Collection</CardTitle>
              <Truck className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">2,847 tonnes</div>
              <p className="text-xs text-success">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Recycling Rate</CardTitle>
              <Recycle className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">76.4%</div>
              <p className="text-xs text-success">+3.2% this month</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Cost Savings</CardTitle>
              <DollarSign className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">₹14.2L</div>
              <p className="text-xs text-success">28% reduction</p>
            </CardContent>
          </Card>

          <Card className="shadow-medium border-0">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">CO₂ Avoided</CardTitle>
              <Leaf className="h-4 w-4 text-success" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">1,250 tCO₂</div>
              <p className="text-xs text-success">+18% this quarter</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto mb-8">
            <TabsTrigger value="overview" className="flex items-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="site-planning" className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              Site Planning
            </TabsTrigger>
            <TabsTrigger value="routes" className="flex items-center">
              <Navigation className="h-4 w-4 mr-2" />
              Routes
            </TabsTrigger>
            <TabsTrigger value="compliance" className="flex items-center">
              <FileCheck className="h-4 w-4 mr-2" />
              Compliance
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Waste Generation Trends */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Waste Generation Trends</CardTitle>
                  <CardDescription>Monthly waste composition analysis</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={wasteGenerationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotone" dataKey="organic" stackId="1" stroke="#10b981" fill="#10b981" />
                      <Area type="monotone" dataKey="plastic" stackId="1" stroke="#f59e0b" fill="#f59e0b" />
                      <Area type="monotone" dataKey="paper" stackId="1" stroke="#3b82f6" fill="#3b82f6" />
                      <Area type="monotone" dataKey="glass" stackId="1" stroke="#8b5cf6" fill="#8b5cf6" />
                      <Area type="monotone" dataKey="metal" stackId="1" stroke="#ef4444" fill="#ef4444" />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>

              {/* Waste Composition */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Current Waste Composition</CardTitle>
                  <CardDescription>Today's waste stream breakdown</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={pieData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }: any) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {pieData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>

            {/* Recycling Performance */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle>Ward-wise Recycling Performance</CardTitle>
                <CardDescription>Current recycling rates vs targets</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={recyclingRateData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="ward" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="rate" fill="#10b981" name="Current Rate" />
                    <Bar dataKey="target" fill="#e5e7eb" name="Target" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Site Planning Tab */}
          <TabsContent value="site-planning" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2" />
                      AI Site Selection Map
                    </CardTitle>
                    <CardDescription>
                      Multi-criteria optimization for waste facility locations
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="h-96">
                      <MapboxMap selectedSites={selectedSites} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle>Site Scores</CardTitle>
                    <CardDescription>AI evaluation results</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {selectedSites.map((site, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium capitalize">{site.type} Site {index + 1}</span>
                          <Badge variant={site.score > 80 ? "default" : site.score > 60 ? "secondary" : "destructive"}>
                            {site.score}%
                          </Badge>
                        </div>
                        <Progress value={site.score} className="h-2" />
                        <div className="text-xs text-muted-foreground">
                          Environmental: {site.score - 5}% • Social: {site.score + 2}% • Cost: {site.score - 3}%
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle>Optimization Criteria</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Distance from residential areas</span>
                      <Badge variant="outline">High Priority</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Transportation cost</span>
                      <Badge variant="outline">Medium</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Environmental impact</span>
                      <Badge variant="outline">High Priority</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Land acquisition cost</span>
                      <Badge variant="outline">Medium</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Routes Tab */}
          <TabsContent value="routes" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Navigation className="h-5 w-5 mr-2" />
                    Optimized Collection Routes
                  </CardTitle>
                  <CardDescription>Real-time route optimization and tracking</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="h-80">
                    <MapboxMap wasteCollectionRoutes={true} />
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>Route Efficiency Metrics</CardTitle>
                  <CardDescription>Performance analysis of collection routes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {routeEfficiencyData.map((route, index) => (
                      <div key={index} className="p-4 border border-border rounded-lg">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-medium">{route.route}</span>
                          <Badge variant={route.efficiency > 90 ? "default" : "secondary"}>
                            {route.efficiency}% Efficient
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-muted-foreground">
                          <div>Distance: {route.distance} km</div>
                          <div>Time: {route.time} min</div>
                        </div>
                        <Progress value={route.efficiency} className="h-2 mt-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cost Analysis */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle>Route Optimization Cost Analysis</CardTitle>
                <CardDescription>Current vs optimized operational costs</CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={costAnalysisData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="category" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="current" fill="#ef4444" name="Current Cost (₹000)" />
                    <Bar dataKey="optimized" fill="#10b981" name="Optimized Cost (₹000)" />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Compliance Tab */}
          <TabsContent value="compliance" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileCheck className="h-5 w-5 mr-2" />
                    Regulatory Compliance Status
                  </CardTitle>
                  <CardDescription>Real-time compliance monitoring and reporting</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {complianceData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg">
                      <div className="flex items-center space-x-3">
                        {item.status === 'Compliant' ? (
                          <CheckCircle className="h-5 w-5 text-success" />
                        ) : (
                          <AlertTriangle className="h-5 w-5 text-warning" />
                        )}
                        <div>
                          <div className="font-medium">{item.metric}</div>
                          <div className="text-sm text-muted-foreground">Score: {item.score}%</div>
                        </div>
                      </div>
                      <Badge variant={item.status === 'Compliant' ? "default" : "secondary"}>
                        {item.status}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle>EPR Tracking Dashboard</CardTitle>
                  <CardDescription>Extended Producer Responsibility compliance</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-primary/10 rounded-lg">
                      <div className="text-2xl font-bold text-primary">₹18.5L</div>
                      <div className="text-sm text-muted-foreground">EPR Revenue</div>
                    </div>
                    <div className="text-center p-4 bg-success/10 rounded-lg">
                      <div className="text-2xl font-bold text-success">2,340</div>
                      <div className="text-sm text-muted-foreground">Certificates Issued</div>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Plastic Recycling Target</span>
                      <span className="text-sm font-medium">85% Complete</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">E-waste Collection Target</span>
                      <span className="text-sm font-medium">92% Complete</span>
                    </div>
                    <Progress value={92} className="h-2" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Paper Recycling Target</span>
                      <span className="text-sm font-medium">78% Complete</span>
                    </div>
                    <Progress value={78} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compliance Timeline */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle>Upcoming Compliance Deadlines</CardTitle>
                <CardDescription>Important regulatory deadlines and submissions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <div className="p-2 bg-warning/10 rounded-lg">
                      <Calendar className="h-4 w-4 text-warning" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">CPCB Annual Report</div>
                      <div className="text-sm text-muted-foreground">Due in 15 days - March 31, 2024</div>
                    </div>
                    <Badge variant="secondary">In Progress</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <div className="p-2 bg-success/10 rounded-lg">
                      <CheckCircle className="h-4 w-4 text-success" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Monthly EPR Submission</div>
                      <div className="text-sm text-muted-foreground">Completed - March 5, 2024</div>
                    </div>
                    <Badge variant="default">Completed</Badge>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Clock className="h-4 w-4 text-primary" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">Quarterly Audit Report</div>
                      <div className="text-sm text-muted-foreground">Due in 45 days - April 30, 2024</div>
                    </div>
                    <Badge variant="outline">Upcoming</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="h-5 w-5 mr-2" />
                    Performance KPIs
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Collection Efficiency</span>
                      <span className="font-medium">94.2%</span>
                    </div>
                    <Progress value={94.2} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Waste Diversion Rate</span>
                      <span className="font-medium">76.8%</span>
                    </div>
                    <Progress value={76.8} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Cost Optimization</span>
                      <span className="font-medium">87.3%</span>
                    </div>
                    <Progress value={87.3} className="h-2" />
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Environmental Impact</span>
                      <span className="font-medium">91.5%</span>
                    </div>
                    <Progress value={91.5} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              <div className="lg:col-span-2">
                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle>Predictive Analytics</CardTitle>
                    <CardDescription>AI-powered waste generation forecasting</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <LineChart data={wasteGenerationData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="organic" stroke="#10b981" strokeWidth={2} />
                        <Line type="monotone" dataKey="plastic" stroke="#f59e0b" strokeWidth={2} />
                        <Line type="monotone" dataKey="paper" stroke="#3b82f6" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* AI Insights */}
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Zap className="h-5 w-5 mr-2" />
                  AI-Generated Insights & Recommendations
                </CardTitle>
                <CardDescription>Smart recommendations for operational improvements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-primary/10 border border-primary/20 rounded-lg">
                    <h4 className="font-semibold text-primary mb-2">Route Optimization</h4>
                    <p className="text-sm text-muted-foreground">
                      Implementing suggested route changes could reduce collection time by 18% and save ₹2.3L annually.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                    <h4 className="font-semibold text-success mb-2">Capacity Planning</h4>
                    <p className="text-sm text-muted-foreground">
                      Ward 5 is projected to exceed capacity by 15% next month. Consider deploying additional resources.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                    <h4 className="font-semibold text-warning mb-2">Seasonal Trends</h4>
                    <p className="text-sm text-muted-foreground">
                      Organic waste generation typically increases by 25% during festival season. Plan accordingly.
                    </p>
                  </div>
                  
                  <div className="p-4 bg-accent/10 border border-accent/20 rounded-lg">
                    <h4 className="font-semibold text-accent mb-2">Equipment Maintenance</h4>
                    <p className="text-sm text-muted-foreground">
                      3 collection vehicles due for maintenance this week. Schedule to avoid service disruption.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MunicipalDashboard;