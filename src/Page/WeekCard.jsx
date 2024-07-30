import React from "react";
import { getImage } from "../helper/images";
import { getWeek, getDate } from "../helper/time";

const WeekCard = ({ day }) => {
    return (
        <div className="weather__box-card-week">
            <h2 className="weather__box-card-week-title">{getWeek(day.dt)}</h2>
            <p className="weather__box-card-week-date">{getDate(day.dt)}</p>
            <img
                src={getImage(day.weather[0].description)}
                alt=""
                className="weather__box-card-week-img"
            />
            <p className="weather__box-card-week-temperatureMax">
                +{day.temp.day.toFixed()}°
            </p>
            <p className="weather__box-card-week-temperatureMin">
                +{day.temp.morn.toFixed()}°
            </p>
            <p className="weather__box-card-week-status">
                {day.weather[0].description.charAt(0).toUpperCase() +
                    day.weather[0].description.slice(1)}
            </p>
        </div>
    );
};

export default WeekCard;
