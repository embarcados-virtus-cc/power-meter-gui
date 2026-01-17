import { Download, PenLine, RotateCcw } from 'lucide-react'
import {
  CardComponent as Card,
  CardContentComponent as CardContent,
  CardHeaderComponent as CardHeader,
  CardTitleComponent as CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'

// Define prop types if using TypeScript (deduced from usage)
interface ExternalCalibrationProps {
  rxPower: { offset: string; slope: string; pwr4: string; pwr3: string }
  txPower: { offset: string; slope: string }
  temperature: { offset: string; slope: string }
}

export function ExternalCalibration({
  rxPower,
  txPower,
  temperature,
}: ExternalCalibrationProps) {
  return (
    <Card className="bg-transparent border-zinc-800">
      <CardHeader>
        <CardTitle>Coeficientes de Calibração Externa</CardTitle>
        <p className="text-sm text-slate-400">
          Configure os parâmetros de calibração externa para cada sensor
        </p>
      </CardHeader>
      <CardContent className="space-y-8">
        {/* RX Power Section */}
        <div className="space-y-3">
          <Label className="text-slate-300 font-medium">Potência RX</Label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs text-slate-500">Offset (dBm)</Label>
              <Input
                className="bg-zinc-950/50 border-zinc-800 text-slate-300"
                placeholder="0"
                defaultValue={rxPower.offset}
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-slate-500">Slope</Label>
              <Input
                className="bg-zinc-950/50 border-zinc-800 text-slate-300"
                placeholder="1"
                defaultValue={rxPower.slope}
              />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs text-slate-500">RX_PWR(4)</Label>
              <Input
                className="bg-zinc-950/50 border-zinc-800 text-slate-300"
                placeholder="0"
                defaultValue={rxPower.pwr4}
              />
            </div>
            <div className="space-y-1.5 relative">
              <Label className="text-xs text-slate-500">RX_PWR(3)</Label>
              <div className="flex gap-2">
                <Input
                  className="bg-zinc-950/50 border-zinc-800 text-slate-300"
                  placeholder="0"
                  defaultValue={rxPower.pwr3}
                />
                {/* Edit Icon Mock */}
                <div className="h-9 w-9 flex items-center justify-center bg-zinc-800/50 rounded border border-zinc-700 hover:bg-zinc-700/50 cursor-pointer transition-colors">
                  <PenLine className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TX Power Section */}
        <div className="space-y-3">
          <Label className="text-slate-300 font-medium">Potência TX</Label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs text-slate-500">Offset (dBm)</Label>
              <Input
                className="bg-zinc-950/50 border-zinc-800 text-slate-300"
                placeholder="0"
                defaultValue={txPower.offset}
              />
            </div>
            <div className="space-y-1.5 col-span-1 md:col-span-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs text-slate-500">Slope</Label>
                  <div className="flex gap-2">
                    <Input
                      className="bg-zinc-950/50 border-zinc-800 text-slate-300"
                      placeholder="1"
                      defaultValue={txPower.slope}
                    />
                    <div className="h-9 w-9 flex shrink-0 items-center justify-center bg-zinc-800/50 rounded border border-zinc-700 hover:bg-zinc-700/50 cursor-pointer transition-colors">
                      <PenLine className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Temperature Section */}
        <div className="space-y-3">
          <Label className="text-slate-300 font-medium">Temperatura</Label>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="space-y-1.5">
              <Label className="text-xs text-slate-500">Offset (°C)</Label>
              <Input
                className="bg-zinc-950/50 border-zinc-800 text-slate-300"
                placeholder="0"
                defaultValue={temperature.offset}
              />
            </div>
            <div className="space-y-1.5 col-span-1 md:col-span-3">
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs text-slate-500">Slope</Label>
                  <div className="flex gap-2">
                    <Input
                      className="bg-zinc-950/50 border-zinc-800 text-slate-300"
                      placeholder="1"
                      defaultValue={temperature.slope}
                    />
                    <div className="h-9 w-9 flex shrink-0 items-center justify-center bg-zinc-800/50 rounded border border-zinc-700 hover:bg-zinc-700/50 cursor-pointer transition-colors">
                      <PenLine className="w-4 h-4 text-slate-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4 pt-4">
          <Button className="bg-cyan-600 hover:bg-cyan-700 text-white shadow-lg shadow-cyan-900/20">
            <Download className="w-4 h-4 mr-2" />
            Aplicar Calibração
          </Button>
          <Button
            variant="outline"
            className="border-zinc-700 text-slate-300 hover:bg-zinc-800 hover:text-white bg-transparent"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Restaurar Padrão
          </Button>
          <Button
            variant="outline"
            className="border-zinc-700 text-slate-300 hover:bg-zinc-800 hover:text-white bg-transparent"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Ler do Módulo
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
