"use client";

import { useEffect, useState } from "react";

interface Review {
  id: string;
  title: string;
  text: string;
  rating: number;
  reviewer: {
    name: string;
    title?: string;
  };
}

interface TrustpilotData {
  businessUnits: Array<{
    reviews: Array<{
      id: string;
      title: string;
      text: string;
      rating: number;
      reviewer: {
        name: string;
        title?: string;
      };
    }>;
    stats: {
      rating: {
        average: number;
      };
    };
  }>;
}

export default function TrustpilotReviews() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://api.trustpilot.com/v1/business-units/blockoutdigital.com/reviews?language=en&sort=-createdAt&pageSize=3"
        );
        const data = (await response.json()) as TrustpilotData;

        if (data.businessUnits && data.businessUnits[0]) {
          const unit = data.businessUnits[0];
          setReviews(unit.reviews.slice(0, 3));
          setRating(unit.stats.rating.average);
        }
      } catch (error) {
        console.error("Failed to fetch Trustpilot reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  const renderStars = (count: number) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} style={{ fontSize: "1rem", color: "var(--orange)" }}>
        {i < Math.floor(count) ? "★" : "☆"}
      </span>
    ));
  };

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <p style={{ color: "#fff" }}>Loading reviews...</p>
      </div>
    );
  }

  return (
    <>
      <div
        className="reveal"
        data-d="2"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "48px",
        }}
      >
        <div style={{ display: "flex", gap: "4px" }}>
          {renderStars(rating)}
        </div>
        <p style={{ fontSize: "1.05rem", fontWeight: "600", margin: 0, color: "#fff" }}>
          {rating.toFixed(1)} out of 5
        </p>
      </div>

      <div
        className="wrap"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "28px",
          marginTop: "48px",
        }}
      >
        {reviews.map((review, index) => (
          <div
            key={review.id}
            style={{
              background: "#fff",
              border: "3px solid var(--ink)",
              borderRadius: "var(--r-lg)",
              padding: "28px",
              boxShadow: "var(--shadow-pop)",
            }}
            className="reveal"
            data-d={index + 1}
          >
            <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
              {renderStars(review.rating)}
            </div>
            <p
              style={{
                margin: 0,
                marginBottom: "12px",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                minHeight: "60px",
                background: "var(--orange-tint)",
                padding: "12px",
                borderRadius: "8px",
                color: "var(--ink-soft)",
              }}
            >
              {review.text}
            </p>
            <p style={{ margin: 0, fontWeight: "600", fontSize: "0.9rem" }}>
              {review.reviewer.name}
            </p>
            {review.reviewer.title && (
              <p style={{ margin: "4px 0 0 0", fontSize: "0.85rem", color: "var(--ink-soft)" }}>
                {review.reviewer.title}
              </p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}
