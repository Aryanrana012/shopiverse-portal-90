
import React from "react";
import { useCart } from "@/context/CartContext";
import CartItem from "./CartItem";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";
import { SheetClose } from "@/components/ui/sheet";

const Cart = () => {
  const { cart, clearCart, getCartTotal, getCartCount } = useCart();

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between border-b pb-4">
        <h2 className="text-lg font-semibold">Shopping Cart</h2>
        <span className="text-gray-500 text-sm">
          {getCartCount()} {getCartCount() === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="flex-grow overflow-auto py-4">
        {cart.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <ShoppingBag className="h-12 w-12 text-gray-300 mb-2" />
            <p className="text-gray-500 mb-4">Your cart is empty</p>
            <SheetClose asChild>
              <Button asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </SheetClose>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}
          </>
        )}
      </div>

      {cart.length > 0 && (
        <div className="border-t border-gray-200 py-4 space-y-4">
          <div className="flex justify-between text-base font-medium text-gray-900">
            <p>Subtotal</p>
            <p>${getCartTotal().toFixed(2)}</p>
          </div>
          <p className="text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="flex flex-col space-y-2">
            <SheetClose asChild>
              <Button asChild className="w-full">
                <Link to="/checkout">Checkout</Link>
              </Button>
            </SheetClose>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={clearCart}
            >
              Clear Cart
            </Button>
            <SheetClose asChild>
              <Button variant="link" asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </SheetClose>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
