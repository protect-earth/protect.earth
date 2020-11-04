import React from "react";
import renderer from "react-test-renderer";

import CountrySelection from "./CountrySelection";

describe("CountrySelection", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<CountrySelection />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
