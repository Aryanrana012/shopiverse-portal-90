
import React from "react";
import { Link } from "react-router-dom";
import { Product } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <Card className="overflow-hidden group h-full flex flex-col transition-all duration-300 hover:shadow-md">
      <Link to={`/product/${product.id}`} className="flex flex-col flex-grow">
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardContent className="p-4 flex-grow">
          <div className="flex justify-between mb-2">
            <h3 className="font-medium text-gray-800 line-clamp-1">
              {product.name}
            </h3>
          </div>
          <p className="text-sm text-gray-500 mb-2 line-clamp-1">
            {product.category}
          </p>
          <p className="text-lg font-semibold text-blue-600">
            ${product.price.toFixed(2)}
          </p>
        </CardContent>
      </Link>
      <CardFooter className="border-t p-4">
        <Button
          className="w-full gap-2"
          onClick={handleAddToCart}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
