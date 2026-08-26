"use client";

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { financialHealth } from "@/lib/data/financials";

const seriesColors = {
  revenue: "#1eabe6",
  netProfit: "#8ea0b3",
  tangibleNetworth: "#0a2540",
};

export function FinancialChart() {
  return (
    <div className="h-[420px] w-full border border-brand-line bg-white p-6">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={[...financialHealth]} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
          <CartesianGrid stroke="#E2E8F0" vertical={false} />
          <XAxis dataKey="year" tick={{ fill: "#4B5A6B", fontSize: 12 }} axisLine={{ stroke: "#E2E8F0" }} tickLine={false} />
          <YAxis
            tick={{ fill: "#4B5A6B", fontSize: 12 }}
            axisLine={false}
            tickLine={false}
            tickFormatter={(v) => `₹${v}Cr`}
          />
          <Tooltip
            formatter={(value, name) => [`₹${value} Cr`, name]}
            contentStyle={{ borderRadius: 12, border: "1px solid #E2E8F0", fontSize: 13 }}
          />
          <Legend wrapperStyle={{ fontSize: 13, paddingTop: 12 }} />
          <Bar dataKey="revenue" name="Revenue" fill={seriesColors.revenue} radius={[0, 0, 0, 0]} />
          <Bar dataKey="netProfit" name="Net Profit" fill={seriesColors.netProfit} radius={[0, 0, 0, 0]} />
          <Bar dataKey="tangibleNetworth" name="Tangible Networth" fill={seriesColors.tangibleNetworth} radius={[0, 0, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
