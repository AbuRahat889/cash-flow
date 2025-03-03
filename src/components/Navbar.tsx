



"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  HomeIcon,
  LayoutDashboard,
  ArrowDownToLine,
  ArrowUpFromLine,
  Wallet,
  Target,
  FileText,
  BarChart3,
  UserPlus,
  MessageSquare,
  Info,
} from "lucide-react"

import logo from '@/assets/logo.svg'

export default function Sidebar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/", icon: HomeIcon },
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Deposit", href: "/deposit", icon: ArrowDownToLine },
    { name: "Expense", href: "/expense", icon: ArrowUpFromLine },
    { name: "Budgets", href: "/budgets", icon: Wallet },
    { name: "Goal", href: "/goal", icon: Target },
    { name: "Report", href: "/report", icon: FileText },
    { name: "Analytics", href: "/analytics", icon: BarChart3 },
    { name: "Sign Up", href: "/signup", icon: UserPlus },
    { name: "Suggestion", href: "/suggestion", icon: MessageSquare },
    { name: "About Us", href: "/about", icon: Info },
  ]

  return (
    <aside className="w-64 bg-purple-800 text-white h-screen flex flex-col">
      <div className="p-5 border-b border-purple-700">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path
                d="M12 2L4 6V12C4 15.31 7.58 19.8 12 22C16.42 19.8 20 15.31 20 12V6L12 2Z"
                fill="white"
                opacity="0.2"
              />
              <path d="M12 4L6 7V12C6 14.21 8.79 17.8 12 19.5C15.21 17.8 18 14.21 18 12V7L12 4Z" fill="white" />
              <path
                d="M9 10.5L11 12.5L15 8.5"
                stroke="purple"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold">CASHFLOW</h1>
            <p className="text-xs text-purple-200">Personal Finance</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto py-4">
        <ul className="space-y-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={`flex items-center px-5 py-3 text-sm ${
                    isActive ? "bg-purple-900 border-l-4 border-white" : "hover:bg-purple-700"
                  }`}
                >
                  <item.icon className="w-5 h-5 mr-3" />
                  {item.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </aside>
  )
}

