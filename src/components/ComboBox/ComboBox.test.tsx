import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { ComboBox } from "../ComboBox/ComboBox";
import { dummyData } from "../../stories/ComboBox.stories";

describe("ComboBox", () => {
    it("should render ComboBox with a list of items", () => {
        const testId = "combo box";
        const { getByTestId } = render(
            <ComboBox
                data-testid={testId}
                dataSource={dummyData}
                listItemRender={(x) => <p>{x.name}</p>}
                onItemClick={() => { }}
                onInputChange={() => { }}
                inputValue=""
                selectedValue={dummyData[0]}
                isLoading={false}
                EmptyResultMessage="No records found"
                placeholder="Search items..."
                ariaKey="name"
                buttonDropDownAriaKey="aria key here"
            />
        );
        expect(getByTestId(testId)).toBeInTheDocument();
        expect(getByTestId(testId)).toContainHTML("<p>Sunrise Symphony</p>");
    });
});
