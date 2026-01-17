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
            <h3 className="text-lg font-bold text-slate-300 mb-2 uppercase tracking-widest">{title}</h3>
            <div className="bg-zinc-950/50 border border-zinc-800/50 p-4 rounded-xl text-xs text-slate-400 leading-relaxed max-w-sm">
                {description}
            </div>
        </div>
    )
}
