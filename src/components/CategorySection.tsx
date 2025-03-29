
import React from "react";
import { Link } from "react-router-dom";
import { getCategories } from "@/lib/products";

const CategorySection = () => {
  const categories = getCategories();
  
  const getCategoryImage = (category: string) => {
    switch (category) {
      case "clothing":
        return "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "electronics":
        return "https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "accessories":
        return "https://images.unsplash.com/photo-1584917865442-de89df41a97a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      case "footwear":
        return "https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
      default:
        return "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/products?category=${category}`}
              className="group relative overflow-hidden rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-square relative">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 z-10"></div>
                <img
                  src={getCategoryImage(category)}
                  alt={category}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <h3 className="text-white text-xl font-bold capitalize">
                    {category}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
