import type { Meta, StoryObj } from "@storybook/react";
import { ComboBoxAutoComplete } from "../components/ComboBox/ComboBoxAutoComplete";
import React from "react";
import { useArgs } from '@storybook/preview-api';
import { dummyData } from '../shared/DummyData/ComboBoxDummyData'


const meta: Meta<typeof ComboBoxAutoComplete> = {
    component: ComboBoxAutoComplete,
    tags: ["autodocs"],
};
export default meta;
type Story = StoryObj<typeof ComboBoxAutoComplete>;

/**
 The ComboBoxAutoComplete is a custom autocomplete text field component built with React and
 TypeScript. It allows users to type into a text field and see a list of suggestions from a 
 dropdown list, which is filtered based on the input. The dropdown list only appears if 
 there are search results, and there is no button to manually toggle the dropdown list.
 Instead, the dropdown list automatically appears and disappears based on the input and
 search results.
*/
export const Example: Story = {
    args: {
        listItemRender: (x) => { return (<p>{x.name}</p>) },
        inputValue: '',
        isLoading: false,
        EmptyResultMessage: 'no records found',
        placeholder: 'search items...',
        buttonDropDownAriaKey: 'aria key here',
        ariaKey: 'name',
    },

    render: function Render(args) {
        const [{ inputValue, dataSource }, updateArgs] = useArgs();

        function onItemClick(_e: any, x: any) {
            console.log(`input value selected: ${x.name}`)
            updateArgs({ selectedValue: x, inputValue: x.name, dataSource: [] });
        }

        function onInputChange(e: any) {
            updateArgs({
                selectedValue: null,
                inputValue: e.target.value,
                dataSource: e.target.value === '' ? [] : dummyData.filter(x => { return x.name.toLowerCase().includes(e.target.value.toLowerCase()) })
            });
        }

        function onDropdownClosed() {
            console.log('closed')
        }

        return (
            <ComboBoxAutoComplete {...args}
                onItemClick={(_e, x) => { onItemClick(_e, x) }}
                onInputChange={onInputChange}
                inputValue={inputValue}
                onDropdownClosed={onDropdownClosed}
                dataSource={dataSource}
            />
        )
    }
};
