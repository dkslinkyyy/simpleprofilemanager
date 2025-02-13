import React from "react";

interface CardProps {
  children: React.ReactNode;
  activeLink: string;
}

const Card: React.FC<CardProps> = ({ children, activeLink }) => {
  return <div className={`card ${activeLink}`}>{children}</div>;
};

export default Card;
