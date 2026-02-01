"use client";
import React, { useEffect, useState } from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

function ClientSidePage() {
  const [product, setProduct] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json();
      // console.log("Products fetched:", data);
      setProduct(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* <h1>Product Data:</h1>
      <pre>{JSON.stringify(product, null, 2)}</pre> */}
      <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
        {product.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {product.map((prod) => (
              <div
                key={prod.id}
                className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300 hover:scale-105 transform"
              >
                <img
                  src={prod.image}
                  alt={prod.title}
                  className="w-full h-64 object-cover rounded-t-lg mb-4"
                />
                <h1 className="text-xl font-semibold text-gray-800 mb-2">
                  {prod.title}
                </h1>
                <p className="text-gray-600 text-sm mb-4">{prod.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-gray-800 font-bold text-xl">
                    ${prod.price}
                  </p>
                  <div className="flex items-center space-x-1">
                    <span className="text-yellow-500 text-lg">
                      {" "}
                      🌟 {prod.rating.rate}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-600 text-lg">Loading ...</div>
        )}
      </div>
    </div>
  );
}

export default ClientSidePage;
