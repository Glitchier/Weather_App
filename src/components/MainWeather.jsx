import { useEffect, useState } from "react";
import { IoLocationOutline } from "react-icons/io5";
import { LuWaves } from "react-icons/lu";
import { LuWind } from "react-icons/lu";
import Search from "./Search";
import Cards from "./Cards";
import NotFound from "./NotFound";

const MainWeather = () => {
  const [city, setCity] = useState("Delhi");
  const api_key = "be2435c0161e7007b810d1c74d328335";
  const [weather, setWeather] = useState(false);
  const search = async () => {
    if (city === "") {
      setWeather(false);
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`;
      const res = await fetch(url);
      const data = await res.json();
      // console.log(data);
      setWeather({
        weatherIcon: data.weather[0].icon,
        temp: data.main.temp,
        desc: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        wspeed: data.wind.speed,
      });
    } catch (e) {
      setWeather(false);
      console.error("City Not Found");
    }
  };
  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  return (
    <>
      <Search setCity={setCity} />
      {weather ? (
        <>
          <h1 className="text-3xl font-light">Today</h1>
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="flex justify-center items-center gap-[1rem]">
              <div className="font-extralight text-[8rem] text-[#5E7681]">
                <img
                  src={`./src/assets/icons/${weather.weatherIcon}.png`}
                  alt="icon"
                />
              </div>
              <div className="flex flex-col gap-[0.5rem] font-medium text-[1rem]">
                <div className="text-[1.5rem] font-semibold">
                  {Math.floor(weather.temp)} °C
                </div>
                <div className="capitalize">{weather.desc}</div>
                <div className="flex justify-start items-center gap-1">
                  <IoLocationOutline />
                  {weather.city}, {weather.country}
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center w-full gap-[1rem] md:gap-[4rem]">
              <div className="flex justify-center items-center gap-4">
                <LuWaves size={"2rem"} />
                <div className="flex flex-col justify-center items-start">
                  <p className="font-semibold text-[0.9rem]">
                    {weather.humidity}%
                  </p>
                  <p className="text-[0.9rem]">Humidity</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-4">
                <LuWind size={"2rem"} />
                <div className="flex flex-col justify-center items-start">
                  <p className="font-semibold text-[0.9rem]">
                    {weather.wspeed} Kmph
                  </p>
                  <p className="text-[0.9rem]">Wind Speed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-flow-cols gap-2 justify-center items-center pt-4">
            <Cards city={city} />
          </div>
        </>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default MainWeather;
