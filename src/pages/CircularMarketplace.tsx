import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import { 
  ShoppingBag, 
  Search, 
  Filter, 
  Star, 
  Heart, 
  ShoppingCart,
  Users,
  Leaf,
  Award,
  Building2,
  FileCheck,
  TrendingUp,
  DollarSign,
  Package,
  Truck,
  CheckCircle,
  Plus,
  Upload,
  Eye,
  Edit,
  Trash2,
  Download,
  ArrowRight,
  Recycle,
  Globe,
  Target,
  Zap
} from "lucide-react";
import ProductCard from "@/components/marketplace/ProductCard";
import CategoryFilter from "@/components/marketplace/CategoryFilter";
import NGOSellerPortal from "@/components/marketplace/NGOSellerPortal";
import EPRServicesSection from "@/components/marketplace/EPRServicesSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CircularMarketplace = () => {
  const [activeTab, setActiveTab] = useState("products");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("featured");

  // Sample product data
  const products = [
    {
      id: 1,
      name: "Upcycled Plastic Planters",
      description: "Beautiful planters made from recycled plastic bottles",
      price: 299,
      originalPrice: 450,
      image: "/api/placeholder/300/200",
      category: "home-garden",
      rating: 4.8,
      reviews: 124,
      seller: "Green Hands NGO",
      location: "Mumbai",
      inStock: true,
      sustainable: true,
      materials: ["Recycled Plastic", "Organic Paint"],
      impact: "Diverted 2.5kg plastic from landfill"
    },
    {
      id: 2,
      name: "Handwoven Textile Bags",
      description: "Durable shopping bags made from recycled fabric waste",
      price: 199,
      originalPrice: 299,
      image: "/api/placeholder/300/200",
      category: "fashion",
      rating: 4.6,
      reviews: 89,
      seller: "Textile Revival Cooperative",
      location: "Bangalore",
      inStock: true,
      sustainable: true,
      materials: ["Recycled Cotton", "Natural Dyes"],
      impact: "Saved 1.2kg textile waste"
    },
    {
      id: 3,
      name: "Recycled Paper Notebooks",
      description: "Premium notebooks made from 100% recycled paper",
      price: 149,
      originalPrice: 200,
      image: "/api/placeholder/300/200",
      category: "stationery",
      rating: 4.9,
      reviews: 203,
      seller: "EcoWrite Initiative",
      location: "Delhi",
      inStock: true,
      sustainable: true,
      materials: ["Recycled Paper", "Soy-based Ink"],
      impact: "Recycled 0.8kg paper waste"
    },
    {
      id: 4,
      name: "Solar Phone Chargers",
      description: "Portable solar chargers with recycled electronic components",
      price: 899,
      originalPrice: 1299,
      image: "/api/placeholder/300/200",
      category: "electronics",
      rating: 4.7,
      reviews: 67,
      seller: "Solar Solutions NGO",
      location: "Pune",
      inStock: false,
      sustainable: true,
      materials: ["Recycled Electronics", "Solar Cells"],
      impact: "Reused 0.5kg e-waste"
    },
    {
      id: 5,
      name: "Organic Compost",
      description: "Premium organic compost made from food waste",
      price: 99,
      originalPrice: 150,
      image: "/api/placeholder/300/200",
      category: "home-garden",
      rating: 4.8,
      reviews: 156,
      seller: "Waste to Wealth Collective",
      location: "Chennai",
      inStock: true,
      sustainable: true,
      materials: ["Food Waste", "Garden Waste"],
      impact: "Composted 5kg organic waste"
    },
    {
      id: 6,
      name: "Recycled Glass Vases",
      description: "Artistic vases crafted from recycled glass bottles",
      price: 399,
      originalPrice: 599,
      image: "/api/placeholder/300/200",
      category: "home-garden",
      rating: 4.5,
      reviews: 78,
      seller: "Glass Art Collective",
      location: "Jaipur",
      inStock: true,
      sustainable: true,
      materials: ["Recycled Glass", "Natural Colors"],
      impact: "Recycled 1.5kg glass waste"
    }
  ];

  const categories = [
    { id: "all", name: "All Products", icon: <ShoppingBag className="h-4 w-4" /> },
    { id: "home-garden", name: "Home & Garden", icon: <Package className="h-4 w-4" /> },
    { id: "fashion", name: "Fashion & Accessories", icon: <Heart className="h-4 w-4" /> },
    { id: "electronics", name: "Electronics", icon: <Zap className="h-4 w-4" /> },
    { id: "stationery", name: "Stationery", icon: <Edit className="h-4 w-4" /> }
  ];

  const eprServices = [
    {
      id: 1,
      title: "Plastic EPR Compliance",
      description: "Complete plastic waste collection and recycling compliance",
      price: "₹2,50,000",
      duration: "Annual",
      coverage: "Pan-India",
      features: [
        "Collection network setup",
        "Recycling certificates",
        "Monthly reporting",
        "Regulatory compliance"
      ],
      clients: 45,
      wasteHandled: "2,500 tonnes"
    },
    {
      id: 2,
      title: "E-Waste EPR Solutions",
      description: "Comprehensive e-waste management and compliance services",
      price: "₹3,75,000",
      duration: "Annual",
      coverage: "Major Cities",
      features: [
        "Authorized collection centers",
        "Safe dismantling",
        "Certificate generation",
        "Impact tracking"
      ],
      clients: 32,
      wasteHandled: "850 tonnes"
    },
    {
      id: 3,
      title: "Packaging EPR Services",
      description: "Multi-material packaging waste management solutions",
      price: "₹1,80,000",
      duration: "Annual",
      coverage: "Regional",
      features: [
        "Multi-stream collection",
        "Sorting & processing",
        "Compliance documentation",
        "Quarterly audits"
      ],
      clients: 67,
      wasteHandled: "4,200 tonnes"
    }
  ];

  const impactStats = [
    { label: "Total Products Sold", value: "25,847", icon: <ShoppingBag className="h-5 w-5" /> },
    { label: "NGOs Empowered", value: "156", icon: <Users className="h-5 w-5" /> },
    { label: "Waste Diverted", value: "340 tonnes", icon: <Recycle className="h-5 w-5" /> },
    { label: "CO₂ Avoided", value: "125 tCO₂", icon: <Leaf className="h-5 w-5" /> }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-secondary overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              <Recycle className="h-4 w-4 mr-2" />
              Circular Economy Marketplace
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Where Waste Becomes
              <span className="block bg-gradient-primary bg-clip-text text-transparent">
                Wonderful Products
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Discover unique products made by NGOs from recycled materials. Support circular economy 
              while empowering communities and reducing environmental impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                <ShoppingBag className="h-5 w-5 mr-2" />
                Shop Sustainable
              </Button>
              <Button variant="outline" size="lg">
                <Users className="h-5 w-5 mr-2" />
                Join as NGO Seller
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float" style={{ animationDelay: "1s" }}>
          <div className="p-3 bg-success/10 rounded-full backdrop-blur-sm">
            <Leaf className="h-6 w-6 text-success" />
          </div>
        </div>
        <div className="absolute top-32 right-16 animate-float" style={{ animationDelay: "2s" }}>
          <div className="p-3 bg-primary/10 rounded-full backdrop-blur-sm">
            <Recycle className="h-6 w-6 text-primary" />
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => (
              <Card key={index} className="text-center shadow-medium border-0">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <div className="text-primary">
                        {stat.icon}
                      </div>
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Marketplace */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-12">
              <TabsTrigger value="products" className="flex items-center">
                <ShoppingBag className="h-4 w-4 mr-2" />
                Products
              </TabsTrigger>
              <TabsTrigger value="ngo-portal" className="flex items-center">
                <Users className="h-4 w-4 mr-2" />
                NGO Portal
              </TabsTrigger>
              <TabsTrigger value="epr-services" className="flex items-center">
                <Building2 className="h-4 w-4 mr-2" />
                B2B Services
              </TabsTrigger>
              <TabsTrigger value="impact" className="flex items-center">
                <Target className="h-4 w-4 mr-2" />
                Impact
              </TabsTrigger>
            </TabsList>

            {/* Products Tab */}
            <TabsContent value="products" className="space-y-8">
              {/* Search and Filters */}
              <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                <div className="flex flex-col sm:flex-row gap-4 flex-1">
                  <div className="relative flex-1 max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search sustainable products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={sortBy} onValueChange={setSortBy}>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Sort by" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="featured">Featured</SelectItem>
                      <SelectItem value="price-low">Price: Low to High</SelectItem>
                      <SelectItem value="price-high">Price: High to Low</SelectItem>
                      <SelectItem value="rating">Highest Rated</SelectItem>
                      <SelectItem value="newest">Newest First</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Category Sidebar */}
                <div className="lg:col-span-1">
                  <CategoryFilter 
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                  />
                </div>

                {/* Products Grid */}
                <div className="lg:col-span-3">
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                  
                  {filteredProducts.length === 0 && (
                    <div className="text-center py-12">
                      <ShoppingBag className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">No products found</h3>
                      <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
                    </div>
                  )}
                </div>
              </div>
            </TabsContent>

            {/* NGO Portal Tab */}
            <TabsContent value="ngo-portal">
              <NGOSellerPortal />
            </TabsContent>

            {/* EPR Services Tab */}
            <TabsContent value="epr-services">
              <EPRServicesSection services={eprServices} />
            </TabsContent>

            {/* Impact Tab */}
            <TabsContent value="impact" className="space-y-8">
              <div className="text-center max-w-3xl mx-auto mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-4">Marketplace Impact</h2>
                <p className="text-lg text-muted-foreground">
                  See how our circular marketplace is creating positive environmental and social impact
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Leaf className="h-5 w-5 mr-2 text-success" />
                      Environmental Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Plastic Waste Diverted</span>
                        <span className="font-medium">156 tonnes</span>
                      </div>
                      <Progress value={78} className="h-2" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Textile Waste Recycled</span>
                        <span className="font-medium">89 tonnes</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">E-Waste Processed</span>
                        <span className="font-medium">34 tonnes</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Organic Waste Composted</span>
                        <span className="font-medium">245 tonnes</span>
                      </div>
                      <Progress value={92} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card className="shadow-medium border-0">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="h-5 w-5 mr-2 text-accent" />
                      Social Impact
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-primary/10 rounded-lg">
                        <div className="text-2xl font-bold text-primary">156</div>
                        <div className="text-sm text-muted-foreground">NGOs Onboarded</div>
                      </div>
                      <div className="text-center p-4 bg-success/10 rounded-lg">
                        <div className="text-2xl font-bold text-success">₹18.5L</div>
                        <div className="text-sm text-muted-foreground">Revenue Generated</div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Average Income Increase</span>
                        <Badge variant="default">+250%</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Jobs Created</span>
                        <Badge variant="default">1,240</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Training Programs Completed</span>
                        <Badge variant="default">89</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm">Microloans Disbursed</span>
                        <Badge variant="default">₹45L</Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Impact Certificates */}
              <Card className="shadow-medium border-0">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-accent" />
                    Impact Certificates & Credits
                  </CardTitle>
                  <CardDescription>
                    Verified impact tokens and carbon credits generated through marketplace activities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center p-6 border border-border rounded-lg">
                      <FileCheck className="h-8 w-8 text-primary mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">2,847</div>
                      <div className="text-sm text-muted-foreground mb-3">Recycling Certificates</div>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                    
                    <div className="text-center p-6 border border-border rounded-lg">
                      <Leaf className="h-8 w-8 text-success mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">125</div>
                      <div className="text-sm text-muted-foreground mb-3">Carbon Credits (tCO₂)</div>
                      <Button variant="outline" size="sm">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </div>
                    
                    <div className="text-center p-6 border border-border rounded-lg">
                      <Target className="h-8 w-8 text-accent mx-auto mb-3" />
                      <div className="text-2xl font-bold text-foreground mb-1">₹8.5L</div>
                      <div className="text-sm text-muted-foreground mb-3">Impact Credit Value</div>
                      <Button variant="outline" size="sm">
                        <TrendingUp className="h-4 w-4 mr-2" />
                        Trade Credits
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CircularMarketplace;
