import React, { useState } from "react";
import Search from "./Search";
import { WiHumidity } from "react-icons/wi";
import { IoIosThunderstorm } from "react-icons/io";

function Weather() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState(null);

  async function fetchWeatherData(param) {
    try {
      setLoading(true);
      const apiKey = "a6971b99bd2a1fd6658b3cf7a36a7c25";
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${param}&appid=${apiKey}`
      );
      const data = await resp.json();

      if (data) {
        setWeatherData(data);
        setLoading(false);
      }

      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }

  if (loading) {
    return <div>Loading... Please wait!</div>;
  }

  function handleSearch() {
    setSearch("");
    fetchWeatherData(search);
  }

  function getCurrentDate() {
    return new Date().toLocaleDateString("en-us", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const kelvinTemp = weatherData?.main?.temp;
  const celsiusTemp = kelvinTemp - 273;

  const weatherType = weatherData?.weather[0]?.main;

  return (
    <div>
      <Search
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
      />
      {weatherData ? (
        <div className="flex justify-center items-center mt-5">
          <div className="flex flex-col gap-3 ">
            <p className="text-2xl text-neutral-900 font-mono">
              Location : {weatherData?.name} ,{" "}
              <span>{weatherData?.sys?.country}</span>
            </p>

            <p className="text-lg text-neutral-900 font-mono">
              Temperature : {Math.round(celsiusTemp)}{" "}
              <span>
                <sup>o</sup>C
              </span>
            </p>

            <p className="flex items-center gap-2 text-lg text-neutral-900 font-mono">
              Humidity : {weatherData?.main?.humidity}{" "}
              <span className="text-2xl text-sky-300">
                <WiHumidity />
              </span>
            </p>

            <p className="text-lg text-neutral-900 font-mono">
              Description : {weatherData?.weather[0]?.description}
            </p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <div className="flex items-center justify-center w-full h-40 ">
            <p className="text-3xl text-neutral-700 font-mono font-bold tracking-tight"> Search Your City </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Weather;
