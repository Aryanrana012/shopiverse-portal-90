
import React from "react";
import { CartItem as CartItemType } from "@/lib/types";
import { useCart } from "@/context/CartContext";
import { Trash, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncreaseQuantity = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <div className="flex py-4 border-b border-gray-200">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium text-gray-900">
          <h3 className="line-clamp-2">{product.name}</h3>
          <p className="ml-4">${product.price.toFixed(2)}</p>
        </div>
        <p className="mt-1 text-sm text-gray-500 line-clamp-1">{product.category}</p>
        
        <div className="flex items-center justify-between mt-2 text-sm">
          <div className="flex items-center border border-gray-300 rounded">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none" 
              onClick={handleDecreaseQuantity}
            >
              <Minus className="h-3 w-3" />
            </Button>
            <span className="px-2 py-1 min-w-[30px] text-center">
              {quantity}
            </span>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-none" 
              onClick={handleIncreaseQuantity}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">
              ${(product.price * quantity).toFixed(2)}
            </span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-red-500"
              onClick={() => removeFromCart(product.id)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
