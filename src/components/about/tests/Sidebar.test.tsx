import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { AboutSidebar } from '../page/Sidebar'

describe('AboutSidebar', () => {
    it('renders nothing when closed', () => {
        render(<AboutSidebar open={false} onOpenChange={() => { }} />)
        expect(screen.queryByText(/Sobre o Projeto/i)).not.toBeInTheDocument()
    })

    // Note: Testing Radix UI Dialog/Sheet often requires checking for the portal content
    // validation might depend on how jsdom handles portals.
    // We mock onOpenChange to check interaction.
})
