import { Outlet, createRootRoute } from '@tanstack/react-router'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <div className="pt-10 bg-zinc-950">
        <Outlet />
      </div>
      <div className="pt-20 bg-zinc-950">
        <Footer />
      </div>
    </>
  ),
})
