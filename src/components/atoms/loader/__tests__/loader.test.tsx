import React from "react";
import { render } from "@testing-library/react";

import { Loader } from "../loader";

describe("Test Loader Component", () => {
  test("renders Loader Component", () => {
    const { getByAltText } = render(<Loader />);
    const image = getByAltText("loading spinner");
    expect(image).toBeInTheDocument();
  });
});
