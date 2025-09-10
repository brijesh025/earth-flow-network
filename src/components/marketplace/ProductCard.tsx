import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Heart, 
  ShoppingCart,
  MapPin,
  Leaf,
  Package
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  reviews: number;
  seller: string;
  location: string;
  inStock: boolean;
  sustainable: boolean;
  materials: string[];
  impact: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discount = product.originalPrice 
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <Card className="group hover:shadow-strong transition-all duration-300 border-0 shadow-medium overflow-hidden">
      <div className="relative">
        <div className="aspect-[4/3] bg-muted overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        {/* Overlay Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.sustainable && (
            <Badge className="bg-success text-success-foreground">
              <Leaf className="h-3 w-3 mr-1" />
              Sustainable
            </Badge>
          )}
          {discount > 0 && (
            <Badge variant="destructive">
              {discount}% OFF
            </Badge>
          )}
        </div>

        {/* Heart Icon */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 bg-background/80 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Heart className="h-4 w-4" />
        </Button>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary">Out of Stock</Badge>
          </div>
        )}
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          {/* Product Name */}
          <h3 className="font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>

          {/* Rating and Reviews */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium ml-1">{product.rating}</span>
            </div>
            <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
          </div>

          {/* Seller Info */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Package className="h-4 w-4" />
            <span>{product.seller}</span>
            <span>•</span>
            <MapPin className="h-4 w-4" />
            <span>{product.location}</span>
          </div>

          {/* Materials */}
          <div className="flex flex-wrap gap-1">
            {product.materials.slice(0, 2).map((material, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {material}
              </Badge>
            ))}
            {product.materials.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{product.materials.length - 2} more
              </Badge>
            )}
          </div>

          {/* Impact */}
          <div className="p-2 bg-success/10 rounded-lg">
            <p className="text-xs text-success font-medium">
              <Leaf className="h-3 w-3 inline mr-1" />
              {product.impact}
            </p>
          </div>

          {/* Price and Actions */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-foreground">₹{product.price}</span>
              {product.originalPrice && (
                <span className="text-sm text-muted-foreground line-through">
                  ₹{product.originalPrice}
                </span>
              )}
            </div>
            <Button 
              size="sm" 
              disabled={!product.inStock}
              className="min-w-[100px]"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              {product.inStock ? "Add to Cart" : "Notify Me"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
