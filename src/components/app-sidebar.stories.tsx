import type { Meta, StoryObj } from '@storybook/react-vite';

import { AppNavigation } from './app-sidebar';

const meta = {
  component: AppNavigation,
} satisfies Meta<typeof AppNavigation>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: Array.from({ length: 24 }).map((_, index) => (
        <div
            key={index}
            className="bg-foreground aspect-video h-12 w-full rounded-lg"
        />
    ))
  }
};