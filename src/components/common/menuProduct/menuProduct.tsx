import React from "react";

type MenuProductWrapperProps = {
  children: React.ReactNode;
};

const MenuProductWrapper: React.FC<MenuProductWrapperProps> = ({
  children,
}) => {
  return (
    <div className="flex justify-between gap-6 pt-14 pb-2 overflow-x-auto">
      {children}
    </div>
  );
};

export default MenuProductWrapper;
