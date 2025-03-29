
import React from "react";
import Navbar from "@/components/Navbar";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategorySection from "@/components/CategorySection";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingBag } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-blue-600 text-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-500 opacity-90"></div>
          <img
            src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80"
            alt="Hero background"
            className="w-full h-full object-cover object-center"
          />
        </div>
        
        <div className="container px-4 mx-auto relative z-10 py-20 md:py-32">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Discover the Latest Trends
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Shop our curated collection of premium products at unbeatable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                <Link to="/products">
                  <ShoppingBag className="mr-2 h-5 w-5" />
                  Shop Now
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link to="/products?category=featured">
                  Explore Featured
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <FeaturedProducts />

      {/* Categories Section */}
      <CategorySection />

      {/* Promotion Section */}
      <section className="py-12 bg-gray-900 text-white">
        <div className="container px-4 mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Limited Time Offer
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Sign up for our newsletter and get 10% off your first order!
          </p>
          <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 w-full rounded-md bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button type="submit" className="whitespace-nowrap">
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">ShopVerse</h3>
              <p className="text-gray-600">
                Your one-stop shop for all your needs. Quality products at affordable prices.
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Shop</h3>
              <ul className="space-y-2">
                <li><Link to="/products?category=clothing" className="text-gray-600 hover:text-blue-600">Clothing</Link></li>
                <li><Link to="/products?category=electronics" className="text-gray-600 hover:text-blue-600">Electronics</Link></li>
                <li><Link to="/products?category=accessories" className="text-gray-600 hover:text-blue-600">Accessories</Link></li>
                <li><Link to="/products?category=footwear" className="text-gray-600 hover:text-blue-600">Footwear</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-gray-600 hover:text-blue-600">About Us</Link></li>
                <li><Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link></li>
                <li><Link to="/terms" className="text-gray-600 hover:text-blue-600">Terms & Conditions</Link></li>
                <li><Link to="/privacy" className="text-gray-600 hover:text-blue-600">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Contact</h3>
              <address className="not-italic text-gray-600">
                <p>123 Shopping Street</p>
                <p>Retail City, RC 10001</p>
                <p className="mt-2">Email: info@shopverse.com</p>
                <p>Phone: (123) 456-7890</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} ShopVerse. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
