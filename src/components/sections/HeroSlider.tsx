"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "From Our Farms\nTo Your Hands",
    subtitle: "Welcome to Our Farms",
    image: "/images/hero.jpg",
  },
  {
    id: 2,
    title: "From Our Farms\nTo Your Hands",
    subtitle: "Welcome to Our Farms",
    image: "/images/hero_small_img.jpg",
  },
  {
    id: 3,
    title: "Fresh Harvest\nEvery Day",
    subtitle: "Excellence in Agriculture",
    image: "/images/client_two_img.png",
  },
];

const AUTOPLAY_DURATION = 6000;

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + 100 / (AUTOPLAY_DURATION / 100);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].image}
            alt="slide"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-75"
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-6 md:px-24">
        <div className="max-w-4xl">

          <motion.p
            key={`subtitle-${current}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white/80 text-sm md:text-lg tracking-[0.3em] mb-4 uppercase"
          >
            {slides[current].subtitle}
          </motion.p>

          <motion.h1
            key={`title-${current}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className="text-white text-5xl md:text-8xl font-bold leading-tight whitespace-pre-line"
          >
            {slides[current].title}
          </motion.h1>

        </div>
      </div>

      {/* Bottom Left Control */}
      <div className="absolute bottom-12 left-6 md:left-24 z-20 flex items-center gap-8">

        {/* Square Thumbnail */}
        <div
          onClick={nextSlide}
          className="relative w-24 h-24 cursor-pointer"
        >
          {/* Border frame */}
          <div className="absolute inset-0 border border-white/40" />

          {/* Corner accent */}
          <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-white" />

          {/* Image */}
          <Image
            src={slides[current].image}
            alt="slide"
            fill
            sizes="96px"
            className="object-cover p-1"
          />

          {/* Next label */}
          <div className="absolute bottom-1 left-2 text-white text-xs tracking-widest">
            Next
          </div>
        </div>

        {/* SQUARE PAGINATION (1 → 3) */}
        <div className="flex items-center gap-3">

          {slides.slice(0, 3).map((_, index) => {
            const isActive = current === index;

            return (
              <div
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-10 h-10 flex items-center justify-center border cursor-pointer transition-all duration-300
            ${isActive
                    ? "border-white text-white"
                    : "border-white/30 text-white/40"
                  }`}
              >
                <span className="text-xs font-semibold">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            );
          })}

        </div>

      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
    </section>
  );
}