// @flow
import React from "react";
import renderer from "react-test-renderer";
import Svg from "./Svg";

describe("Icon", () => {
  const props = {
    icon: {
      viewBox: "0 0 0 0",
      path: ""
    }
  };

  it("renders correctly", () => {
    const tree = renderer.create(<Icon {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
