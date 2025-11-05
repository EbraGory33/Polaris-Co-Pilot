import React from "react";
import Image from "next/image";

const Navbar = () => {
  const date = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
  return (
    <header className="navbar">
      {/* Left side */}
      <div className="flex items-center gap-3">
        <h2 className="text-lg font-semibold text-[var(--color-text-primary)]">
          Hello Ebrahim
        </h2>
        <span className="text-sm text-[var(--color-text-secondary)]">
          {/* Sep 23, 2025 */}
          {date}
        </span>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-6">
        {/* Notification bell */}
        <button className="relative size-6">
          <Image src="/icons/bell.svg" alt="Notification Bell" fill />
          <span className="absolute right-0 top-0 h-2 w-2 rounded-full bg-green-500"></span>
        </button>

        {/* Search input */}
        <input
          type="text"
          placeholder="Search here"
          className="rounded-md border border-[var(--color-border)] px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-[var(--color-accent)]"
        />
      </div>
    </header>
  );
};

export default Navbar;
