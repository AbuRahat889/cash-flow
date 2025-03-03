



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
import Image from "next/image"

export default function Navbar() {
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

      <Image src={logo} alt="logo" width={500} height={500} />

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

