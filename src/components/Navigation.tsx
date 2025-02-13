import React from "react";
import { Link } from "react-router-dom";

interface NavigationProps {
  activeLink: string;
  onLinkClick: (link: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeLink, onLinkClick }) => {
  return (
    <nav>
      <ul>
        <li>
          <Link
            to="/"
            onClick={() => onLinkClick("/")}
            className={activeLink === "/" ? "active-link" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            onClick={() => onLinkClick("/about")}
            className={activeLink === "/about" ? "active-link" : ""}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
