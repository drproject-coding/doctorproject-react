import { Meta, StoryObj } from "@storybook/react";
import { EducationCourses } from "./EducationCourses";

const meta: Meta<typeof EducationCourses> = {
  component: EducationCourses,
  title: "Screens/Education/Courses",
  parameters: { layout: "fullscreen" },
};

export default meta;
type Story = StoryObj<typeof EducationCourses>;

export const LightTheme: Story = {
  args: {
    theme: "light",
    view: "courses",
  },
};

export const DarkTheme: Story = {
  args: {
    theme: "dark",
    view: "courses",
  },
};

export const CoursesCategory_Light: Story = {
  name: "Courses Category – Light",
  args: {
    theme: "light",
    view: "category",
  },
};

export const CoursesCategory_Dark: Story = {
  name: "Courses Category – Dark",
  args: {
    theme: "dark",
    view: "category",
  },
};
