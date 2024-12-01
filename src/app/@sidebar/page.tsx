"use client";

import SidebarHead from "@/components/sidebar/sidebarHead";
import SidebarLinkWrapper from "@/components/sidebar/sidebarLinkWrapper";
import SidebarLink from "@/components/sidebar/sidebarLink";
import {
  BookmarkMinus,
  Component,
  LayoutDashboard,
  PictureInPicture2,
  ShieldCheck,
  Users,
} from "lucide-react";
import React from "react";

export default function Sidebar() {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <aside className="group relative bg-white" data-expanded={expanded}>
      <SidebarHead setExpanded={setExpanded} expanded={expanded} />

      <SidebarLinkWrapper>
        <SidebarLink href="/" name="Dashboard" Icon={LayoutDashboard} />
        <SidebarLink href="/a" name="Authentication" Icon={ShieldCheck} />
        <SidebarLink href="/a" name="Users" Icon={Users} />
        <SidebarLink href="/a" name="Utilities" Icon={BookmarkMinus} />
        <SidebarLink href="/a" name="Components" Icon={Component} />
        <SidebarLink href="/a" name="Widgets" Icon={PictureInPicture2} />
      </SidebarLinkWrapper>
    </aside>
  );
}
