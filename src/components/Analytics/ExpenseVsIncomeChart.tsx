"use client";

import {
  Bar,
  BarChart,
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
  },
  {
    name: "Feb",
    income: 4200,
    expenses: 3800,
  },
  {
    name: "Mar",
    income: 4500,
    expenses: 3200,
  },
  {
    name: "Apr",
    income: 4100,
    expenses: 3500,
  },
  {
    name: "May",
    income: 4800,
    expenses: 3900,
  },
  {
    name: "Jun",
    income: 5000,
    expenses: 3700,
  },
];

export function ExpenseVsIncomeChart() {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="name" />
          <YAxis tickFormatter={(value) => `$${value}`} width={80} />
          <Tooltip
            formatter={(value) => [`$${value}`, undefined]}
            contentStyle={{ borderRadius: "8px" }}
          />
          <Legend />
          <Bar
            dataKey="income"
            name="Income"
            fill="#10b981"
            radius={[4, 4, 0, 0]}
          />
          <Bar
            dataKey="expenses"
            name="Expenses"
            fill="#f43f5e"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
