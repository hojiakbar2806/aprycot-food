import Image from "next/image";
import React from "react";

type RightSectionHeaderProps = {
  title: string;
  path: string;
  withBtn?: boolean;
};

const RightSectionHeader: React.FC<RightSectionHeaderProps> = ({
  title,
  withBtn,
}) => {
  return (
    <div className="w-full flex justify-between py-8 border-b">
      <h1 className="text-4xl font-playfair font-bold">{title}</h1>
      {withBtn && (
        <button className="flex items-center gap-2">
          <span className="text-base">View All</span>
          <Image
            src="/icons/arrow-right.svg"
            alt="arrow-right"
            width={24}
            height={24}
          />
        </button>
      )}
    </div>
  );
};

export default RightSectionHeader;
