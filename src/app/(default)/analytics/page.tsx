import { PieChart, TrendingUp, Wallet } from "lucide-react";

// import {
//   div,
//   div,
//   p,
//   div,
//   h1,
// } from "@/components/ui/div";

import { ExpenseVsIncomeChart } from "@/components/Analytics/ExpenseVsIncomeChart";
import { ExpenseBreakdownChart } from "@/components/Analytics/ExpenseBreakdownChart";
import { MonthlyTrendChart } from "@/components/Analytics/MonthlyTrendChart";
import { SavingsGoalsProgress } from "@/components/Analytics/SavingsGoalsProgress";

// import { ExpenseBreakdownChart } from "./components/expense-breakdown-chart";
// import { ExpenseVsIncomeChart } from "./components/expense-vs-income-chart";
// import { MonthlyTrendChart } from "./components/monthly-trend-chart";
// import { SavingsGoalsProgress } from "./components/savings-goals-progress";

export default function AnalysisPage() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">
            Financial Analysis
          </h1>
        </div>

        <div className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className=" p-5 rounded-xl shadow-md">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h1 className="text-sm font-medium">Total Income</h1>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">$4,550.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+12.5%</span> from last month
                </p>
              </div>
            </div>

            <div className=" p-5 rounded-xl shadow-md">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h1 className="text-sm font-medium">Total Expenses</h1>
                <PieChart className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">$3,200.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-red-500">+8.2%</span> from last month
                </p>
              </div>
            </div>
            <div className=" p-5 rounded-xl shadow-md">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h1 className="text-sm font-medium">Net Savings</h1>
                <Wallet className="h-4 w-4 text-muted-foreground" />
              </div>
              <div>
                <div className="text-2xl font-bold">$1,350.00</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">+24.5%</span> from last month
                </p>
              </div>
            </div>
            <div className=" p-5 rounded-xl shadow-md">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h1 className="text-sm font-medium">Budget Utilization</h1>
                <div className="h-4 w-4 rounded-full bg-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">78.5%</div>
                <p className="text-xs text-muted-foreground">
                  <span className="text-green-500">-5.2%</span> from last month
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 ">
            <div className="lg:col-span-4 shadow-md p-3">
              <div>
                <h1>Income vs Expenses</h1>
                <p>Monthly comparison of your income and expenses</p>
              </div>
              <div className="px-2">
                <ExpenseVsIncomeChart />
              </div>
            </div>
            <div className="lg:col-span-3 shadow-md p-3">
              <div>
                <h1>Expense Breakdown</h1>
                <p>Where your money is going</p>
              </div>
              <div>
                <ExpenseBreakdownChart />
              </div>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <div className="lg:col-span-4 shadow-md p-3">
              <div>
                <h1>Monthly Trends</h1>
                <p>Your financial patterns over time</p>
              </div>
              <div className="px-2">
                <MonthlyTrendChart />
              </div>
            </div>
            <div className="lg:col-span-3 shadow-md p-3">
              <div>
                <h1>Savings Goals Progress</h1>
                <p>Track your progress toward financial goals</p>
              </div>
              <div>
                <SavingsGoalsProgress />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
