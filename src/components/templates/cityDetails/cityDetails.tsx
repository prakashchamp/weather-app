import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getForecastDetails,
  getHistoryDetails,
} from "../../../redux/weather/action";
import { WeatherDetailsType } from "../../../redux/weather/models";
import { Description } from "../../atoms/description/description";
import { DayCardList } from "../../molecules/dayCardList/dayCardList";
import { Highlight } from "../../molecules/highlight/highlight";
import { TabNav } from "../../organisms/tabNav/tabNav";
import "./cityDetails.scss";

interface CityDetailsProps {
  city: WeatherDetailsType;
}

export const CityDetails: React.FC<CityDetailsProps> = ({ city }) => {
  const [navTab, setnavTab] = React.useState("Day");

  const dispatch = useDispatch();

  const callBack = (navTo: string) => {
    setnavTab(navTo);
  };

  useEffect(() => {
    if (navTab === "Forecast" && city.forecast.length === 0) {
      dispatch(getForecastDetails(city.id, city.coord));
    }
    if (navTab === "History" && city.history.length === 0) {
      dispatch(getHistoryDetails(city.id, city.coord));
    }
  }, [
    navTab,
    city.id,
    dispatch,
    city.forecast.length,
    city.history.length,
    city.coord,
  ]);

  return (
    <div className="city-details">
      <div className="left-panel">
        <Description
          city={{
            city: city.city,
            temp: city.temperature.temp,
            timestamp: city.timestamp,
            weather: city.weather,
          }}
        />
      </div>
      <div className="right-panel">
        <TabNav callBack={(tab: string) => callBack(tab)} />
        {navTab === "Day" && <Highlight city={city} />}
        {navTab === "History" && (
          <DayCardList
            isForecast={false}
            data={city.history ? city.history : []}
          />
        )}
        {navTab === "Forecast" && (
          <DayCardList
            isForecast={true}
            data={city.forecast ? city.forecast : []}
          />
        )}
      </div>
    </div>
  );
};
