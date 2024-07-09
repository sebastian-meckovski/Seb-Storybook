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
        listItemRender: (x) => { return (<p>{x.name}</p>) },
        selectedValue: dummyData[2],
        inputValue: '',
        isLoading: false,
        EmptyResultMessage: 'no records found',
        placeholder: 'search items...',
        buttonDropDownAriaKey: 'aria key here',
        ariaKey: 'name'
    },

    render: function Render(args) {
        const [{ inputValue, dataSource }, updateArgs] = useArgs();

        function onItemClick(_e: any, x: any) {
            updateArgs({ selectedValue: x });
        }

        function onInputChange(e: any) {
            updateArgs({
                inputValue: e.target.value,
                dataSource: dummyData.filter(x => { return x.name.toLowerCase().includes(e.target.value.toLowerCase()) })
            });
        }

        function onDropdownClosed() {
            console.log('closed')
            updateArgs({ inputValue: '', dataSource: dummyData });
        }

        return (
            <ComboBox {...args}
                onItemClick={(_e, x) => { onItemClick(_e, x) }}
                onInputChange={onInputChange}
                inputValue={inputValue}
                onDropdownClosed={onDropdownClosed}
                dataSource={dataSource}
            />
        )
    }
};
