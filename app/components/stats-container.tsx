"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { number: "1,873", label: "LLM models" },
  { number: "$326,734", label: "Paid to data scientists" },
  { number: "6,557", label: "Developers" },
];

export default function StatsContainer({
  shouldExit = false,
}: {
  shouldExit?: boolean;
}) {
  const controls = useAnimationControls();
  const isInViewRef = useRef(false);

  useEffect(() => {
    if (shouldExit) {
      controls.start("exit");
      return;
    }

    controls.start(isInViewRef.current ? "show" : "hidden");
  }, [shouldExit, controls]);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 lg:gap-8"
      initial="hidden"
      animate={controls}
      onViewportEnter={() => {
        isInViewRef.current = true;
        if (!shouldExit) controls.start("show");
      }}
      onViewportLeave={() => {
        isInViewRef.current = false;
        if (!shouldExit) controls.start("hidden");
      }}
      viewport={{ amount: 0.35, once: false }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.15,
            staggerChildren: 0.05,
          },
        },
        exit: {
          opacity: 0,
          transition: {
            staggerChildren: 0.12,
            staggerDirection: -1,
          },
        },
      }}
    >
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </motion.div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center stat-card w-full md:w-1/3"
      variants={{
        hidden: { opacity: 0, y: 80 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.75 },
        },
        exit: {
          opacity: 0,
          y: -80,
          transition: { duration: 0.25, ease: "easeInOut" },
        },
      }}
    >
      <p className="text-2xl sm:text-5xl lg:text-[64px] font-bold">{number}</p>
      <p className="text-sm sm:text-lg lg:text-xl font-normal">{label}</p>
    </motion.div>
  );
}
