import type { Meta, StoryObj } from "@storybook/react";
import { Dropzone } from "./Dropzone";

const meta: Meta<typeof Dropzone> = {
  title: "Components/Dropzone",
  component: Dropzone,
  tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof Dropzone>;

export const Default: Story = {};

export const ImageOnly: Story = {
  args: {
    accept: "image/*",
    hint: "PNG, JPG, GIF up to 5MB",
    icon: "🖼",
  },
};

export const DocumentUpload: Story = {
  args: {
    accept: ".pdf,.doc,.docx",
    hint: "PDF or Word document, max 20MB",
    icon: "📄",
  },
};

export const WithCallback: Story = {
  render: () => (
    <Dropzone
      onFiles={(files) =>
        alert(
          `${files.length} file(s) selected: ${files.map((f) => f.name).join(", ")}`,
        )
      }
      hint="Any file type accepted"
    />
  ),
};
