import React from "react";

type SidebarLinkWrapperProps = {
  children: React.ReactNode;
};

const SidebarLinkWrapper: React.FC<SidebarLinkWrapperProps> = ({
  children,
}) => {
  return (
    <ul
      className="w-full flex flex-col items-center gap-4 p-2 transition
    group-data-[expanded=false]:p-8"
    >
      {children}
    </ul>
  );
};

export default SidebarLinkWrapper;
