import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Sidebar } from "./Sidebar";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";


export default {
  title: "widget/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args:any) => <Sidebar {...args} />;

/* ====== Light ====== */
export const Light = Template.bind({});
Light.args = {};


/* ====== Dark ====== */
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];


