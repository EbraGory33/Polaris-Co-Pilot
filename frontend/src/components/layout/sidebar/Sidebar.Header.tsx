import React from "react";
import Link from "next/link";
import Image from "next/image";

const SidebarHeader = () => {
  return (
    <Link href="/" className="sidebar-header">
      <Image
        src="/icons/logo.svg"
        width={34}
        height={34}
        alt="Logo"
        className="size-[24px] max-xl:size-14"
      />
      <p className="sidebar-logo">
        <span className="text-zinc-400 ">Polaris</span>
        <span className="text-zinc-500 "> Financial</span>
      </p>
    </Link>
  );
};

export default SidebarHeader;
