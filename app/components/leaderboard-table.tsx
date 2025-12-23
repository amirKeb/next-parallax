"use client";

import { motion, useAnimationControls } from "framer-motion";

type RankChange = "up" | "down" | "none";

interface LeaderboardRow {
  rank: number;
  rankChange: RankChange;
  modelName: string;
  average: number;
  arc: number;
  hellaswag: number;
  mmlu: number;
  truthfulqa: number;
  winogrande: number;
  gsm8k: number;
  usage: number;
}

const sampleData: LeaderboardRow[] = [
  {
    rank: 9,
    rankChange: "down",
    modelName: "meta-llama/Meta-Llama-3-70B-Instruct",
    average: 77.88,
    arc: 71.42,
    hellaswag: 85.69,
    mmlu: 80.06,
    truthfulqa: 61.81,
    winogrande: 82.87,
    gsm8k: 85.44,
    usage: 1190580,
  },
  {
    rank: 10,
    rankChange: "none",
    modelName: "saltlux/luxla-21.4b-alignment-v1.0",
    average: 77.74,
    arc: 77.47,
    hellaswag: 91.88,
    mmlu: 68.1,
    truthfulqa: 79.17,
    winogrande: 87.37,
    gsm8k: 71.11,
    usage: 1185234,
  },
  {
    rank: 11,
    rankChange: "up",
    modelName: "zhengr/MixTAO-7Bx2-MoE-v8.1",
    average: 77.5,
    arc: 73.81,
    hellaswag: 89.22,
    mmlu: 64.92,
    truthfulqa: 78.57,
    winogrande: 87.37,
    gsm8k: 71.11,
    usage: 1178889,
  },
  {
    rank: 12,
    rankChange: "down",
    modelName: "yunconglong/Truthful_DPO_TomGrc_Fusl...",
    average: 77.44,
    arc: 74.91,
    hellaswag: 89.3,
    mmlu: 64.67,
    truthfulqa: 78.02,
    winogrande: 88.24,
    gsm8k: 69.52,
    usage: 1177065,
  },
  {
    rank: 13,
    rankChange: "none",
    modelName: "JaeyeonKang/CCK_Asura_v1",
    average: 77.43,
    arc: 73.89,
    hellaswag: 89.07,
    mmlu: 75.44,
    truthfulqa: 71.75,
    winogrande: 86.35,
    gsm8k: 68.08,
    usage: 1170954,
  },
  {
    rank: 14,
    rankChange: "down",
    modelName: "fbigit/UNA-SimpleSmaug-34b-v1beta",
    average: 77.41,
    arc: 74.57,
    hellaswag: 86.74,
    mmlu: 76.68,
    truthfulqa: 70.17,
    winogrande: 83.82,
    gsm8k: 72.48,
    usage: 1162959,
  },
  {
    rank: 15,
    rankChange: "up",
    modelName: "TomGrc/FusionNet_34Bx2_MoE_v0.1",
    average: 77.38,
    arc: 73.72,
    hellaswag: 86.46,
    mmlu: 76.72,
    truthfulqa: 71.01,
    winogrande: 83.35,
    gsm8k: 73.01,
    usage: 1144223,
  },
  {
    rank: 16,
    rankChange: "none",
    modelName: "migtissera/Tess-72B-v1.5b",
    average: 77.3,
    arc: 71.25,
    hellaswag: 85.53,
    mmlu: 81.22,
    truthfulqa: 71.99,
    winogrande: 81.45,
    gsm8k: 76.95,
    usage: 1129110,
  },
];

function RankIcon({ change }: { change: RankChange }) {
  if (change === "up") {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-green-400"
      >
        <path
          d="M6 2L10 6H7V10H5V6H2L6 2Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  if (change === "down") {
    return (
      <svg
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-red-400"
      >
        <path
          d="M6 10L2 6H5V2H7V6H10L6 10Z"
          fill="currentColor"
        />
      </svg>
    );
  }
  return (
    <span className="text-gray-500 text-xs font-normal">—</span>
  );
}

function formatNumber(num: number): string {
  return num.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function formatUsage(num: number): string {
  return num.toLocaleString("en-US");
}

export default function LeaderboardTable() {
  const controls = useAnimationControls();

  return (
    <motion.div
      className="w-full max-w-[100vw] px-4 sm:px-8 md:px-20 py-10 flex flex-col items-center justify-center gap-8"
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
            delayChildren: 0.2,
            staggerChildren: 0,
          },
        },
      }}
      >
      <motion.div
        className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-2"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl 2xl:text-[64px] font-medium leading-none">
          LLM Leaderboard
        </h2>
        <button className="btn-outline whitespace-nowrap">
          Submit your model
        </button>
      </motion.div>

      <motion.p
        className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-4xl text-left w-full self-start"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        We evaluate LLMs on key benchmarks using the Eleuther AI, a framework
        to test LLMs on a large number of different evaluation tasks. The
        higher the score, the better the LLM.
      </motion.p>

      <motion.div
        className="w-full overflow-x-auto"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-gray-800">
              <th className="text-left py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                #
              </th>
              <th className="text-left py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                Model Name
              </th>
              <th className="text-right py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                Average
              </th>
              <th className="text-right py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                ARC
              </th>
              <th className="text-right py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                HellaSwag
              </th>
              <th className="text-right py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                MMLU
              </th>
              <th className="text-right py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                TruthfulQA
              </th>
              <th className="text-right py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                Winogrande
              </th>
              <th className="text-right py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                GSM8K
              </th>
              <th className="text-right py-4 px-3 sm:px-4 text-xs sm:text-sm font-medium text-gray-400">
                Usage
              </th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((row, index) => (
              <tr
                key={row.rank}
                className={`border-b border-gray-800/50 transition-colors ${
                  index % 2 === 0
                    ? "bg-[#C9D9FF14]"
                    : "bg-transparent"
                }`}
              >
                <td className="py-4 px-3 sm:px-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-base">{row.rank}</span>
                    <RankIcon change={row.rankChange} />
                  </div>
                </td>
                <td className="py-4 px-3 sm:px-4">
                  <span className="text-sm sm:text-base text-white truncate block max-w-[200px] sm:max-w-[300px] md:max-w-none">
                    {row.modelName}
                  </span>
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <span className="text-sm sm:text-base font-medium text-white">
                    {formatNumber(row.average)}
                  </span>
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <span className="text-sm sm:text-base text-gray-300">
                    {formatNumber(row.arc)}
                  </span>
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <span className="text-sm sm:text-base text-gray-300">
                    {formatNumber(row.hellaswag)}
                  </span>
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <span className="text-sm sm:text-base text-gray-300">
                    {formatNumber(row.mmlu)}
                  </span>
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <span className="text-sm sm:text-base text-gray-300">
                    {formatNumber(row.truthfulqa)}
                  </span>
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <span className="text-sm sm:text-base text-gray-300">
                    {formatNumber(row.winogrande)}
                  </span>
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <span className="text-sm sm:text-base text-gray-300">
                    {formatNumber(row.gsm8k)}
                  </span>
                </td>
                <td className="py-4 px-3 sm:px-4 text-right">
                  <span className="text-sm sm:text-base text-gray-300">
                    {formatUsage(row.usage)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <motion.div
        className="w-full flex justify-end mt-6"
        variants={{
          hidden: { opacity: 0, y: 50 },
          show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
        }}
      >
        <button className="btn-ghost flex items-center gap-2 group">
          View full leaderboard
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform group-hover:-translate-y-0.5"
          >
            <path
              d="M8 2L8 14M8 14L2 8M8 14L14 8"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </motion.div>
    </motion.div>
  );
}

