import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { EducationCourses } from "../../screens/Education/EducationCourses";

const meta: Meta<typeof EducationCourses> = {
  component: EducationCourses,
  title: "Pages/Education",
  parameters: { layout: "fullscreen" },
};
export default meta;
type Story = StoryObj<typeof EducationCourses>;

export const CoursesExplore: Story = { args: { view: "courses" } };
export const CoursesCategory: Story = { args: { view: "category" } };
