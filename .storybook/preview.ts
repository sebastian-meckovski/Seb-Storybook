import type { Preview } from "@storybook/react";
import "./globalStorybookStyles.css";
import "@storybook/addon-console";

const preview: Preview = {
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown'
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
