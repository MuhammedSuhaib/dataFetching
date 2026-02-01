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

function ClientSidePage() {
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
    <div
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
        <div className={styles.gridContainer}>
          {product.map((prod) => (
            <div
              key={prod.id}
              style={{
                backgroundColor: "white",
                borderRadius: "0.5rem",
                border: "#e5e7eb",
                padding: "24px",
              }}
            >
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
              <h1
                style={{
                  fontSize: "18px",
                  fontWeight: "600px",
                  color: "gray",
                  marginBottom: "8px",
                }}
              >
                {prod.title}
              </h1>
              <p
                style={{
                  marginBottom: "16px",
                  color: "gray",
                  fontSize: "14px",
                }}
              >
                {prod.description}
              </p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p
                  style={{
                    fontSize: "18px",
                    fontWeight: "600px",
                    color: "gray",
                  }}
                >
                  ${prod.price}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginInline: "4px",
                  }}
                >
                  <span style={{ color: "yellow", fontSize: "18px" }}>
                    {" "}
                    🌟 {prod.rating.rate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={{ fontSize: "18px", color: "#4b5563" }}>Loading ...</div>
      )}
    </div>
  );
}

export default ClientSidePage;
