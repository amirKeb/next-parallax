"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const logos = [
  { src: "/images/logos/solana-logo.png", alt: "Solana Logo" },
  { src: "/images/logos/arweave-logo.png", alt: "Arweave Logo" },
  { src: "/images/logos/bittensor-logo.png", alt: "Bittensor Logo" },
  { src: "/images/logos/red-logo.png", alt: "Red Logo", isSquare: true },
  {
    src: "/images/logos/telegram-logo.png",
    alt: "Telegram Logo",
    isSquare: true,
  },
];

const LogosSlider = () => {
  const controls = useAnimationControls();
  const [shouldSlide, setShouldSlide] = useState(false);

  const handleViewportEnter = () => {
    controls.start("show");
    const timer = setTimeout(() => {
      setShouldSlide(true);
    }, 800);
    return () => clearTimeout(timer);
  };

  const handleViewportLeave = () => {
    controls.start("hidden");
    setShouldSlide(false);
  };

  return (
    <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-20 py-10 flex flex-col items-center justify-center mt-20 gap-10 overflow-hidden">
      <motion.h3
        className="text-center text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-medium leading-none"
        initial="hidden"
        animate={controls}
        onViewportEnter={handleViewportEnter}
        onViewportLeave={handleViewportLeave}
        viewport={{ amount: 0.25, once: false }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        Projects integrated into the Arrakis AI Ecosystem
      </motion.h3>
      <motion.div
        className="w-full max-w-[100vw] flex flex-wrap items-center justify-evenly gap-x-12 gap-y-8"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.2,
              staggerChildren: 0,
            },
          },
        }}
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.src}
            className="shrink-0"
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, ease: "linear" },
              },
            }}
            animate={shouldSlide ? { x: -30 } : { x: 0 }}
            transition={
              shouldSlide
                ? {
                  duration: 0.8,
                  ease: "linear",
                }
                : { duration: 0 }
            }
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.isSquare ? 160 : 280}
              height={logo.isSquare ? 160 : 100}
              sizes="(max-width: 640px) 100px, 160px"
              className="max-h-14 sm:max-h-16 md:max-h-20 lg:max-h-18 w-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogosSlider;
