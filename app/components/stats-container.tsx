"use client";

import { motion, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

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

  useEffect(() => {
    if (shouldExit) controls.start("exit");
  }, [shouldExit, controls]);

  return (
    <motion.div
      className="flex flex-col md:flex-row items-stretch justify-center gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-8"
      initial="hidden"
      animate={controls}
      onViewportEnter={() => controls.start("show")}
      viewport={{ amount: 0.35, once: true }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.1,
            delayChildren: 0.15,
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
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
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
        show: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -80, transition: { duration: 0.25 } },
      }}
    >
      <p className="text-4xl sm:text-5xl lg:text-[64px] font-bold">{number}</p>
      <p className="text-base sm:text-lg lg:text-xl font-normal">{label}</p>
    </motion.div>
  );
}
