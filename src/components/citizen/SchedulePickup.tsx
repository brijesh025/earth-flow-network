import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { 
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Truck,
  Package,
  CheckCircle,
  AlertCircle,
  Phone,
  User,
  Home,
  Plus,
  Minus,
  Info
} from "lucide-react";
import { format } from "date-fns";

const SchedulePickup = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTimeSlot, setSelectedTimeSlot] = useState("");
  const [pickupType, setPickupType] = useState("");
  const [items, setItems] = useState([{ type: "", quantity: 1, description: "" }]);
  const [contactInfo, setContactInfo] = useState({
    name: "",
    phone: "",
    address: "",
    specialInstructions: ""
  });

  const timeSlots = [
    "9:00 AM - 11:00 AM",
    "11:00 AM - 1:00 PM", 
    "1:00 PM - 3:00 PM",
    "3:00 PM - 5:00 PM",
    "5:00 PM - 7:00 PM"
  ];

  const wasteTypes = [
    "Mixed Recyclables",
    "Electronics",
    "Organic Waste",
    "Bulk Items",
    "Hazardous Materials",
    "Paper & Cardboard",
    "Plastic & Glass",
    "Metal Items"
  ];

  const pickupTypes = [
    { value: "regular", label: "Regular Pickup", price: "Free", description: "Standard collection service" },
    { value: "express", label: "Express Pickup", price: "₹50", description: "Same-day or next-day pickup" },
    { value: "bulk", label: "Bulk Pickup", price: "₹100", description: "Large items or quantities" },
    { value: "hazardous", label: "Hazardous Waste", price: "₹150", description: "Special handling required" }
  ];

  const addItem = () => {
    setItems([...items, { type: "", quantity: 1, description: "" }]);
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateItem = (index: number, field: string, value: any) => {
    const updatedItems = items.map((item, i) => 
      i === index ? { ...item, [field]: value } : item
    );
    setItems(updatedItems);
  };

  const schedulePickup = () => {
    // Simulate pickup scheduling
    console.log("Scheduling pickup:", {
      date: selectedDate,
      timeSlot: selectedTimeSlot,
      type: pickupType,
      items,
      contact: contactInfo
    });
    alert("Pickup scheduled successfully! You'll receive a confirmation SMS.");
  };

  const isFormValid = () => {
    return selectedDate && selectedTimeSlot && pickupType && 
           contactInfo.name && contactInfo.phone && contactInfo.address &&
           items.every(item => item.type && item.quantity > 0);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="shadow-medium border-0 bg-gradient-to-r from-primary/5 to-success/5">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-2xl font-bold">Schedule Pickup</h1>
          </div>
          <p className="text-muted-foreground">
            Schedule a convenient time for waste collection from your location
          </p>
        </CardContent>
      </Card>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Left Column - Form */}
        <div className="space-y-6">
          {/* Date & Time Selection */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CalendarIcon className="h-5 w-5" />
                Select Date & Time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Pickup Date</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date()}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Time Slot</label>
                <Select value={selectedTimeSlot} onValueChange={setSelectedTimeSlot}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeSlots.map((slot) => (
                      <SelectItem key={slot} value={slot}>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          {slot}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Pickup Type */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Pickup Type
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {pickupTypes.map((type) => (
                  <div
                    key={type.value}
                    className={`p-3 border rounded-lg cursor-pointer transition-all ${
                      pickupType === type.value 
                        ? 'border-primary bg-primary/5' 
                        : 'border-border hover:border-primary/50'
                    }`}
                    onClick={() => setPickupType(type.value)}
                  >
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{type.label}</h3>
                      <Badge variant={type.price === "Free" ? "default" : "outline"}>
                        {type.price}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Items to Pickup */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5" />
                Items to Pickup
              </CardTitle>
              <CardDescription>
                Specify what items need to be collected
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {items.map((item, index) => (
                <div key={index} className="p-3 border rounded-lg space-y-3">
                  <div className="flex justify-between items-center">
                    <h4 className="font-medium">Item {index + 1}</h4>
                    {items.length > 1 && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => removeItem(index)}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  
                  <div className="grid gap-3 md:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium mb-1 block">Type</label>
                      <Select 
                        value={item.type} 
                        onValueChange={(value) => updateItem(index, 'type', value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select waste type" />
                        </SelectTrigger>
                        <SelectContent>
                          {wasteTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div>
                      <label className="text-sm font-medium mb-1 block">Quantity</label>
                      <Input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateItem(index, 'quantity', parseInt(e.target.value))}
                        placeholder="Quantity"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Description (Optional)</label>
                    <Input
                      value={item.description}
                      onChange={(e) => updateItem(index, 'description', e.target.value)}
                      placeholder="Additional details about the item"
                    />
                  </div>
                </div>
              ))}
              
              <Button
                variant="outline"
                onClick={addItem}
                className="w-full"
              >
                <Plus className="h-4 w-4 mr-2" />
                Add Another Item
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Contact & Summary */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Full Name</label>
                <Input
                  value={contactInfo.name}
                  onChange={(e) => setContactInfo({...contactInfo, name: e.target.value})}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Phone Number</label>
                <Input
                  type="tel"
                  value={contactInfo.phone}
                  onChange={(e) => setContactInfo({...contactInfo, phone: e.target.value})}
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Pickup Address</label>
                <Textarea
                  value={contactInfo.address}
                  onChange={(e) => setContactInfo({...contactInfo, address: e.target.value})}
                  placeholder="Enter complete pickup address"
                  rows={3}
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Special Instructions</label>
                <Textarea
                  value={contactInfo.specialInstructions}
                  onChange={(e) => setContactInfo({...contactInfo, specialInstructions: e.target.value})}
                  placeholder="Any special instructions for pickup (optional)"
                  rows={2}
                />
              </div>
            </CardContent>
          </Card>

          {/* Pickup Summary */}
          <Card className="shadow-medium border-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5" />
                Pickup Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date:</span>
                  <span className="text-sm font-medium">
                    {selectedDate ? format(selectedDate, "PPP") : "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Time:</span>
                  <span className="text-sm font-medium">
                    {selectedTimeSlot || "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Type:</span>
                  <span className="text-sm font-medium">
                    {pickupTypes.find(t => t.value === pickupType)?.label || "Not selected"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Items:</span>
                  <span className="text-sm font-medium">
                    {items.length} item(s)
                  </span>
                </div>
              </div>
              
              <div className="pt-3 border-t">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total Cost:</span>
                  <span className="text-lg font-bold text-primary">
                    {pickupTypes.find(t => t.value === pickupType)?.price || "₹0"}
                  </span>
                </div>
              </div>

              <div className="bg-muted/30 p-3 rounded-lg">
                <div className="flex items-start gap-2">
                  <Info className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <div className="text-xs text-muted-foreground">
                    <p>• Pickup confirmation will be sent via SMS</p>
                    <p>• Please ensure items are ready at scheduled time</p>
                    <p>• Contact support if you need to reschedule</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={schedulePickup}
                disabled={!isFormValid()}
                className="w-full"
                size="lg"
              >
                <Truck className="h-4 w-4 mr-2" />
                Schedule Pickup
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default SchedulePickup;
