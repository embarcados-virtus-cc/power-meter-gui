import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { RxPower } from '../page/RxPower'

// Mock store
vi.mock('@tanstack/react-store', () => ({
    useStore: () => -5.0 // Return number directly as mock
}))

describe('RxPower', () => {
    it('renders rx power value', () => {
        render(<RxPower isLoading={false} />)
        expect(screen.getByText('-5.00')).toBeInTheDocument() // Assuming dbm default
    })

    it('changes unit when clicked', () => {
        render(<RxPower isLoading={false} />)
        const mwBtn = screen.getByText('mW', { selector: 'button' })
        fireEvent.click(mwBtn)
        // Check if value converted (math logic check)
        // 10^(-5/10) = 0.3162 mW
        expect(screen.getByText('0.3162')).toBeInTheDocument()
    })
})
