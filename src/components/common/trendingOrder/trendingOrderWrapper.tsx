import React from "react";

type TrendingOrderWrapperProps = {
  children: React.ReactNode;
};

const TrendingOrderWrapper: React.FC<TrendingOrderWrapperProps> = ({
  children,
}) => {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(220px,1fr))] gap-20 pt-10 pr-20">
      {children}
    </div>
  );
};

export default TrendingOrderWrapper;
