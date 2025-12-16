import React from "react";

export default function StatsContainer() {
  const stats = [
    {
      number: "1,873",
      label: "LLM models",
    },
    {
      number: "$326,734",
      label: "Paid to data scientists",
    },
    {
      number: "6,557",
      label: "Developers",
    },
  ];

  return (
    <div className="flex flex-row items-center justify-center gap-8">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex flex-col items-center justify-center stat-card w-1/3 rounded-[91px]">
      <p className="text-[64px] font-bold">{number}</p>
      <p className="text-xl font-normal">{label}</p>
    </div>
  );
}
