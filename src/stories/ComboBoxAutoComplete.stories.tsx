import { Meta, StoryObj } from "@storybook/react";
import { ComboBoxAutoComplete } from "../components/ComboBox/ComboBoxAutoComplete";
import React, { useState, useEffect } from "react";
import { dummyData } from '../shared/DummyData/ComboBoxDummyData';
import { useArgs } from '@storybook/preview-api';

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
export const WithHardcodedData: Story = {
  args: {
    listItemRender: (x) => <p>{x.name}</p>,
    inputValue: '',
    isLoading: false,
    EmptyResultMessage: 'No records found',
    placeholder: 'Search items...',
    buttonDropDownAriaKey: 'Search items',
    ariaKey: 'name',
  },

  render: function Render(args) {
    const [{ inputValue, dataSource }, updateArgs] = useArgs();

    function onItemClick(_e: any, x: any) {
      console.log(`Input value selected: ${x.name}`);
      updateArgs({ selectedValue: x, inputValue: x.name, dataSource: [] });
    }

    function onInputChange(e: any) {
      updateArgs({
        selectedValue: null,
        inputValue: e.target.value,
        dataSource: e.target.value === '' 
          ? [] 
          : dummyData.filter(x => x.name.toLowerCase().includes(e.target.value.toLowerCase())),
      });
    }

    function onDropdownClosed() {
      console.log('Dropdown closed');
    }

    return (
      <ComboBoxAutoComplete
        {...args}
        onItemClick={onItemClick}
        onInputChange={onInputChange}
        inputValue={inputValue}
        onDropdownClosed={onDropdownClosed}
        dataSource={dataSource}
      />
    );
  },
};

/** Example using dynamic data from the DummyJSON API for the ComboBoxAutoComplete. */
export const WithAPIData: Story = {
    args: {
      listItemRender: (x) => <p>{x.title}</p>,
      inputValue: '',
      isLoading: false,
      EmptyResultMessage: 'No products found',
      placeholder: 'Search for products...',
      buttonDropDownAriaKey: 'Search products',
      ariaKey: 'title',
    },
  
    render: function Render(args) {
      const [inputValue, setInputValue] = useState('');
      const [dataSource, setDataSource] = useState([]);
      const [isLoading, setIsLoading] = useState(false);
      const [isTyping, setIsTyping] = useState(false); // Track if the input change is due to typing.
  
      useEffect(() => {
        if (!isTyping || inputValue.trim() === '') {
          setIsTyping(false);
          setDataSource([]);
          return;
        }
  
        setIsLoading(true);
        const fetchProducts = async () => {
          try {
            const response = await fetch(`https://dummyjson.com/products/search?q=${inputValue}`);
            const data = await response.json();
            setDataSource(data.products || []);
          } catch (error) {
            console.error('Error fetching products:', error);
            setDataSource([]);
          } finally {
            setIsLoading(false);
          }
        };
  
        const debounceFetch = setTimeout(fetchProducts, 300);
        return () => clearTimeout(debounceFetch);
      }, [inputValue, isTyping]);
  
      function onItemClick(_e: any, x: any) {
        console.log(`Selected product: ${x.title}`);
        setInputValue(x.title);
        setDataSource([]);
        setIsTyping(false); // Mark as not typing to prevent fetching.
      }
  
      function onInputChange(e: any) {
        setIsTyping(e.target.value !== null); // Mark as typing for input changes.
        setInputValue(e.target.value);
      }
  
      function onDropdownClosed() {
        console.log('Dropdown closed');
      }
  
      return (
        <ComboBoxAutoComplete
          {...args}
          onItemClick={onItemClick}
          onInputChange={onInputChange}
          inputValue={inputValue}
          dataSource={dataSource}
          isLoading={isLoading}
          onDropdownClosed={onDropdownClosed}
        />
      );
    },
  };
  