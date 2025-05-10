"use client";

import { Progress } from "antd";

const goals = [
  {
    name: "Emergency Fund",
    current: 8500,
    target: 10000,
    percentage: 85,
  },
  {
    name: "Vacation",
    current: 2200,
    target: 3000,
    percentage: 73,
  },
  {
    name: "New Car",
    current: 12000,
    target: 25000,
    percentage: 48,
  },
  {
    name: "Home Down Payment",
    current: 35000,
    target: 80000,
    percentage: 44,
  },
];

export function SavingsGoalsProgress() {
  return (
    <div className="space-y-6">
      {goals.map((goal) => (
        <div key={goal.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="text-sm font-medium">{goal.name}</span>
            <span className="text-sm text-muted-foreground">
              ${goal.current.toLocaleString()} / ${goal.target.toLocaleString()}
            </span>
          </div>
          <Progress className="h-2" />
          <p className="text-xs text-muted-foreground text-right">
            {goal.percentage}% complete
          </p>
        </div>
      ))}
    </div>
  );
}
