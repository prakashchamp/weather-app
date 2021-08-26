import React from "react";
import { render } from "@testing-library/react";

import { Temperature } from "../temperature";

const tempData = {
  temp: 25,
  min_temp: 20,
  max_temp: 30,
};

const sunData = {
  sunrise: 1609290656,
  sunset: 1609331588,
};

describe("Test Temperature Component", () => {
  test("should temperature render without crashing", () => {
    const { getByTestId } = render(
      <Temperature isTemp={true} tempData={tempData} />
    );
    const temperature = getByTestId("temperature");
    expect(temperature).toBeInTheDocument();
    const heading = getByTestId("temp-heading");
    expect(heading).toHaveTextContent("Temperature");
  });

  test("should sun details render without crashing", () => {
    const { getByTestId } = render(
      <Temperature isTemp={false} sunData={sunData} />
    );
    const temperature = getByTestId("temperature");
    expect(temperature).toBeInTheDocument();
    const heading = getByTestId("temp-heading");
    expect(heading).toHaveTextContent("Sunrise & Sunset");
  });
});
