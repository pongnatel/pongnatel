import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, GitBranch, Star, Users } from "lucide-react"

const stats = [
  {
    title: "Projects Completed",
    value: "24",
    icon: Code,
    change: "+3 this month",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    title: "GitHub Repositories",
    value: "42",
    icon: GitBranch,
    change: "+5 this month",
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    title: "GitHub Stars",
    value: "1.2k",
    icon: Star,
    change: "+127 this month",
    gradient: "from-yellow-500 to-orange-500",
    bgGradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    title: "Collaborations",
    value: "18",
    icon: Users,
    change: "+2 this month",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
  },
]

export function OverviewStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={stat.title}
          className={`card-hover glass-effect border-white/10 bg-gradient-to-br ${stat.bgGradient} animate-fade-in`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-white/80">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.gradient} shadow-lg`}>
              <stat.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
            <p className="text-xs text-green-400 font-medium">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
