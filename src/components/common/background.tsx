import Image from "next/image";
import React from "react";

const Background: React.FC = () => {
  return (
    <div className="w-full h-full fixed pointer-events-none z-0">
      <Image
        src="/images/ellipse-4.svg"
        alt="ellipse-1"
        width={1600}
        height={1600}
        className="w-1/2 h-1/2 absolute  top-0 right-0"
      />
      <Image
        src="/images/ellipse-4.svg"
        alt="ellipse-2"
        width={100}
        height={100}
        className="w-1/2 h-1/2 absolute  top-0 left-0"
      />
      <Image
        src="/images/ellipse-4.svg"
        alt="ellipse-3"
        width={1600}
        height={1600}
        className="  absolute  bottom-0 right-0"
      />
      <Image
        src="/images/ellipse-4.svg"
        alt="ellipse-4"
        width={100}
        height={100}
        className="w-1/2 h-1/2 absolute  bottom-0 left-0"
      />
    </div>
  );
};

export default Background;
