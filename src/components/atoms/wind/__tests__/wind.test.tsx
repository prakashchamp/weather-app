import React from "react";
import { render } from "@testing-library/react";

import { Wind } from "../wind";

const windData = {
  speed: 4.1,
  deg: 100,
};

describe("Test Wind Component", () => {
  test("should wind render without crashing", () => {
    const { getByTestId } = render(<Wind isWind={true} windData={windData} />);
    const wind = getByTestId("wind");
    expect(wind).toBeInTheDocument();
    const heading = getByTestId("wind-heading");
    expect(heading).toHaveTextContent("Wind Status");
  });

  test("should humidity details render without crashing", () => {
    const { getByTestId } = render(<Wind isWind={false} humidityData={57} />);
    const wind = getByTestId("wind");
    expect(wind).toBeInTheDocument();
    const heading = getByTestId("wind-heading");
    expect(heading).toHaveTextContent("Humidity");
  });
});
