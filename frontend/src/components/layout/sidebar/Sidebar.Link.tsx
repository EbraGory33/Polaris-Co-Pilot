import React from "react";
import Link from "next/link";
import Image from "next/image";
import { sidebar_links } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const SidebarLink = () => {
  const pathname = usePathname();

  return (
    <>
      {sidebar_links.map((link) => {
        const isActive =
          pathname === link.route || pathname.startsWith(`${link.route}/`);

        return (
          <Link
            href={link.route}
            key={link.label}
            className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
          >
            <div className="relative size-6">
              <Image
                src={link.img_url}
                alt={link.label}
                fill
                className={cn("icon", {
                  "brightness-[3] invert-0": isActive,
                })}
              />
            </div>
            <p className={cn("sidebar-label", { "!text-white": isActive })}>
              {link.label}
            </p>
          </Link>
        );
      })}
    </>
  );
};

export default SidebarLink;
