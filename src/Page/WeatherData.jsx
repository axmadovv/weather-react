import React from "react";
import cloud from "../assets/images/cloud.png";
import temp from "../assets/images/temp.svg";
import davleniya from "../assets/images/davleniya.svg";
import yomgir from "../assets/images/yomgir.svg";
import wind from "../assets/images/wind.svg";
import CurrentCard from "./CurrentCard";
import { getTime } from "../helper/time";
import { getImage } from "../helper/images";
import WeekCard from "./WeekCard";
const WeatherData = ({ current, name, timezone, daily }) => {
    return (
        <div className="weather">
            <div className="container">
                <div className="weather__box">
                    <div className="weather__box-card card1">
                        <p className="weather__box-card-degree">
                            {current.temp.toFixed()}°
                        </p>
                        <h2 className="weather__box-card-text">Сегодня</h2>
                        <p className="weather__box-card-time">
                            Время: {getTime(timezone)}
                        </p>
                        <p className="weather__box-card-region">City: {name}</p>
                        <img
                            src={getImage(current.weather[0].description)}
                            alt=""
                            className="weather__box-card-img"
                        />
                    </div>
                    <div className="weather__box-card card2">
                        <img
                            src={cloud}
                            alt=""
                            className="weather__box-card-cloud"
                        />
                        <CurrentCard
                            img={temp}
                            title={"Температура"}
                            text={`${current.temp}° - ощущается как ${current.feels_like}°`}
                        />
                        <CurrentCard
                            img={davleniya}
                            title={"Давление"}
                            text={`${current.pressure} мм ртутного столба - нормальное`}
                        />
                        <CurrentCard
                            img={yomgir}
                            title={"Осадки"}
                            text={`${current.humidity}% ocaдки`}
                        />
                        <CurrentCard
                            img={wind}
                            title={"Ветер"}
                            text={`${current.wind_speed} м/с юго-запад - легкий ветер`}
                        />
                    </div>
                    <div className="weather__box-card card3">
                        {daily.slice(0, 7).map((day) => (
                            <WeekCard
                                key={day.dt}
                                day={day}
                                timezone={timezone}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeatherData;
