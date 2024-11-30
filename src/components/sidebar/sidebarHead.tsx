import Image from "next/image";
import React from "react";
import pizzaIcon from "../../../public/icons/pizza.svg";
import { ChevronRight } from "lucide-react";

type SidebarHeadProps = {
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
};

const SidebarHead: React.FC<SidebarHeadProps> = ({ expanded, setExpanded }) => {
  return (
    <div className="relative w-full h-[var(--sidebar-head-height)] border-b grid place-items-center transition">
      <div
        className="flex justify-start items-center relative font-playfair font-bold w-16 h-16 bg-[#EA6A12]/30 rounded-[50%] text-5xl transition
          group-data-[expanded=false]:pl-4 
          group-data-[expanded=true]:w-[120px]"
      >
        <span className="sidebar-animate-main-logo">A</span>
        <span className="sidebar-animate-logo">P</span>
        <span className="sidebar-animate-logo">R</span>
        <span className="sidebar-animate-logo">Y</span>
        <span className="sidebar-animate-logo">C</span>
        <Image
          className="sidebar-animate-pizza"
          src={pizzaIcon}
          alt="pizza-icon"
          width={18}
          height={18}
        />
        <span className="sidebar-animate-logo">T</span>
      </div>

      <button
        className="absolute transition p-[2px] bg-white shadow-md rounded-full top-1/2 translate-y-[-50%] -right-4
          group-data-[expanded=true]:rotate-180"
        onClick={() => setExpanded(!expanded)}
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default SidebarHead;
