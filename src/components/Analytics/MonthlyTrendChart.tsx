"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "Jan",
    income: 4000,
    expenses: 3400,
    savings: 600,
  },
  {
    name: "Feb",
    income: 4200,
    expenses: 3800,
    savings: 400,
  },
  {
    name: "Mar",
    income: 4500,
    expenses: 3200,
    savings: 1300,
  },
  {
    name: "Apr",
    income: 4100,
    expenses: 3500,
    savings: 600,
  },
  {
    name: "May",
    income: 4800,
    expenses: 3900,
    savings: 900,
  },
  {
    name: "Jun",
    income: 5000,
    expenses: 3700,
    savings: 1300,
  },
];

export function MonthlyTrendChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#f43f5e" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#f43f5e" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${value}`} width={80} />
          <Tooltip
            formatter={(value) => [`$${value}`, undefined]}
            contentStyle={{ borderRadius: "8px" }}
          />
          <Legend />
          <Area
            type="monotone"
            dataKey="income"
            name="Income"
            stroke="#10b981"
            fillOpacity={1}
            fill="url(#colorIncome)"
          />
          <Area
            type="monotone"
            dataKey="expenses"
            name="Expenses"
            stroke="#f43f5e"
            fillOpacity={1}
            fill="url(#colorExpenses)"
          />
          <Area
            type="monotone"
            dataKey="savings"
            name="Savings"
            stroke="#0ea5e9"
            fillOpacity={1}
            fill="url(#colorSavings)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
