import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { ComboBoxAutoComplete } from "./ComboBoxAutoComplete";
import { dummyData } from "../../shared/DummyData/ComboBoxDummyData";

describe("ComboBoxAutoComplete", () => {
    it("should render ComboBoxAutoComplete with a list of items", () => {
        const testId = "combo box";
        const { getByTestId } = render(
            <ComboBoxAutoComplete
                data-testid={testId}
                dataSource={dummyData}
                listItemRender={(x) => <p>{x.name}</p>}
                onItemClick={() => { }}
                onInputChange={() => { }}
                inputValue="test"
                selectedValue={dummyData[0]}
                isLoading={false}
                EmptyResultMessage="No records found"
                placeholder="Search items..."
                ariaKey="name"
                buttonDropDownAriaKey="aria key here"
            />
        );
        expect(getByTestId(testId)).toBeInTheDocument();
        expect(getByTestId(testId)).toContainHTML(
            '<input aria-label="type search value or press arrow down to select value from the dropdown" class="comboBoxWrapper__comboBox__input" placeholder="Search items..." value="test" />'
        );
    });
});
