"use client";

import React from "react";
import { motion } from "framer-motion";

export function QualityProducts() {
  return (
    <section className="py-24 px-6 md:px-24 bg-secondary overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <div className="reveal-mask mb-8">
          <motion.h2
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
            className="text-primary text-4xl md:text-6xl font-bold"
          >
            Quality Products
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-primary/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </motion.p>
      </div>
    </section>
  );
}
