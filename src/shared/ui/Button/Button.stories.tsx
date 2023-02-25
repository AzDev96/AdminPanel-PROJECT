import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ThemeButton } from "./Button";


export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;


/* ====== Primary ====== */
export const Primary = Template.bind({});
Primary.args = {
  children: "Text",
};
// Primary.decorators = [ThemeDecorator(Theme.LIGHT)];


/* ====== Clear ====== */
export const Clear = Template.bind({});
Clear.args = {
  children: "Text",
  theme: ThemeButton.CLEAR,
};
// Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

/* ====== Outline ====== */
export const Outline = Template.bind({});
Outline.args = {
  children: "Text",
  theme: ThemeButton.OUTLINE,
};
// Outline.decorators = [ThemeDecorator(Theme.DARK)];
