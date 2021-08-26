import React from "react";
import { render } from "@testing-library/react";

import { DayCardList } from "../dayCardList";

const data = [
  {
    timestamp: 837649289,
    temperature: { max_temp: 32, min_temp: 19, temp: 25 },
  },
];

describe("test day card list component", () => {
  test("history data should render without crashing", () => {
    const { getAllByTestId } = render(
      <DayCardList isForecast={false} data={data} />
    );

    const card = getAllByTestId("day-list");
    expect(card).toHaveLength(1);

    // const heading = getAllByTestId("day-list-heading");
    // expect(heading).toHaveTextContent("History");
  });
});
