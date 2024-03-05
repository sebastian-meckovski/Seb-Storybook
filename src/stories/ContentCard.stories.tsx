import type { Meta, StoryObj } from "@storybook/react";
import { ContentCard } from "../components/ContentCard/ContentCard";
import React from "react";

const meta: Meta<typeof ContentCard> = {
  component: ContentCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ContentCard>;
/**
 The ContentCard component is a simple card container for displaying content. It has a transparent background, subtle border, and smooth hover effect. You can pass your desired content as children to the component. 
 Also allows you to pass any additional props.
*/

export const Example: Story = {
  args: {
    children: (
      <>
        <h1>Web Development</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          placeat non ratione. Perferendis debitis optio alias atque explicabo
          labore, numquam nulla hic autem.
        </p>
      </>
    ),
  },
};
