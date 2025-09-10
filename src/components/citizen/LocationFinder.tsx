import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Navigation, 
  Clock,
  Star,
  Phone,
  Car,
  Bike,
  PersonStanding,
  CheckCircle,
  AlertTriangle,
  Search,
  Filter,
  Route,
  Info
} from "lucide-react";

interface RecyclingCenter {
  id: number;
  name: string;
  address: string;
  distance: number;
  rating: number;
  openHours: string;
  acceptedItems: string[];
  phone: string;
  isOpen: boolean;
  waitTime: number;
  coordinates: { lat: number; lng: number };
  specialServices: string[];
}

const LocationFinder = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTransport, setSelectedTransport] = useState<'walking' | 'bike' | 'car'>('walking');
  const [filterType, setFilterType] = useState("all");
  
  const recyclingCenters: RecyclingCenter[] = [
    {
      id: 1,
      name: "Green Valley Recycling Hub",
      address: "123 Eco Street, Green Valley, Delhi 110001",
      distance: 0.8,
      rating: 4.8,
      openHours: "8:00 AM - 8:00 PM",
      acceptedItems: ["Plastic", "Glass", "Paper", "Electronics", "Metals"],
      phone: "+91 9876543210",
      isOpen: true,
      waitTime: 5,
      coordinates: { lat: 28.7041, lng: 77.1025 },
      specialServices: ["AI Sorting", "Instant Rewards", "Collection Service"]
    },
    {
      id: 2,
      name: "EcoWaste Collection Center",
      address: "456 Sustainability Road, Eco Park, Delhi 110002",
      distance: 1.2,
      rating: 4.6,
      openHours: "9:00 AM - 7:00 PM",
      acceptedItems: ["Organic", "Plastic", "Paper", "Textiles"],
      phone: "+91 9876543211",
      isOpen: true,
      waitTime: 12,
      coordinates: { lat: 28.6139, lng: 77.2090 },
      specialServices: ["Composting", "Textile Recycling"]
    },
    {
      id: 3,
      name: "Tech Waste Solutions",
      address: "789 Digital Avenue, Tech City, Delhi 110003",
      distance: 2.1,
      rating: 4.9,
      openHours: "10:00 AM - 6:00 PM",
      acceptedItems: ["Electronics", "Batteries", "Cables"],
      phone: "+91 9876543212",
      isOpen: false,
      waitTime: 0,
      coordinates: { lat: 28.5355, lng: 77.3910 },
      specialServices: ["Data Destruction", "Component Recovery", "Repair Services"]
    }
  ];

  const transportModes = [
    { id: 'walking', icon: <PersonStanding className="h-4 w-4" />, label: 'Walking', time: '12 min' },
    { id: 'bike', icon: <Bike className="h-4 w-4" />, label: 'Cycling', time: '5 min' },
    { id: 'car', icon: <Car className="h-4 w-4" />, label: 'Driving', time: '3 min' }
  ];

  const getDirections = (center: RecyclingCenter) => {
    // Simulate opening maps with directions
    console.log(`Getting directions to ${center.name}`);
    // In real app: window.open(`https://maps.google.com/?daddr=${center.coordinates.lat},${center.coordinates.lng}`);
  };

  const requestPickup = (center: RecyclingCenter) => {
    // Simulate pickup request
    console.log(`Requesting pickup from ${center.name}`);
  };

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card className="shadow-medium border-0">
        <CardHeader>
          <CardTitle className="flex items-center text-xl">
            <MapPin className="h-6 w-6 mr-2 text-primary" />
            Find Nearby Centers
          </CardTitle>
          <CardDescription>
            Discover recycling centers and waste collection points near you
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by location or postal code..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" size="icon">
              <Filter className="h-4 w-4" />
            </Button>
          </div>
          
          {/* Transport Mode Selection */}
          <div className="flex gap-2">
            {transportModes.map((mode) => (
              <Button
                key={mode.id}
                variant={selectedTransport === mode.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTransport(mode.id as 'walking' | 'bike' | 'car')}
                className="flex items-center gap-2"
              >
                {mode.icon}
                <span className="hidden sm:inline">{mode.label}</span>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Location Results */}
      <div className="grid gap-4">
        {recyclingCenters.map((center) => (
          <Card key={center.id} className="shadow-medium border-0 hover:shadow-strong transition-all duration-300">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-lg font-semibold">{center.name}</h3>
                    <Badge variant={center.isOpen ? "default" : "secondary"} className="text-xs">
                      {center.isOpen ? "Open" : "Closed"}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{center.address}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {center.distance} km away
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 fill-current text-yellow-400" />
                      {center.rating}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {center.openHours}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-primary mb-1">
                    {transportModes.find(m => m.id === selectedTransport)?.time}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {center.isOpen && center.waitTime > 0 && `${center.waitTime} min wait`}
                  </div>
                </div>
              </div>

              {/* Accepted Items */}
              <div className="mb-4">
                <h4 className="text-sm font-medium mb-2">Accepted Items:</h4>
                <div className="flex flex-wrap gap-1">
                  {center.acceptedItems.map((item) => (
                    <Badge key={item} variant="outline" className="text-xs">
                      {item}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Special Services */}
              {center.specialServices.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2">Special Services:</h4>
                  <div className="flex flex-wrap gap-1">
                    {center.specialServices.map((service) => (
                      <Badge key={service} className="text-xs bg-success/10 text-success">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {service}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-2 pt-4 border-t">
                <Button 
                  onClick={() => getDirections(center)}
                  className="flex-1"
                  disabled={!center.isOpen}
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  Get Directions
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => requestPickup(center)}
                  className="flex-1"
                >
                  <Route className="h-4 w-4 mr-2" />
                  Request Pickup
                </Button>
                <Button variant="outline" size="icon">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>

              {/* Wait Time Alert */}
              {center.isOpen && center.waitTime > 10 && (
                <div className="mt-3 p-3 bg-warning/10 rounded-lg flex items-center gap-2">
                  <AlertTriangle className="h-4 w-4 text-warning" />
                  <span className="text-sm text-warning">
                    High traffic - Consider visiting later or requesting pickup
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Map Integration Placeholder */}
      <Card className="shadow-medium border-0">
        <CardContent className="p-6">
          <div className="bg-muted/30 rounded-lg h-64 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 mx-auto mb-2 text-muted-foreground" />
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
              <p className="text-sm text-muted-foreground mt-1">
                Showing recycling centers, routes, and real-time availability
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LocationFinder;
