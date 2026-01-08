import { useEffect, useState } from 'react'
import { Github, Mail, MapPin, Code2 } from 'lucide-react'
import { Skeleton } from '@/components/ui/skeleton'
import { Separator } from '@/components/ui/separator'

export function Footer() {
  const [isLoading, setIsLoading] = useState(true)
  const currentYear = new Date().getFullYear()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <footer className="p-5 bg-zinc-950 shadow-lg border-zinc-800 border-t-[0.5px]">
      <div className="container mx-auto">
        {isLoading ? (
          // Skeleton do Footer
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-48 bg-zinc-800" />
              <div className="flex gap-3">
                <Skeleton className="h-9 w-9 rounded-md bg-zinc-800" />
                <Skeleton className="h-9 w-9 rounded-md bg-zinc-800" />
                <Skeleton className="h-9 w-9 rounded-md bg-zinc-800" />
              </div>
            </div>
            <Separator className="bg-zinc-800" />
            <div className="flex items-center justify-between">
              <Skeleton className="h-4 w-64 bg-zinc-800" />
              <Skeleton className="h-4 w-40 bg-zinc-800" />
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Linha Principal */}
            <div className="flex items-center justify-between">
              {/* Info do Projeto */}
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold text-slate-300">
                  Power Meter Ótico
                </span>
                <span className="text-sm text-slate-400">
                  Sistema de Monitoramento de Potência Óptica
                </span>
              </div>

              {/* Links Sociais */}
              <div className="flex gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    p-2 rounded-md
                    text-slate-400
                    bg-transparent
                    hover:bg-zinc-800
                    hover:text-slate-100
                    transition-colors
                    cursor-pointer
                  "
                  aria-label="GitHub"
                >
                  <Github
                    size={20}
                    className="
                      text-slate-400
                      group-hover:text-slate-100
                      transition-colors
                    "
                  />
                </a>
              </div>
            </div>

            <Separator className="bg-zinc-800" />
          </div>
        )}
      </div>
    </footer>
  )
}

export default Footer
