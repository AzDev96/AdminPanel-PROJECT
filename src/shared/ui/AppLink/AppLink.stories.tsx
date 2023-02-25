import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { Applink } from "./Applink";
import { AppLinkTheme } from "./Applink";

export default {
  title: "shared/AppLink",
  component: Applink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: '/'
  }
} as ComponentMeta<typeof Applink>;

const Template: ComponentStory<typeof Applink> = (args) => (
  <Applink {...args} />
);

/* ====== Primary ====== */
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: "Text",
  theme: AppLinkTheme.PRIMARY
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

/* ====== Secondary ====== */
export const Secondary = Template.bind({});
Secondary.args = {
  children: "Text",
  theme: AppLinkTheme.SECONDARY
};
// Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

