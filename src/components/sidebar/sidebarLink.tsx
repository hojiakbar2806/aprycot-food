import React from "react";
import {} from "lucide-react";
import Link from "next/link";

type SidebarLinkProps = {
  href: string;
  name: string;
  Icon: React.ElementType;
};

const SidebarLink: React.FC<SidebarLinkProps> = ({ href, name, Icon }) => {
  const activePage = href === window.location.pathname;

  return (
    <li className=" w-full">
      <Link
        href={href}
        data-active={activePage}
        className="grid hover:bg-[#EA6A12] hover:text-white p-2 rounded-full justify-center items-center transition
            group-data-[expanded=true]:grid-cols-[auto_1fr]
            group-data-[expanded=false]:grid-cols-[auto_0fr]
            group-data-[expanded=true]:gap-4
            group-data-[expanded=true]:px-5
            group-data-[expanded=false]:gap-0
            
            data-[active=true]:bg-[#EA6A12]
            data-[active=true]:text-white
            group-data-[expanded=false]:data-[active=true]:scale-125
        "
      >
        <Icon className="size-7" />
        <span className=" text-lg overflow-hidden">{name}</span>
      </Link>
    </li>
  );
};

export default SidebarLink;
