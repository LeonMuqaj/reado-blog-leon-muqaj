"use client";

import { usePathname, useRouter } from "next/navigation";
import "../styles/components/hero.scss";

import FinanceIcon from "../assets/icons/FinanceIcon";
import BusinessIcon from "../assets/icons/BusinessIcon";
import FoodIcon from "../assets/icons/FoodIcon";
import TravelIcon from "../assets/icons/TravelIcon";
import LifestyleIcon from "../assets/icons/LifestyleIcon";
import TechIcon from "../assets/icons/TechIcon";
import HeartIcon from "../assets/icons/HeartIcon";

interface HeroProps {
  selectedTypes: string[];
}

const Hero = ({ selectedTypes }: HeroProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const postTypes = [
    "Finance",
    "Health",
    "Business",
    "Food",
    "Travel",
    "Lifestyle",
    "Tech",
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "Finance":
        return <FinanceIcon />;
      case "Health":
        return <HeartIcon />;
      case "Business":
        return <BusinessIcon />;
      case "Food":
        return <FoodIcon />;
      case "Travel":
        return <TravelIcon />;
      case "Lifestyle":
        return <LifestyleIcon />;
      case "Tech":
        return <TechIcon />;
      default:
        return null;
    }
  };

  const handleTypeClick = (type: string) => {
    let newTypes: string[];

    if (type === "All") {
      newTypes = [];
    } else {
      if (selectedTypes.includes(type)) {
        newTypes = [];
      } else {
        newTypes = [type];
      }
    }

    if (newTypes.length === 0) {
      router.push(pathname);
    } else {
      router.push(`${pathname}?categories=${newTypes.join(",")}`);
    }
  };

  return (
    <div className="hero">
      <h1 className="hero__title">Blog</h1>
      <div className="hero__buttons">
        {postTypes.map((type) => (
          <button
            key={type}
            onClick={() => handleTypeClick(type)}
            className={`hero__button ${
              selectedTypes.includes(type) ? "hero__button--active" : ""
            }`}
            aria-pressed={selectedTypes.includes(type)}
          >
            {getIcon(type)}
            <span className="hero__button-text">{type.toUpperCase()}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;
