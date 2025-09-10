import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Play, 
  Award, 
  Users,
  Clock,
  Star,
  CheckCircle,
  FileText,
  Video,
  Headphones,
  Download,
  Share2,
  Bookmark,
  TrendingUp,
  Globe,
  Leaf,
  Recycle,
  Lightbulb,
  Target,
  ArrowRight
} from "lucide-react";

const EducationHub = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const learningModules = [
    {
      id: 1,
      title: "Plastic Recycling Basics",
      description: "Learn the fundamentals of plastic waste sorting and recycling",
      category: "Basics",
      duration: "15 min",
      type: "interactive",
      difficulty: "Beginner",
      completed: true,
      rating: 4.8,
      enrollments: 1245,
      icon: <Recycle className="h-5 w-5" />,
      topics: ["Plastic Types", "Sorting Methods", "Recycling Process", "Common Mistakes"]
    },
    {
      id: 2,
      title: "E-Waste Management",
      description: "Safe disposal and recycling of electronic devices",
      category: "Advanced",
      duration: "25 min",
      type: "video",
      difficulty: "Intermediate",
      completed: false,
      rating: 4.9,
      enrollments: 856,
      icon: <Lightbulb className="h-5 w-5" />,
      topics: ["Device Preparation", "Data Security", "Component Recovery", "Toxic Materials"]
    },
    {
      id: 3,
      title: "Composting at Home",
      description: "Turn organic waste into valuable compost for your garden",
      category: "DIY",
      duration: "20 min",
      type: "guide",
      difficulty: "Beginner",
      completed: false,
      rating: 4.7,
      enrollments: 2103,
      icon: <Leaf className="h-5 w-5" />,
      topics: ["Setup Process", "Material Selection", "Maintenance", "Troubleshooting"]
    },
    {
      id: 4,
      title: "Zero Waste Lifestyle",
      description: "Comprehensive guide to reducing waste in daily life",
      category: "Lifestyle",
      duration: "45 min",
      type: "course",
      difficulty: "Advanced",
      completed: false,
      rating: 4.6,
      enrollments: 734,
      icon: <Target className="h-5 w-5" />,
      topics: ["Waste Audit", "Sustainable Alternatives", "Shopping Tips", "Community Action"]
    }
  ];

  const quickTips = [
    {
      id: 1,
      title: "Check Recycling Symbols",
      description: "Always look for recycling symbols before disposing items",
      category: "Sorting",
      readTime: "2 min",
      helpful: 156
    },
    {
      id: 2,
      title: "Clean Before Recycling",
      description: "Rinse containers to remove food residue for better recycling",
      category: "Preparation",
      readTime: "1 min",
      helpful: 203
    },
    {
      id: 3,
      title: "Battery Disposal",
      description: "Never throw batteries in regular trash - find specialized centers",
      category: "Safety",
      readTime: "3 min",
      helpful: 189
    },
    {
      id: 4,
      title: "Textile Recycling",
      description: "Donate or recycle old clothes instead of throwing them away",
      category: "Textiles",
      readTime: "2 min",
      helpful: 142
    }
  ];

  const achievements = [
    { title: "Knowledge Seeker", description: "Completed 5 learning modules", progress: 80, icon: "🎓" },
    { title: "Eco Expert", description: "Achieved 90% score in all quizzes", progress: 60, icon: "🌟" },
    { title: "Community Teacher", description: "Shared knowledge with 10 people", progress: 30, icon: "👨‍🏫" }
  ];

  const categories = [
    { id: "all", name: "All Topics", count: learningModules.length },
    { id: "Basics", name: "Basics", count: 1 },
    { id: "Advanced", name: "Advanced", count: 1 },
    { id: "DIY", name: "DIY Projects", count: 1 },
    { id: "Lifestyle", name: "Lifestyle", count: 1 }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success/10 text-success';
      case 'Intermediate': return 'bg-warning/10 text-warning';
      case 'Advanced': return 'bg-destructive/10 text-destructive';
      default: return 'bg-muted text-muted-foreground';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'video': return <Video className="h-4 w-4" />;
      case 'interactive': return <Play className="h-4 w-4" />;
      case 'guide': return <FileText className="h-4 w-4" />;
      case 'course': return <BookOpen className="h-4 w-4" />;
      default: return <FileText className="h-4 w-4" />;
    }
  };

  const filteredModules = selectedCategory === "all" 
    ? learningModules 
    : learningModules.filter(module => module.category === selectedCategory);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="shadow-medium border-0 bg-gradient-to-r from-primary/5 to-success/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <BookOpen className="h-6 w-6 text-primary" />
                Education Hub
              </h1>
              <p className="text-muted-foreground">
                Learn sustainable practices and become a recycling expert
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">3/12</div>
              <div className="text-sm text-muted-foreground">Modules Completed</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="modules" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="modules">Learning Modules</TabsTrigger>
          <TabsTrigger value="tips">Quick Tips</TabsTrigger>
          <TabsTrigger value="achievements">Achievements</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        {/* Learning Modules */}
        <TabsContent value="modules" className="space-y-6">
          {/* Category Filter */}
          <Card className="shadow-medium border-0">
            <CardContent className="p-4">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category.id)}
                    className="flex items-center gap-2"
                  >
                    {category.name}
                    <Badge variant="secondary" className="ml-1">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Modules Grid */}
          <div className="grid gap-6 md:grid-cols-2">
            {filteredModules.map((module) => (
              <Card key={module.id} className="shadow-medium border-0 hover:shadow-strong transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      {module.icon}
                    </div>
                    <div className="flex items-center gap-2">
                      {module.completed && (
                        <Badge className="bg-success/10 text-success">
                          <CheckCircle className="h-3 w-3 mr-1" />
                          Completed
                        </Badge>
                      )}
                      <Badge className={getDifficultyColor(module.difficulty)}>
                        {module.difficulty}
                      </Badge>
                    </div>
                  </div>
                  
                  <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{module.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      {getTypeIcon(module.type)}
                      <span className="capitalize">{module.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {module.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      {module.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {module.enrollments}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-1">
                      {module.topics.map((topic, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2">
                    <Button className="flex-1">
                      {module.completed ? "Review" : "Start Learning"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                    <Button variant="outline" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Quick Tips */}
        <TabsContent value="tips" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            {quickTips.map((tip) => (
              <Card key={tip.id} className="shadow-medium border-0">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Badge variant="outline">{tip.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Clock className="h-4 w-4" />
                      {tip.readTime}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{tip.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tip.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <TrendingUp className="h-4 w-4" />
                      {tip.helpful} found helpful
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4" />
                      </Button>
                      <Button size="sm">Read More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Achievements */}
        <TabsContent value="achievements" className="space-y-4">
          <div className="grid gap-4">
            {achievements.map((achievement, index) => (
              <Card key={index} className="shadow-medium border-0">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{achievement.icon}</div>
                    <div className="flex-1">
                      <h3 className="font-semibold mb-1">{achievement.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{achievement.description}</p>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{achievement.progress}%</span>
                        </div>
                        <Progress value={achievement.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Community */}
        <TabsContent value="community" className="space-y-4">
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Learning Community
              </CardTitle>
              <CardDescription>Connect with fellow eco-warriors and share knowledge</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-3">
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-primary">12.5K</div>
                  <div className="text-sm text-muted-foreground">Active Learners</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-success">8.9K</div>
                  <div className="text-sm text-muted-foreground">Tips Shared</div>
                </div>
                <div className="text-center p-4 bg-muted/30 rounded-lg">
                  <div className="text-2xl font-bold text-warning">156</div>
                  <div className="text-sm text-muted-foreground">Expert Contributors</div>
                </div>
              </div>
              
              <div className="flex gap-2 justify-center">
                <Button>
                  <Users className="h-4 w-4 mr-2" />
                  Join Community
                </Button>
                <Button variant="outline">
                  <Share2 className="h-4 w-4 mr-2" />
                  Share Knowledge
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default EducationHub;
