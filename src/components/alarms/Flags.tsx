import { useStore } from '@tanstack/react-store'
import { FlagTriangleRight, Trash2, TriangleAlert } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Store } from '@tanstack/store'
import { Skeleton } from '../ui/skeleton'
import { Label } from '../ui/label'
import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
} from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface AlarmFlag {
  id: string
  parameter: string
  value: number | string
  unit: string
  type: 'ALTO' | 'BAIXO'
  timestamp: string
}

// Mock data store
export const flagsStore = new Store<Array<AlarmFlag>>([
  {
    id: '1',
    parameter: 'Temperatura (°C)',
    value: 33,
    unit: '°C',
    type: 'ALTO',
    timestamp: '2024-01-15 18:20:43',
  },
  {
    id: '2',
    parameter: 'Tensão (V)',
    value: 1.33,
    unit: 'V',
    type: 'BAIXO',
    timestamp: '2024-01-15 18:20:43',
  },
  {
    id: '3',
    parameter: 'Corrente (mA)',
    value: 32.04,
    unit: 'mA',
    type: 'ALTO',
    timestamp: '2024-01-15 18:20:43',
  },
])

// Mock de novos alarmes que podem surgir
const mockAlarms: Array<AlarmFlag> = [
  {
    id: '4',
    parameter: 'Temperatura (°C)',
    value: 13,
    unit: '°C',
    type: 'BAIXO',
    timestamp: new Date().toLocaleString('pt-BR'),
  },
  {
    id: '5',
    parameter: 'RX Power (dBm)',
    value: -8.0,
    unit: 'dBm',
    type: 'ALTO',
    timestamp: new Date().toLocaleString('pt-BR'),
  },
  {
    id: '6',
    parameter: 'RX Power (dBm)',
    value: -7.5,
    unit: 'dBm',
    type: 'ALTO',
    timestamp: new Date().toLocaleString('pt-BR'),
  },
]

export function Flags({ isLoading }: { isLoading: boolean }) {
  const flags = useStore(flagsStore)
  const [mockIndex, setMockIndex] = useState(0)
  const [animatingId, setAnimatingId] = useState<string | null>(null)

  useEffect(() => {
    if (isLoading) return

    const interval = setInterval(() => {
      if (mockIndex < mockAlarms.length) {
        const newAlarm = {
          ...mockAlarms[mockIndex],
          id: `${Date.now()}`,
          timestamp: new Date().toLocaleString('pt-BR'),
        }

        setAnimatingId(newAlarm.id)
        flagsStore.setState([...flagsStore.state, newAlarm])
        setMockIndex((prev) => prev + 1)

        setTimeout(() => setAnimatingId(null), 500)
      }
    }, 2000)

    return () => clearInterval(interval)
  }, [mockIndex, isLoading])

  const handleDelete = (id: string) => {
    flagsStore.setState(flagsStore.state.filter((flag) => flag.id !== id))
  }

  const getTypeStyles = (type: 'ALTO' | 'BAIXO') => {
    return type === 'ALTO'
      ? 'bg-red-900 text-white'
      : 'bg-yellow-500 text-white'
  }

  return (
    <CardComponent className="relative overflow-hidden w-full flex flex-col h-full">
      <CardHeaderComponent className="pb-8">
        <div className="flex items-center gap-3">
          {isLoading ? (
            <>
              <Skeleton className="w-7 h-7 bg-zinc-800 rounded-md" />
              <Skeleton className="w-72 h-7 bg-zinc-800 rounded-md" />
            </>
          ) : (
            <>
              <FlagTriangleRight className="text-slate-300" size={28} />
              <Label className="text-xl font-bold uppercase tracking-wider text-slate-300">
                Flags Ativas e Avisos Recentes
              </Label>
            </>
          )}
        </div>
      </CardHeaderComponent>

      <CardContentComponent className="flex-1">
        {isLoading ? (
          <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-3">
            <div className="flex flex-col gap-2">
              {Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800"
                >
                  <Skeleton className="w-10 h-10 rounded-md bg-zinc-800 flex-shrink-0" />
                  <div className="flex-1 flex flex-col gap-1 min-w-0">
                    <Skeleton className="w-28 h-5 bg-zinc-800 rounded" />
                    <Skeleton className="w-16 h-3 bg-zinc-800 rounded" />
                  </div>
                  <Skeleton className="w-14 h-6 bg-zinc-800 rounded flex-shrink-0" />
                  <Skeleton className="w-12 h-6 bg-zinc-800 rounded flex-shrink-0" />
                  <Skeleton className="w-8 h-8 bg-zinc-800 rounded flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>
        ) : flags.length === 0 ? (
          <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-6">
            <div className="flex flex-col items-center justify-center gap-4 text-slate-500 py-8">
              <FlagTriangleRight size={40} className="opacity-30" />
              <p className="text-sm font-medium">
                Nenhuma flag ativa no momento
              </p>
            </div>
          </div>
        ) : (
          <div className="bg-zinc-900/50 rounded-lg border border-zinc-800 p-3 max-h-[440px] overflow-y-auto custom-scrollbar">
            <div className="flex flex-col gap-2">
              {flags.map((flag) => (
                <div
                  key={flag.id}
                  className={cn(
                    'flex items-center gap-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800 hover:border-zinc-700 transition-all',
                    animatingId === flag.id &&
                    'animate-in fade-in slide-in-from-top-2 duration-500',
                  )}
                >
                  {/* Ícone de Warning */}
                  <div
                    className={cn(
                      'flex items-center justify-center w-10 h-10 rounded-md flex-shrink-0',
                      getTypeStyles(flag.type),
                    )}
                  >
                    <TriangleAlert size={20} />
                  </div>

                  {/* Nome do parâmetro e timestamp */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-base font-bold text-slate-300 truncate">
                        {flag.parameter}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">
                        {flag.timestamp}
                      </span>
                    </div>
                  </div>

                  {/* Valor */}
                  <div className="text-base font-bold text-slate-300 flex-shrink-0">
                    {typeof flag.value === 'number'
                      ? flag.value.toFixed(2)
                      : flag.value}
                    °
                  </div>

                  {/* Badge do tipo */}
                  <div
                    className={cn(
                      'px-2 py-1 rounded text-xs font-black uppercase flex-shrink-0',
                      getTypeStyles(flag.type),
                    )}
                  >
                    {flag.type}
                  </div>

                  {/* Botão de deletar */}
                  <button
                    onClick={() => handleDelete(flag.id)}
                    className="flex items-center justify-center w-8 h-8 rounded hover:bg-zinc-800 transition-colors text-slate-400 hover:text-red-400 flex-shrink-0"
                    aria-label="Remover flag"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </CardContentComponent>
    </CardComponent>
  )
}
