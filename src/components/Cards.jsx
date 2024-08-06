import { useEffect, useState } from "react";
import Forecast from "./Forecast";
import PropTypes from "prop-types";
import NotFound from "./NotFound";

const Cards = (props) => {
  const city = props.city;
  Cards.propTypes = {
    city: PropTypes.string.isRequired,
  };

  const api_key = "be2435c0161e7007b810d1c74d328335";
  const [weather, setWeather] = useState([]);
  const search = async () => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api_key}`;
      const res = await fetch(url);
      const data = await res.json();
      setWeather(data.list);
      return weather;
    } catch (e) {
      console.log("City Not Found");
      setWeather([]);
    }
  };
  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  var filteredObj = weather.filter((obj) => {
    if (obj.dt_txt.includes("12:00:00")) {
      return obj;
    }
  });
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  var cards = filteredObj.map((obj, i) => {
    var icon = obj.weather[0].icon;
    var temp = obj.main.temp;
    var desc = obj.weather[0].description;
    var day = obj.dt;

    var theDate = new Date(day * 1000);
    var strFullDay = theDate.toGMTString();
    var d = new Date(strFullDay);
    var strDay = weekday[d.getDay()];

    return (
      <Forecast key={i} icon={icon} temp={temp} desc={desc} strDay={strDay} />
    );
  });
  return <>{weather ? <>{cards}</> : <NotFound />}</>;
};

export default Cards;
