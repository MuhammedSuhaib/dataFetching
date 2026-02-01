"use client";
import React, { useEffect, useState } from "react";
import styles from "./client.module.css";
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
      <main
        style={{
          display: "flex",
          color: "black",
          padding: "16px",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f3f4f6",
        }}
      >
        {product.length > 0 ? (
          <section aria-labelledby="products-heading">
            <h1 id="products-heading" className="sr-only">Product Listings</h1>
            <div className={styles.gridContainer}>
              {product.map((prod) => (
                <article
                  key={prod.id}
                  style={{
                    backgroundColor: "white",
                    borderRadius: "0.5rem",
                    border: "#e5e7eb",
                    padding: "24px",
                  }}
                >
                  <figure>
                    <img
                      src={prod.image}
                      alt={prod.title}
                      style={{
                        height: "256px",
                        width: "256px",
                        borderRadius: "0.5rem",
                        objectFit: "cover",
                        marginBottom: "16px",
                      }}
                    />
                  </figure>
                  <header>
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: "600px",
                        color: "gray",
                        marginBottom: "8px",
                      }}
                    >
                      {prod.title}
                    </h2>
                  </header>
                  <div
                    style={{
                      marginBottom: "16px",
                      color: "gray",
                      fontSize: "14px",
                    }}
                  >
                    <p>{prod.description}</p>
                  </div>
                  <footer
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "18px",
                        fontWeight: "600px",
                        color: "gray",
                      }}
                    >
                      Price: ${prod.price}
                    </div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginInline: "4px",
                      }}
                    >
                      <span style={{ color: "yellow", fontSize: "18px" }}>
                        Rating: 🌟 {prod.rating.rate}
                      </span>
                    </div>
                  </footer>
                </article>
              ))}
            </div>
          </section>
        ) : (
          <div style={{ fontSize: "18px", color: "#4b5563" }}>Loading ...</div>
        )}
      </main>
    </>
  );
}
