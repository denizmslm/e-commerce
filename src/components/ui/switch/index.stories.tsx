import type { Meta, StoryObj } from "@storybook/react";

import { Switch } from "./index";

const meta = {
  component: Switch,
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Switch",
    error: false,
  },
};
