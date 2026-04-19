"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "ABOUT", href: "#about" },
  { name: "PROJECT", href: "#project" },
  { name: "SERVICES", href: "#services" },
  { name: "OUR TEAM", href: "#team" },
  { name: "MEDIA CENTER", href: "#media" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle scroll (lock when menu open)
  useEffect(() => {
    const handleScroll = () => {
      if (!isMobileMenuOpen) {
        setIsScrolled(window.scrollY > 20);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobileMenuOpen]);

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-3 md:px-12",
        isMobileMenuOpen
          ? "bg-white shadow-sm"
          : isScrolled
            ? "bg-white/90 backdrop-blur-md shadow-sm"
            : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 md:w-10 md:h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg md:text-xl group-hover:scale-110 transition-transform">
            K
          </div>
          <span
            className={cn(
              "font-semibold text-base md:text-lg tracking-wider",
              isScrolled || isMobileMenuOpen
                ? "text-primary"
                : "text-primary md:text-white"
            )}
          >
            FARM
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-widest transition-colors hover:opacity-70",
                isScrolled || isMobileMenuOpen
                  ? "text-primary"
                  : "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link
            href="#contact"
            className={cn(
              "flex items-center gap-2 px-5 py-2 rounded-full border transition-all hover:bg-white hover:text-primary group",
              isScrolled || isMobileMenuOpen
                ? "border-primary text-primary"
                : "border-white text-white"
            )}
          >
            <span className="text-xs font-bold tracking-widest">
              CONTACT US
            </span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg",
            isScrolled || isMobileMenuOpen
              ? "text-primary"
              : "text-primary md:text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-[999] flex flex-col p-6 will-change-transform"
            style={{ backgroundColor: "#ffffff" }}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-10">
              <button
                className="text-primary p-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={link.href}
                    className="text-primary text-xl sm:text-2xl font-bold tracking-wide hover:pl-2 transition-all"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Contact */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link
                  href="#contact"
                  className="mt-6 flex items-center justify-between text-primary border-b border-primary/20 pb-3"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-lg font-medium tracking-wide">
                    CONTACT US
                  </span>
                  <ArrowRight />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}