import React from "react";
import { render } from "@testing-library/react";
import { DayCard } from "../dayCard";

const data = {
  timestamp: 837649289,
  temperature: { max_temp: 32, min_temp: 19, temp: 25 },
};

describe("Test Day Card Component", () => {
  test("renders without crashing", () => {
    const { getByTestId } = render(<DayCard data={data} />);
    const dayCard = getByTestId("day-card");
    expect(dayCard).toBeInTheDocument();
  });

  test("check temperature value is rendered", () => {
    const { getByTestId } = render(<DayCard data={data} />);
    const temp = getByTestId("temp");
    const maxTemp = getByTestId("max-temp");
    const minTemp = getByTestId("min-temp");

    expect(temp).toHaveTextContent("25");
    expect(maxTemp).toHaveTextContent("32");
    expect(minTemp).toHaveTextContent("19");
  });
});
