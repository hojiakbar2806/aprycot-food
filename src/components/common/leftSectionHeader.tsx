import Image from "next/image";
import React from "react";

type LeftSectionHeaderProps = {
  title: string;
  path: string;
};

const LeftSectionHeader: React.FC<LeftSectionHeaderProps> = ({ title }) => {
  return (
    <div className="flex-1 flex justify-between p-6">
      <h1 className="text-5xl font-playfair font-bold">{title}</h1>
      <button className="flex items-center gap-2">
        <span className="text-base">View All</span>
        <Image
          src="/icons/arrow-right.svg"
          alt="arrow-right"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default LeftSectionHeader;
