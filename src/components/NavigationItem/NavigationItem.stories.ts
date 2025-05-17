import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { NavigationItem } from "./NavigationItem";

const meta = {
  title: "Components/NavigationItem",
  component: NavigationItem,
  tags: ["autodocs"],
  args: {
    label: "Label",
    disabled: false,
    selected: false,
    className: "",
    href: "#",
    icon: undefined,
    onClick: fn(),
  },
} satisfies Meta<typeof NavigationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NavigationItemWithLabel: Story = {
  args: {
    label: "Label",
    disabled: false,
    selected: false,
    href: "#",
    onClick: fn(),
  },
};
