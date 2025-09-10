import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter } from "lucide-react";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <Card className="shadow-medium border-0 sticky top-4">
      <CardHeader>
        <CardTitle className="flex items-center text-lg">
          <Filter className="h-5 w-5 mr-2" />
          Categories
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={selectedCategory === category.id ? "default" : "ghost"}
            className="w-full justify-start"
            onClick={() => onCategoryChange(category.id)}
          >
            {category.icon}
            <span className="ml-2">{category.name}</span>
            {selectedCategory === category.id && (
              <Badge variant="secondary" className="ml-auto">
                Active
              </Badge>
            )}
          </Button>
        ))}
        
        {/* Filter by Features */}
        <div className="pt-4 border-t border-border">
          <h4 className="font-medium text-sm text-foreground mb-3">Filter by Features</h4>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
              Sustainable Materials
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
              High Impact
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
              Local NGO
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              <div className="w-2 h-2 bg-warning rounded-full mr-3"></div>
              Quick Delivery
            </Button>
          </div>
        </div>

        {/* Price Range */}
        <div className="pt-4 border-t border-border">
          <h4 className="font-medium text-sm text-foreground mb-3">Price Range</h4>
          <div className="space-y-2">
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              Under ₹200
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              ₹200 - ₹500
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              ₹500 - ₹1000
            </Button>
            <Button variant="ghost" size="sm" className="w-full justify-start text-sm">
              Above ₹1000
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CategoryFilter;
