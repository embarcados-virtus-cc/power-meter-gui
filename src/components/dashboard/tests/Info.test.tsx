import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Info } from '../page/Info'

describe('Info', () => {
    it('renders static info correctly', () => {
        render(<Info isLoading={false} />)
        expect(screen.getByText('FINISAR CORP')).toBeInTheDocument()
        expect(screen.getByText('UVW2024ABC')).toBeInTheDocument()
        expect(screen.getByText('10GBASE-SR')).toBeInTheDocument()
    })

    it('renders skeleton when loading', () => {
        const { container } = render(<Info isLoading={true} />)
        // Check if skeletons are present (can usually check by class or by querying specific loading elements if labeled, or specific structure)
        expect(container.getElementsByClassName('animate-pulse').length).toBeGreaterThan(0)
    })
})
