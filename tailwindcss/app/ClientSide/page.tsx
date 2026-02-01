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

export default function ClientSidePage() {
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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            'itemListElement': product.map((prod, index) => ({
              '@type': 'Product',
              'position': index + 1,
              'name': prod.title,
              'image': prod.image,
              'description': prod.description,
              'offers': {
                '@type': 'Offer',
                'price': prod.price,
                'priceCurrency': 'USD',
                'availability': 'https://schema.org/InStock'
              },
              'aggregateRating': {
                '@type': 'AggregateRating',
                'ratingValue': prod.rating?.rate || 0,
                'reviewCount': prod.rating?.count || 0
              }
            }))
          })
        }}
      />
      <main>
        {/* <h1>Product Data:</h1>
        <pre>{JSON.stringify(product, null, 2)}</pre> */}
        <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
          {product.length > 0 ? (
            <section aria-labelledby="products-heading">
              <h1 id="products-heading" className="sr-only">Product Listings</h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {product.map((prod) => (
                  <article
                    key={prod.id}
                    className="bg-white shadow-lg rounded-lg border border-gray-200 p-6 hover:shadow-xl transition duration-300 hover:scale-105 transform"
                  >
                    <figure>
                      <img
                        src={prod.image}
                        alt={prod.title}
                        className="w-full h-64 object-cover rounded-t-lg mb-4"
                      />
                    </figure>
                    <header>
                      <h2 className="text-xl font-semibold text-gray-800 mb-2">
                        {prod.title}
                      </h2>
                    </header>
                    <div className="text-gray-600 text-sm mb-4">
                      <p>{prod.description}</p>
                    </div>
                    <footer className="flex justify-between items-center">
                      <p className="text-gray-800 font-bold text-xl">
                        Price: ${prod.price}
                      </p>
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-500 text-lg">
                          Rating: 🌟 {prod.rating.rate}
                        </span>
                      </div>
                    </footer>
                  </article>
                ))}
              </div>
            </section>
          ) : (
            <div className="text-gray-600 text-lg">Loading ...</div>
          )}
        </div>
      </main>
    </>
  );
}
