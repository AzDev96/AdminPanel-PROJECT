import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { PageError } from "./PageError";


export default {
  title: "widget/PageError",
  component: PageError,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageError>;

const Template: ComponentStory<typeof PageError> = (args:any) => <PageError {...args} />;

/* ====== Light ====== */
export const Light = Template.bind({});
Light.args = {};


/* ====== Dark ====== */
export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];


