"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "about" },
  { name: "Past Events", href: "past-events" },
  { name: "Socials", href: "socials" },
  { name: "Modules", href: "services" },
  { name: "Sponsors", href: "sponsors" },
  { name: "Contact Us", href: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="absolute left-0 right-0 top-0 z-50 bg-transparent">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold uppercase text-white">
              Logo
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map(({ name, href }, index) => (
                <Link
                  key={index}
                  href={`#${href}`}
                  onClick={(e) => {
                    e.preventDefault();
                    setIsOpen(false);
                    setTimeout(() => {
                      const element = document.getElementById(href);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="rounded-md px-3 py-2 text-sm font-medium uppercase text-white hover:text-gray-300"
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 bg-black bg-opacity-75 px-2 pb-3 pt-2 sm:px-3">
            {navItems.map(({ name, href }, index) => (
              <Link
                key={index}
                href={`#${href}`}
                className="block rounded-md px-3 py-2 text-base font-medium uppercase text-white hover:text-gray-300"
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setTimeout(() => {
                    const element = document.getElementById(href);
                    element?.scrollIntoView({ behavior: "smooth" });
                  }, 300);
                }}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}