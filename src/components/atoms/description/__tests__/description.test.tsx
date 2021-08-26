import React from "react";
import { render } from "@testing-library/react";

import { Description } from "../description";

const data = {
  city: "Bengaluru",
  temp: 25.83,
  timestamp: 1609311269,
  weather: "scattered clouds",
};

describe("Test Description Component", () => {
  test("should render without crashing", () => {
    const { getByTestId } = render(<Description city={data} />);
    const description = getByTestId("description");
    expect(description).toBeInTheDocument();
  });

  test("should render formatted timestamp", () => {
    const { getByTestId } = render(<Description city={data} />);
    const time = getByTestId("description-time");
    expect(time).toBeInTheDocument();
    expect(time).toHaveTextContent("Wednesday, 12:24 PM");
  });

  test("should render clock icon", () => {
    const { getByTestId } = render(<Description city={data} />);
    const clock = getByTestId("clock-icon");
    expect(clock).toBeVisible();
  });
});
