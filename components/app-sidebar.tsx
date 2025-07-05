"use client"

import { Calendar, Code, FolderOpen, Github, Home, Mail, Trophy, TrendingUp, Sparkles } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const menuItems = [
  {
    title: "Overview",
    url: "#overview",
    icon: Home,
    gradient: "from-blue-500 to-purple-600",
  },
  {
    title: "Projects",
    url: "#projects",
    icon: FolderOpen,
    gradient: "from-green-500 to-teal-600",
  },
  {
    title: "Skills",
    url: "#skills",
    icon: Code,
    gradient: "from-orange-500 to-red-600",
  },
  {
    title: "Experience",
    url: "#experience",
    icon: Calendar,
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "Achievements",
    url: "#achievements",
    icon: Trophy,
    gradient: "from-yellow-500 to-orange-600",
  },
  {
    title: "Analytics",
    url: "#analytics",
    icon: TrendingUp,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Contact",
    url: "#contact",
    icon: Mail,
    gradient: "from-indigo-500 to-purple-600",
  },
]

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-white/10">
      <SidebarHeader className="border-b border-white/10">
        <div className="flex items-center gap-3 px-2 py-6">
          <div className="relative">
            <Avatar className="h-12 w-12 ring-2 ring-blue-500/50">
              <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Profile" />
              <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white font-bold">
                JD
              </AvatarFallback>
            </Avatar>
            <div className="absolute -top-1 -right-1 h-4 w-4 bg-green-500 rounded-full border-2 border-background animate-pulse" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              John Doe
            </span>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <Sparkles className="h-3 w-3" />
              Software Engineer
            </span>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Portfolio
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1">
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild className="group relative overflow-hidden">
                    <a
                      href={item.url}
                      className="flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-white/5"
                    >
                      <div className={`p-1.5 rounded-md bg-gradient-to-r ${item.gradient} shadow-lg`}>
                        <item.icon className="h-4 w-4 text-white" />
                      </div>
                      <span className="font-medium">{item.title}</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t border-white/10">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="group">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-3 py-3 rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-200"
              >
                <Github className="h-5 w-5" />
                <span className="font-medium">GitHub Profile</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  )
}
