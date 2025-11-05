"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import {
  SidebarHeader,
  SidebarFooter,
  SidebarLink,
} from "@/components/layout/sidebar";
// import { PlaidLink } from "./PlaidLink";

const Sidebar = ({ user }: siderbar_props) => {
  return (
    <>
      <nav>
        <SidebarHeader />

        <div className="flex flex-col gap-2">
          <SidebarLink />
        </div>

        {/* <PlaidLink user={user} /> */}
      </nav>

      <SidebarFooter user={user} />
    </>
  );
};

export default Sidebar;
