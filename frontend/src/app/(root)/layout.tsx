// TODO: layout for main pages
"use client";

// import MobileNav from "@/components/MobileNav";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAuth } from "@/auth/hooks/useAuth";
import { useEffect } from "react";
import Navbar from "@/components/layout/navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen w-full font-inter">
      <aside className="sidebar">
        <Sidebar user={null} />
      </aside>
      <section className="main-section">
        <Navbar />
        <main className="flex-1">{children}</main>
      </section>
    </main>
  );
}
