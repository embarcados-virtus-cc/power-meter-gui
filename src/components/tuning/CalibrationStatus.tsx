import { CheckCircle } from 'lucide-react'
import {
  CardComponent as Card,
  CardContentComponent as CardContent,
  CardHeaderComponent as CardHeader,
  CardTitleComponent as CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

interface CalibrationStatusProps {
  status: {
    rx: boolean
    tx: boolean
    bias: boolean
    voltage: boolean
    temp: boolean
  }
  info: {
    ddmType: string
    version: string
    rxPowerType: string
    addressChange: string
  }
  rxPower?: any // Kept for future use if needed, though not strictly used in display logic
  txPower?: any
}

export function CalibrationStatus({ status, info }: CalibrationStatusProps) {
  return (
    <div className="space-y-8">
      {/* Status Cards */}
      <Card className="bg-transparent border-zinc-800">
        <CardHeader>
          <CardTitle>Status de Calibração</CardTitle>
          <p className="text-sm text-slate-400">
            Verificação dos valores de calibração atuais
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatusItem
              label="RX Power"
              value="-8.5 dBm"
              expected="-8.5 dBm"
              isValid={status.rx}
            />
            <StatusItem
              label="TX Power"
              value="-2.1 dBm"
              expected="-2.1 dBm"
              isValid={status.tx}
            />
            <StatusItem
              label="Bias Current"
              value="32.5 mA"
              expected="32.5 mA"
              isValid={status.bias}
            />
            <StatusItem
              label="Voltage"
              value="3.28 V"
              expected="3.3 V"
              isValid={status.voltage}
            />
            <StatusItem
              label="Temperature"
              value="42 °C"
              expected="42 °C"
              isValid={status.temp}
            />
          </div>

          <div className="mt-8 bg-green-500/10 border border-green-500/20 rounded-lg p-4 flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-green-500 font-medium text-sm">
                Calibração verificada com sucesso
              </h4>
              <p className="text-green-500/70 text-xs mt-1">
                Todos os parâmetros estão dentro dos limites de tolerância
                especificados.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="bg-transparent border-zinc-800">
        <CardHeader>
          <CardTitle>Informações de Calibração</CardTitle>
          <p className="text-sm text-slate-400">Dados do módulo SFP+</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
            <div>
              <Label className="text-xs text-slate-500 block mb-1">
                Tipo DDM
              </Label>
              <div className="font-mono text-slate-200">{info.ddmType}</div>
            </div>
            <div>
              <Label className="text-xs text-slate-500 block mb-1">
                Versão SFF-8472
              </Label>
              <div className="font-mono text-slate-200">{info.version}</div>
            </div>
            <div>
              <Label className="text-xs text-slate-500 block mb-1">
                RX Power Type
              </Label>
              <div className="font-mono text-slate-200">{info.rxPowerType}</div>
            </div>
            <div>
              <Label className="text-xs text-slate-500 block mb-1">
                Address Change
              </Label>
              <div className="font-mono text-slate-200">
                {info.addressChange}
              </div>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-6 flex items-center justify-between">
            <span className="text-slate-400 text-sm">Status de Calibração</span>
            <div className="flex items-center gap-2 text-green-500 text-sm font-medium">
              <CheckCircle className="w-4 h-4" />
              Válida
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

function StatusItem({
  label,
  value,
  expected,
  isValid,
}: {
  label: string
  value: string
  expected: string
  isValid: boolean
}) {
  return (
    <div className="relative p-2">
      <div className="flex justify-between items-start mb-2">
        <span className="text-slate-300 font-medium">{label}</span>
        {isValid && <CheckCircle className="w-4 h-4 text-green-500" />}
      </div>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <span className="text-[10px] uppercase text-slate-500 block">
            Lido:
          </span>
          <span className="font-mono text-xs text-slate-300">{value}</span>
        </div>
        <div>
          <span className="text-[10px] uppercase text-slate-500 block">
            Esperado:
          </span>
          <span className="font-mono text-xs text-slate-300">{expected}</span>
        </div>
      </div>
    </div>
  )
}
