import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  FileCheck, 
  Users, 
  TrendingUp,
  CheckCircle,
  Globe,
  Recycle,
  Shield,
  Award,
  ArrowRight,
  Download,
  Eye
} from "lucide-react";

interface EPRService {
  id: number;
  title: string;
  description: string;
  price: string;
  duration: string;
  coverage: string;
  features: string[];
  clients: number;
  wasteHandled: string;
}

interface EPRServicesSectionProps {
  services: EPRService[];
}

const EPRServicesSection = ({ services }: EPRServicesSectionProps) => {
  const complianceStats = [
    { label: "Active Clients", value: "144", icon: <Building2 className="h-5 w-5" /> },
    { label: "Certificates Issued", value: "2,847", icon: <FileCheck className="h-5 w-5" /> },
    { label: "Waste Processed", value: "7,590 T", icon: <Recycle className="h-5 w-5" /> },
    { label: "Compliance Rate", value: "99.2%", icon: <Shield className="h-5 w-5" /> }
  ];

  const certificationTypes = [
    {
      type: "Plastic Waste Recycling",
      certificates: 1245,
      value: "₹18.5L",
      growth: "+23%"
    },
    {
      type: "E-Waste Processing", 
      certificates: 856,
      value: "₹12.3L",
      growth: "+18%"
    },
    {
      type: "Packaging Materials",
      certificates: 746,
      value: "₹9.8L",
      growth: "+31%"
    }
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <Badge variant="outline" className="mb-4">
          <Building2 className="h-4 w-4 mr-2" />
          B2B EPR Services
        </Badge>
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Extended Producer Responsibility Solutions
        </h2>
        <p className="text-lg text-muted-foreground">
          Comprehensive EPR compliance services for brands and manufacturers. 
          Get verified recycling certificates and meet regulatory requirements.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {complianceStats.map((stat, index) => (
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

      {/* EPR Service Packages */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <Card key={service.id} className="shadow-medium border-0 hover:shadow-strong transition-all duration-300">
            <CardHeader>
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline">{service.coverage}</Badge>
                <Badge variant="secondary">{service.duration}</Badge>
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base">{service.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Pricing */}
              <div className="text-center p-4 bg-primary/10 rounded-lg">
                <div className="text-2xl font-bold text-primary">{service.price}</div>
                <div className="text-sm text-muted-foreground">per {service.duration.toLowerCase()}</div>
              </div>

              {/* Features */}
              <div className="space-y-3">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-success" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="font-bold text-foreground">{service.clients}</div>
                  <div className="text-xs text-muted-foreground">Active Clients</div>
                </div>
                <div className="p-3 bg-muted/50 rounded-lg">
                  <div className="font-bold text-foreground">{service.wasteHandled}</div>
                  <div className="text-xs text-muted-foreground">Processed</div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2">
                <Button className="w-full">
                  Get Quote
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
                <Button variant="outline" className="w-full">
                  <Eye className="h-4 w-4 mr-2" />
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Certification Dashboard */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Award className="h-5 w-5 mr-2" />
            EPR Certification Dashboard
          </CardTitle>
          <CardDescription>
            Track your EPR certificates and compliance status across different waste streams
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {certificationTypes.map((cert, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold">{cert.type}</h4>
                  <Badge variant="default" className="text-xs">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    {cert.growth}
                  </Badge>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Certificates</span>
                    <span className="font-medium">{cert.certificates}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Total Value</span>
                    <span className="font-medium text-success">{cert.value}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full mt-3">
                  <Download className="h-4 w-4 mr-2" />
                  Download Certificates
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Process Flow */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle>EPR Compliance Process</CardTitle>
          <CardDescription>
            Our streamlined process ensures complete compliance with regulatory requirements
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-primary font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">Registration</h4>
              <p className="text-sm text-muted-foreground">
                Register your products and waste generation data
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-accent font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">Collection</h4>
              <p className="text-sm text-muted-foreground">
                Set up collection network through our NGO partners
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-success font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">Processing</h4>
              <p className="text-sm text-muted-foreground">
                Authorized recycling and processing of collected waste
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-warning font-bold">4</span>
              </div>
              <h4 className="font-semibold mb-2">Certification</h4>
              <p className="text-sm text-muted-foreground">
                Receive verified certificates and compliance reports
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Call to Action */}
      <Card className="shadow-strong border-0 bg-gradient-primary text-primary-foreground">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Ensure EPR Compliance?</h3>
          <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
            Join 144+ brands who trust us for their EPR compliance needs. 
            Get started with a free consultation and custom quote.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Download Brochure
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EPRServicesSection;
