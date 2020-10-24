import React from "react";
import renderer from "react-test-renderer";

import LanguageDropdown from "./LanguageDropdown";

describe("LanguageDropdown", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<LanguageDropdown />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
