import React from "react";

type CategoryWrapperProps = {
  children: React.ReactNode;
};

const CategoryWrapper: React.FC<CategoryWrapperProps> = ({ children }) => {
  return (
    <div className="flex gap-4 justify-between p-8 pt-10 overflow-x-scroll snap-mandatory">
      {children}
    </div>
  );
};

export default CategoryWrapper;