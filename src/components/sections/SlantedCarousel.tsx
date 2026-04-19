"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const clients = [
  {
    id: 1,
    name: "Client 1",
    location: "Dubai, United Arab Emirates",
    image: "/images/client_one_img.png",
  },
  {
    id: 2,
    name: "Client 2",
    location: "Paris, France",
    image: "/images/client_two_img.png",
  },
  {
    id: 3,
    name: "Client 3",
    location: "New York, USA",
    image: "/images/client_three_img.png",
  },
];

export function SlantedCarousel() {
  const [active, setActive] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section ref={containerRef} className="py-24 bg-white overflow-hidden">
      <div className="flex flex-col items-center">

        {/* Carousel */}
        <div className="relative flex items-center justify-start md:justify-center gap-4 md:gap-12 px-6 md:px-12 overflow-x-auto no-scrollbar w-full pb-12 snap-x snap-mandatory">

          {clients.map((client, index) => {
            const isActive = index === active;

            return (
              <motion.div
                key={client.id}
                onClick={() => setActive(index)}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={cn(
                  "relative flex-shrink-0 cursor-pointer transition-all duration-700 ease-in-out",
                  isActive
                    ? "w-[200px] sm:w-[260px] md:w-[320px] scale-100"
                    : "w-[140px] sm:w-[180px] md:w-[220px] scale-90 opacity-60"
                )}
              >
                <div
                  className={cn(
                    "relative aspect-[3/4] overflow-hidden clip-slanted",
                    isActive ? "shadow-2xl" : "shadow-lg"
                  )}
                >
                  <Image
                    src={client.image}
                    alt={client.name}
                    fill
                    priority={isActive}
                    sizes="(max-width: 640px) 140px, (max-width: 768px) 180px, (max-width: 1024px) 260px, 320px"
                    quality={75}
                    className="object-cover transition-transform duration-700 hover:scale-105 will-change-transform"
                  />

                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="bg-white/90 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                      >
                        <span className="text-primary text-[10px] font-bold tracking-tighter">
                          DRAG
                        </span>
                      </motion.div>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info */}
        <div className="mt-12 text-center h-24">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-primary text-2xl font-bold mb-1">
                {clients[active].name}
              </h3>
              <p className="text-primary/50 text-sm tracking-widest uppercase">
                {clients[active].location}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}