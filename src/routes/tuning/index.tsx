import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import { calibrationStore } from '@/stores/calibrationStore'
import { CalibrationTypeSelector } from '@/components/tuning/CalibrationTypeSelector'
import { CalibrationInfoColumn } from '@/components/tuning/CalibrationInfoColumn'
import { ExternalCalibrationForm } from '@/components/tuning/ExternalCalibrationForm'

export const Route = createFileRoute('/tuning/')({
  component: RouteComponent,
})

function RouteComponent() {
  const { rxPower, txPower, temperature, info, status } =
    useStore(calibrationStore)
  const [activeMode, setActiveMode] = useState<'internal' | 'external'>(
    'internal',
  )

  return (
    <div className="min-h-max bg-zinc-950">
      <main className="container mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 h-[500px]">
          {/* Col 1: Selector (3 cols) */}
          <div className="lg:col-span-3 h-full">
            <CalibrationTypeSelector
              activeMode={activeMode}
              onModeChange={setActiveMode}
              status={status}
            />
          </div>

          {/* Col 2: Info (4 cols) */}
          <div className="lg:col-span-4 h-full">
            <CalibrationInfoColumn />
          </div>

          {/* Col 3: Form (5 cols) */}
          <div className="lg:col-span-5 h-full">
            <ExternalCalibrationForm
              rxPower={rxPower}
              txPower={txPower}
              temperature={temperature}
              info={info}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
