"use client";

import { motion, useAnimationControls } from "framer-motion";
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

  return (
    <div className="w-full max-w-[100vw] px-4 sm:px-8 md:px-20 py-10 flex flex-col items-center justify-center gap-10 overflow-hidden">
      <h2 className="text-center">
        Projects integrated into the Arrakis AI Ecosystem
      </h2>
      <motion.div
        className="w-full max-w-[100vw] flex flex-wrap items-center justify-evenly gap-x-12 gap-y-8"
        initial="hidden"
        animate={controls}
        onViewportEnter={() => controls.start("show")}
        onViewportLeave={() => controls.start("hidden")}
        viewport={{ amount: 0.25, once: false }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              delayChildren: 0.5,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {logos.map((logo) => (
          <motion.div
            key={logo.src}
            className="shrink-0"
            variants={{
              hidden: { opacity: 0, x: 400 },
              show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
            }}
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.isSquare ? 120 : 220}
              height={logo.isSquare ? 120 : 80}
              sizes="(max-width: 640px) 80px, 120px"
              className="max-h-10 sm:max-h-12 md:max-h-14 w-auto object-contain"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogosSlider;
