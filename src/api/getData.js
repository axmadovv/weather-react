import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const apiKey = "4b1761979987c939363f387ad82845ff";
const getWeather = async ({ queryKey }) => {
    let city = queryKey[0];
    const res = await axios.get(
        `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`
    );
    const { lat, lon, name } = res.data[0];
    const res2 = await axios.get(
        `https://api.openweathermap.org/data/2.8/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=${apiKey}&units=metric&lang=ru`
    );
    return { ...res2.data, name };
};
export const getData = (city) => {
    return useQuery({ queryKey: [city], queryFn: getWeather });
};
