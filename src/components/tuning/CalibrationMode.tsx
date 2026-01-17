import {
    CardComponent as Card,
    CardContentComponent as CardContent,
    CardHeaderComponent as CardHeader,
    CardTitleComponent as CardTitle,
} from '@/components/ui/card'
import { HelpCircle } from 'lucide-react'

export function CalibrationMode() {
    return (
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            <Card className="bg-zinc-950/20 border-zinc-800">
                <CardHeader>
                    <CardTitle className="text-center text-sm font-bold uppercase tracking-wider text-slate-400">
                        Tipo de Calibração
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="bg-zinc-800/20 p-4 rounded-lg border border-zinc-800 flex items-center justify-between group cursor-pointer hover:border-zinc-700 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full border border-zinc-500 group-hover:border-cyan-500" />
                            <div>
                                <div className="font-medium text-slate-200">Calibração Interna</div>
                                <div className="text-[10px] bg-zinc-700 text-zinc-300 px-1 rounded w-fit mt-1">
                                    RECOMENDADO
                                </div>
                            </div>
                        </div>
                        <HelpCircle className="w-5 h-5 text-zinc-600" />
                    </div>

                    <div className="bg-zinc-800/20 p-4 rounded-lg border border-zinc-800 flex items-center justify-between group cursor-pointer hover:border-zinc-700 transition-colors">
                        <div className="flex items-center gap-4">
                            <div className="w-3 h-3 rounded-full border-4 border-slate-100 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                            <div>
                                <div className="font-medium text-slate-200">Calibração Externa</div>
                                <div className="text-[10px] border border-amber-600/50 text-amber-500 px-1 rounded w-fit mt-1">
                                    AVANÇADO
                                </div>
                            </div>
                        </div>
                        <HelpCircle className="w-5 h-5 text-zinc-600" />
                    </div>
                </CardContent>
            </Card>

            <div className="space-y-6">
                <div className="text-center md:text-left">
                    <h3 className="text-lg font-medium text-slate-200 mb-4">Calibração Interna</h3>
                    <div className="bg-zinc-800/30 border border-zinc-800 p-6 rounded-xl text-sm text-slate-400 leading-relaxed">
                        Utiliza os valores de calibração internos armazenados na EEPROM do módulo SFP+. Os
                        dados são calculados automaticamente pelo firmware do transceptor.
                    </div>
                </div>

                <div className="text-center md:text-left">
                    <h3 className="text-lg font-medium text-slate-200 mb-4">Calibração Externa</h3>
                    <div className="bg-zinc-800/30 border border-zinc-800 p-6 rounded-xl text-sm text-slate-400 leading-relaxed">
                        Permite aplicar coeficientes de calibração externos. Útil para compensar desvios ou
                        calibrar contra um padrão de referência.
                    </div>
                </div>
            </div>
        </div>
    )
}
