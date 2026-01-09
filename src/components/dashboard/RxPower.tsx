import { useStore } from '@tanstack/react-store'
import { BatteryMedium } from 'lucide-react'
import { Skeleton } from '../ui/skeleton'
import { Label } from '../ui/label'
import {
  CardComponent,
  CardContentComponent,
  CardHeaderComponent,
} from '@/components/ui/card'
import { rxPowerStore } from '@/stores/dataStores'

export function RxPower({ isLoading }: { isLoading: boolean }) {
  const powerValue = useStore(rxPowerStore)

  return (
    <CardComponent>
      <CardHeaderComponent>
        <div className="flex items-center gap-3">
          <BatteryMedium className="text-slate-300" size={24} />
          <Label className="text-lg font-bold uppercase tracking-wider text-slate-300">
            Potência Óptica Recebida (RX)
          </Label>
        </div>
      </CardHeaderComponent>
      <CardContentComponent className="min-h-59">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center gap-4 h-full">
            <Skeleton className="w-40 h-40 rounded-full bg-zinc-800" />
            <Skeleton className="w-20 h-6 bg-zinc-800" />
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="8"
                  strokeDasharray="4 4"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="rgb(203 213 225)"
                  strokeWidth="8"
                  strokeDasharray={`${(Math.abs(powerValue) / 20) * 251.2} 251.2`}
                  className="transition-all duration-1000"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl font-bold text-slate-300">
                  {powerValue}
                </span>
              </div>
            </div>
            <span className="text-sm text-slate-300 font-medium">dBm</span>
          </div>
        )}
      </CardContentComponent>
    </CardComponent>
  )
}
