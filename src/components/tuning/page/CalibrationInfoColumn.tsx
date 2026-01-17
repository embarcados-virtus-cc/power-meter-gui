import { ServerCog } from 'lucide-react'

interface CalibrationInfoCardProps {
  title: string
  description: string
}

export function CalibrationInfoColumn() {
  return (
    <div className="flex flex-col gap-6 h-full">
      <InfoCard
        title="Calibração Interna"
        description="Utiliza os valores de calibração internos armazenados na EEPROM do módulo SFP+. Os dados são calculados automaticamente pelo firmware do transceptor."
      />
      <InfoCard
        title="Calibração Externa"
        description="Permite aplicar coeficientes de calibração externos. Útil para compensar desvios ou calibrar contra um padrão de referência."
      />
    </div>
  )
}

function InfoCard({ title, description }: CalibrationInfoCardProps) {
  return (
    <div className="bg-zinc-900 border-zinc-800 flex-1 rounded-xl p-5 border flex flex-col items-center justify-center text-center shadow-lg">
      <h3 className="flex gap-3 justify-center text-[1.25rem] font-bold text-slate-300 mb-8 uppercase">
        <ServerCog className="mt-[0.150rem]" />
        {title}
      </h3>
      <div className="bg-zinc-950/50 border border-zinc-800/50 p-4 rounded-xl text-[1rem] text-slate-400 leading-relaxed max-w-sm">
        {description}
      </div>
    </div>
  )
}
