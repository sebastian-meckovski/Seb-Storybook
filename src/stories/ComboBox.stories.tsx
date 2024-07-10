import type { Meta, StoryObj } from "@storybook/react";
import { ComboBox } from "../components/ComboBox/ComboBox";
import React from "react";
import { useArgs } from '@storybook/preview-api';
import { dummyData } from '../shared/DummyData/ComboBoxDummyData'


const meta: Meta<typeof ComboBox> = {
    component: ComboBox,
    tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ComboBox>;

/**
The ComboBox is a custom dropdown select component built with React and TypeScript. It allows users to select an item from a dropdown list, which can be filtered by typing into an input field.
*/
export const Example: Story = {
    args: {
        listItemRender: (x) => { return (<p style={{ margin: '0.5rem', fontSize: '0.9rem' }}>{x.name}</p>) },
        isLoading: false,
        EmptyResultMessage: 'no records found',
        placeholder: 'search items...',
        buttonDropDownAriaKey: 'name',
        ariaKey: 'name',
        selectedValue: dummyData[3]
    },

    render: function Render(args) {
        const [{ inputValue, dataSource, selectedValue }, updateArgs] = useArgs();

        function onItemClick(_e: any, x: any) {
            x && updateArgs({ selectedValue: x, inputValue: x.name });
        }

        function onInputChange(e: any) {
            updateArgs({
                inputValue: e.target.value,
                dataSource: dummyData.filter(x => { return x.name.toLowerCase().includes(e.target.value.toLowerCase()) })
            });
        }

        function onDropdownClosed() {
            updateArgs({ dataSource: dummyData });
        }

        return (
            <ComboBox {...args}
                onItemClick={(_e, x) => { x && onItemClick(_e, x) }}
                onInputChange={onInputChange}
                inputValue={inputValue}
                onDropdownClosed={onDropdownClosed}
                dataSource={dataSource}
                selectedValue={selectedValue}
            />
        )
    }
};
