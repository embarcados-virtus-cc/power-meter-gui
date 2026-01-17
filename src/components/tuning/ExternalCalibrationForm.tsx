import {
    CardComponent as Card,
    CardContentComponent as CardContent,
    CardHeaderComponent as CardHeader,
    CardTitleComponent as CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { PenLine } from 'lucide-react'

// Define prop types if using TypeScript (deduced from usage)
interface CalibrationInfo {
    ddmType: string
    version: string
    rxPowerType: string
    addressChange: string
}

interface ExternalCalibrationProps {
    rxPower: { offset: string; slope: string; pwr4: string; pwr3: string }
    txPower: { offset: string; slope: string }
    temperature: { offset: string; slope: string }
    info?: CalibrationInfo
}

export function ExternalCalibrationForm({ rxPower, txPower, temperature, info }: ExternalCalibrationProps) {
    return (
        <Card className="bg-zinc-900 border-zinc-800 h-full shadow-lg flex flex-col">
            <CardHeader className="text-center pb-2 pt-5">
                <CardTitle className="text-slate-300 text-base font-bold uppercase tracking-widest">
                    Coeficientes de Calibração
                </CardTitle>
            </CardHeader>
            <CardContent className="p-5 flex-1 flex flex-col justify-between">

                {/* RX Power Section */}
                <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">RX Power</div>
                    <div className="grid grid-cols-4 gap-3">
                        <InputGroup label="Offset" pl="0" val={rxPower.offset} />
                        <InputGroup label="Slope" pl="1" val={rxPower.slope} />
                        <InputGroup label="RX_pwr(4)" pl="0" val={rxPower.pwr4} />
                        <div className="relative">
                            <InputGroup label="RX_pwr(3)" pl="0" val={rxPower.pwr3} hasEdit />
                        </div>
                    </div>
                </div>

                {/* TX Power Section */}
                <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">TX Power</div>
                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-1">
                            <InputGroup label="Offset" pl="0" val={txPower.offset} />
                        </div>
                        <div className="col-span-2">
                            <InputGroup label="Slope" pl="1" val={txPower.slope} hasEdit />
                        </div>
                    </div>
                </div>

                {/* Temperature Section */}
                <div className="space-y-3">
                    <div className="text-xs font-bold text-slate-500 uppercase tracking-widest pl-1">Temperatura</div>
                    <div className="grid grid-cols-4 gap-3">
                        <div className="col-span-1">
                            <InputGroup label="Offset (°C)" pl="0" val={temperature.offset} />
                        </div>
                        <div className="col-span-2">
                            <InputGroup label="Slope" pl="1" val={temperature.slope} hasEdit />
                        </div>
                    </div>
                </div>

                {/* Module Info Section (Moved from Selector) */}
                {info && (
                    <div className="pt-4 border-t border-zinc-800/50 space-y-3">
                        <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center mb-2">
                            Informações do Módulo
                        </h4>
                        <div className="grid grid-cols-4 gap-2">
                            <div className="text-center">
                                <Label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-0.5">Tipo DDM</Label>
                                <div className="font-mono text-xs text-slate-300">{info.ddmType}</div>
                            </div>
                            <div className="text-center">
                                <Label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-0.5">Versão</Label>
                                <div className="font-mono text-xs text-slate-300">{info.version}</div>
                            </div>
                            <div className="text-center">
                                <Label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-0.5">RX Pwr Type</Label>
                                <div className="font-mono text-xs text-slate-300">{info.rxPowerType}</div>
                            </div>
                            <div className="text-center">
                                <Label className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider block mb-0.5">Endereçamento</Label>
                                <div className="font-mono text-xs text-slate-300">{info.addressChange}</div>
                            </div>
                        </div>
                    </div>
                )}

            </CardContent>
        </Card>
    )
}

function InputGroup({ label, pl, val, hasEdit }: { label: string, pl: string, val: string, hasEdit?: boolean }) {
    return (
        <div className="space-y-0.5 flex flex-col">
            <Label className="text-[10px] text-slate-500 font-normal ml-0.5">{label}</Label>
            <div className="flex gap-2 relative">
                <Input
                    className="bg-zinc-800/40 border-zinc-800 text-slate-300 h-8 text-xs font-medium"
                    placeholder={pl}
                    defaultValue={val}
                />
                {hasEdit && (
                    <div className="h-8 w-8 flex shrink-0 items-center justify-center bg-zinc-800/40 rounded border border-zinc-800 hover:bg-zinc-700/50 cursor-pointer transition-colors">
                        <PenLine className="w-3.5 h-3.5 text-slate-400" />
                    </div>
                )}
            </div>
        </div>
    )
}
