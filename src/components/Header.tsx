import { useEffect, useState } from 'react'
import { Activity, AlarmClock, Toolbox, Users } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { Skeleton } from '@/components/ui/skeleton'

export function Header() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <header className="p-5 flex items-center bg-zinc-950 shadow-lg border-zinc-800 border-b-[0.5px]">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo do Projeto */}
          <div className="flex items-center gap-2">
            {isLoading ? (
              <Skeleton className="h-7 w-48 bg-zinc-800" />
            ) : (
              <span className="text-xl font-bold text-slate-300 cursor-pointer">
                Power Meter Ótico
              </span>
            )}
          </div>

          {/* Navbar */}
          {isLoading ? (
            <div className="ml-auto flex gap-2">
              <Skeleton className="h-10 w-36 bg-zinc-800" />
              <Skeleton className="h-10 w-40 bg-zinc-800" />
              <Skeleton className="h-10 w-32 bg-zinc-800" />
              <Skeleton className="h-10 w-24 bg-zinc-800" />
            </div>
          ) : (
            <NavigationMenu className="ml-auto">
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="
                      group
                      flex flex-row items-center justify-start gap-2
                      text-left cursor-pointer
                      text-slate-300
                      bg-transparent
                      focus:bg-transparent
                      data-active:bg-transparent
                      hover:text-slate-100
                      hover:bg-zinc-800
                      transition-colors
                      px-3 py-2 rounded-md
                    "
                  >
                    <Activity
                      className="
                          text-slate-300
                          group-hover:text-slate-100
                          transition-colors
                        "
                      size={20}
                    />
                    Monitoramento
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="
                      group
                      flex flex-row items-center justify-start gap-2
                      text-left cursor-pointer
                      text-slate-300
                      bg-transparent
                      hover:bg-zinc-800
                      focus:bg-transparent
                      data-active:bg-transparent
                      hover:text-slate-100
                      transition-colors
                      px-3 py-2 rounded-md
                    "
                  >
                    <AlarmClock
                      className="
                          text-slate-300
                          group-hover:text-slate-100
                          transition-colors
                        "
                      size={20}
                    />
                    Alarmes e Avisos
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="
                      group
                      flex flex-row items-center justify-start gap-2
                      text-left cursor-pointer
                      text-slate-300
                      bg-transparent
                      hover:bg-zinc-800
                      focus:bg-transparent
                      data-active:bg-transparent
                      hover:text-slate-100
                      transition-colors
                      px-3 py-2 rounded-md
                    "
                  >
                    <Toolbox
                      className="
                          text-slate-300
                          group-hover:text-slate-100
                          transition-colors
                        "
                      size={20}
                    />
                    Calibração
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    className="
                      group
                      flex flex-row items-center justify-start gap-2
                      text-left cursor-pointer
                      text-slate-300
                      bg-transparent
                      hover:bg-zinc-800
                      focus:bg-transparent
                      data-active:bg-transparent
                      hover:text-slate-100
                      transition-colors
                      px-3 py-2 rounded-md
                    "
                  >
                    <Users
                      className="
                          text-slate-300
                          group-hover:text-slate-100
                          transition-colors
                        "
                      size={20}
                    />
                    Sobre
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
