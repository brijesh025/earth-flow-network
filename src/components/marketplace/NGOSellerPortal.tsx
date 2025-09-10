import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Plus, 
  Upload, 
  Eye, 
  Edit, 
  Trash2,
  DollarSign,
  Package,
  TrendingUp,
  Users,
  Star,
  CheckCircle,
  Clock,
  AlertTriangle,
  GraduationCap,
  CreditCard,
  FileText,
  Award
} from "lucide-react";

const NGOSellerPortal = () => {
  const [activePortalTab, setActivePortalTab] = useState("dashboard");

  // Sample NGO data
  const ngoData = {
    name: "Green Hands NGO",
    location: "Mumbai, Maharashtra",
    rating: 4.8,
    totalProducts: 24,
    totalSales: 156,
    revenue: 45600,
    status: "verified"
  };

  const products = [
    {
      id: 1,
      name: "Upcycled Plastic Planters",
      status: "active",
      stock: 45,
      price: 299,
      sales: 124,
      revenue: 37076,
      image: "/api/placeholder/100/100"
    },
    {
      id: 2,
      name: "Recycled Bottle Lamps",
      status: "pending",
      stock: 0,
      price: 599,
      sales: 32,
      revenue: 19168,
      image: "/api/placeholder/100/100"
    }
  ];

  const trainingModules = [
    { id: 1, title: "Waste Handling & Safety", progress: 100, status: "completed" },
    { id: 2, title: "Business Management", progress: 75, status: "in-progress" },
    { id: 3, title: "Quality Control", progress: 0, status: "not-started" },
    { id: 4, title: "Digital Marketing", progress: 50, status: "in-progress" }
  ];

  const financialData = {
    availableCredit: 25000,
    usedCredit: 15000,
    totalCredit: 40000,
    nextPayment: "15 Jan 2024",
    paymentAmount: 5000
  };

  return (
    <div className="space-y-8">
      {/* NGO Header */}
      <Card className="shadow-medium border-0">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground">{ngoData.name}</h2>
                <p className="text-muted-foreground">{ngoData.location}</p>
                <div className="flex items-center gap-2 mt-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{ngoData.rating}</span>
                  <Badge variant={ngoData.status === "verified" ? "default" : "secondary"}>
                    {ngoData.status === "verified" ? (
                      <>
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Verified NGO
                      </>
                    ) : (
                      <>
                        <Clock className="h-3 w-3 mr-1" />
                        Pending Verification
                      </>
                    )}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="hero">
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Portal Tabs */}
      <Tabs value={activePortalTab} onValueChange={setActivePortalTab} className="w-full">
        <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
          <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="training">Training</TabsTrigger>
          <TabsTrigger value="finance">Finance</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        {/* Dashboard Tab */}
        <TabsContent value="dashboard" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="shadow-medium border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Products</p>
                    <p className="text-2xl font-bold text-foreground">{ngoData.totalProducts}</p>
                  </div>
                  <Package className="h-8 w-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Sales</p>
                    <p className="text-2xl font-bold text-foreground">{ngoData.totalSales}</p>
                  </div>
                  <TrendingUp className="h-8 w-8 text-success" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Revenue</p>
                    <p className="text-2xl font-bold text-foreground">₹{ngoData.revenue.toLocaleString()}</p>
                  </div>
                  <DollarSign className="h-8 w-8 text-accent" />
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="text-2xl font-bold text-foreground">{ngoData.rating}</p>
                  </div>
                  <Star className="h-8 w-8 text-warning" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-success/10 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-success" />
                  <div className="flex-1">
                    <p className="font-medium">Product "Upcycled Plastic Planters" sold</p>
                    <p className="text-sm text-muted-foreground">2 hours ago • ₹299</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 bg-primary/10 rounded-lg">
                  <Upload className="h-5 w-5 text-primary" />
                  <div className="flex-1">
                    <p className="font-medium">New product uploaded for review</p>
                    <p className="text-sm text-muted-foreground">1 day ago • Recycled Bottle Lamps</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-accent/10 rounded-lg">
                  <Award className="h-5 w-5 text-accent" />
                  <div className="flex-1">
                    <p className="font-medium">Training module completed</p>
                    <p className="text-sm text-muted-foreground">3 days ago • Waste Handling & Safety</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Products Tab */}
        <TabsContent value="products" className="space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-semibold">My Products</h3>
            <Button variant="hero">
              <Plus className="h-4 w-4 mr-2" />
              Add New Product
            </Button>
          </div>

          <div className="grid gap-4">
            {products.map((product) => (
              <Card key={product.id} className="shadow-medium border-0">
                <CardContent className="p-4">
                  <div className="flex items-center gap-4">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground">{product.name}</h4>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <span>Stock: {product.stock}</span>
                        <span>Price: ₹{product.price}</span>
                        <span>Sales: {product.sales}</span>
                        <span>Revenue: ₹{product.revenue.toLocaleString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant={product.status === "active" ? "default" : "secondary"}>
                        {product.status}
                      </Badge>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Training Tab */}
        <TabsContent value="training" className="space-y-6">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                Training & Certification
              </CardTitle>
              <CardDescription>
                Complete training modules to improve your skills and increase your seller rating
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {trainingModules.map((module) => (
                <div key={module.id} className="p-4 border border-border rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">{module.title}</h4>
                    <Badge variant={
                      module.status === "completed" ? "default" :
                      module.status === "in-progress" ? "secondary" : "outline"
                    }>
                      {module.status === "completed" ? "Completed" :
                       module.status === "in-progress" ? "In Progress" : "Not Started"}
                    </Badge>
                  </div>
                  <Progress value={module.progress} className="h-2 mb-3" />
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      {module.progress}% Complete
                    </span>
                    <Button size="sm" variant={module.status === "completed" ? "outline" : "default"}>
                      {module.status === "completed" ? "Review" : 
                       module.status === "in-progress" ? "Continue" : "Start"}
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Finance Tab */}
        <TabsContent value="finance" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Credit Line Status
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Available Credit</span>
                    <span className="font-medium">₹{financialData.availableCredit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Used Credit</span>
                    <span className="font-medium">₹{financialData.usedCredit.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total Credit Line</span>
                    <span>₹{financialData.totalCredit.toLocaleString()}</span>
                  </div>
                </div>
                <Progress 
                  value={(financialData.usedCredit / financialData.totalCredit) * 100} 
                  className="h-3" 
                />
                <Button className="w-full">
                  Apply for Credit Increase
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-medium border-0">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Payment Schedule
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-warning/10 border border-warning/20 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertTriangle className="h-4 w-4 text-warning" />
                    <span className="font-medium">Upcoming Payment</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    Next payment due: {financialData.nextPayment}
                  </p>
                  <p className="text-lg font-bold">₹{financialData.paymentAmount.toLocaleString()}</p>
                </div>
                
                <div className="space-y-2">
                  <Button className="w-full">
                    Make Payment
                  </Button>
                  <Button variant="outline" className="w-full">
                    View Payment History
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Revenue Sharing */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle>Revenue Sharing Agreement</CardTitle>
              <CardDescription>
                Your current revenue sharing terms and performance bonuses
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <p className="text-2xl font-bold text-primary">85%</p>
                  <p className="text-sm text-muted-foreground">Your Share</p>
                </div>
                <div className="text-center p-4 bg-success/10 rounded-lg">
                  <p className="text-2xl font-bold text-success">+5%</p>
                  <p className="text-sm text-muted-foreground">Performance Bonus</p>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <p className="text-2xl font-bold text-accent">₹2.5L</p>
                  <p className="text-sm text-muted-foreground">This Month</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Analytics Tab */}
        <TabsContent value="analytics" className="space-y-6">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle>Performance Analytics</CardTitle>
              <CardDescription>
                Track your sales performance and customer engagement
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <TrendingUp className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Analytics Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  Detailed analytics and insights will be available here
                </p>
                <Button variant="outline">
                  View Full Analytics
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default NGOSellerPortal;
