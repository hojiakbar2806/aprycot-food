"use client";

import { Star } from "lucide-react";
import React, { useState } from "react";
import { cn } from "@/utils/utils";

interface RatingProps {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
}

const Rating: React.FC<RatingProps> = ({
  value,
  onChange,
  readonly = false,
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const handleMouseEnter = (newValue: number) => {
    if (!readonly) {
      setHoverValue(newValue);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverValue(null);
    }
  };

  const handleClick = (ratingValue: number) => {
    if (onChange) {
      onChange(ratingValue);
    }
  };

  return (
    <div className="flex items-center gap-0 ">
      {Array.from({ length: 5 }, (_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={ratingValue}>
            <input
              type="radio"
              value={ratingValue}
              checked={value === ratingValue}
              onChange={() => handleClick(ratingValue)}
              className="hidden"
              disabled={readonly}
            />
            <Star
              key={index}
              className={cn("group-hover:text-white w-4 h-4 transition cursor-pointer", {
                "group-hover:fill-white text-primary fill-primary":
                  ratingValue <= (hoverValue || value),
                "text-primary": ratingValue > (hoverValue || value),
              })}
              onMouseEnter={() => handleMouseEnter(ratingValue)}
              onMouseLeave={handleMouseLeave}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
