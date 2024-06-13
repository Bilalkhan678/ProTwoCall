// components/card/Card.tsx
import React from 'react';
import styles from './card.module.css';

import Link from 'next/link';
interface CardProps {
    id: number;
    title: string;
    content: string;
    image: string;
  }
  
  const Card: React.FC<CardProps> = ({ id, title, content,image }) => {
    return (
        <div className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.cardContent}>
        <img src={image} alt={title} className={styles.cardImage} /> {/* Add image here */}
          <h3>{title}</h3>
          <p>{content}</p>
          <Link href={`/cards/${id}`} legacyBehavior>
            <a className={styles.button}>Learn More</a>
          </Link>
        </div>
      </div>
    </div>
    );
  };
  
  export default Card;