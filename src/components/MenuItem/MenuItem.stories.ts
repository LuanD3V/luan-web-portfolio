import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { MenuItem } from "./MenuItem";

const meta = {
  title: "Components/MenuItem",
  component: MenuItem,
  tags: ["autodocs"],
  args: {
    label: "Menu Item",
    disabled: false,
    selected: false,
    onClick: fn(),
  },
} satisfies Meta<typeof MenuItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MenuItemWithIcon: Story = {
  args: {
    label: "Menu Item",
    disabled: false,
    selected: false,
    onClick: fn(),
  },
};
