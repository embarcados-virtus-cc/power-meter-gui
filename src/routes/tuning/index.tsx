import { createFileRoute } from '@tanstack/react-router'
import { useStore } from '@tanstack/react-store'
import { loadingStore } from '@/stores/loadingStore'

export const Route = createFileRoute('/tuning/')({
  component: RouteComponent,
})

function RouteComponent() {
  const isLoading = useStore(loadingStore)

  return <div>Hello "/tuning/"!</div>
}
