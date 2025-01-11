import React, { useEffect, useState } from "react";
import styles from "../styles/StarrySky.module.css";

// Define the shape of a single star
interface Star {
  id: number;
  sizeClass: "small" | "medium" | "large";
  top: number;
  left: number;
}

// Define the props for the StarrySky component
interface StarrySkyProps {
  starCount?: number;
}

// Generate stars with random properties
const generateStars = (count: number): Star[] => {
  const stars: Star[] = [];
  for (let i = 0; i < count; i++) {
    const sizeClass = ["small", "medium", "large"][
      Math.floor(Math.random() * 3)
    ] as "small" | "medium" | "large";
    const top = Math.random() * 100; // Random top position (percentage)
    const left = Math.random() * 100; // Random left position (percentage)
    stars.push({ id: i, sizeClass, top, left });
  }
  return stars;
};

const StarrySky: React.FC<StarrySkyProps> = ({ starCount = 100 }) => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    setStars(generateStars(starCount));
  }, [starCount]);

  return (
    <div className={styles.starrySky}>
      {stars.map((star) => (
        <div
          key={star.id}
          className={`${styles.star} ${styles[star.sizeClass]}`}
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${Math.random() * 5}s`, // Random delay for each star
          }}
        />
      ))}
    </div>
  );
};

export default StarrySky;
