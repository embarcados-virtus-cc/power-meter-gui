import type { Meta, StoryObj } from '@storybook/react'
import { AboutSidebar } from '../page/Sidebar'
import { useState } from 'react'

const meta = {
    title: 'About/Sidebar',
    component: AboutSidebar,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof AboutSidebar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
    args: {
        open: true,
        onOpenChange: () => { },
    },
    render: (args) => {
        const [isOpen, setIsOpen] = useState(args.open)
        return <AboutSidebar open={isOpen} onOpenChange={setIsOpen} />
    }
}
