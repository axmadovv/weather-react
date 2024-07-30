import React from "react";

import { getData } from "./api/getData.js";
import WeatherData from "./Page/WeatherData.jsx";
import { useSelector } from "react-redux";
import Loader from "./Components/Loader.jsx";
import ErrorFetch from "./Components/ErrorFetch.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./Page/HomeLayout.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const App = () => {
    const city = useSelector((state) => state.weather.city);
    const { data, isLoading, isFetching, isError, error } = getData(city);
    if (isLoading || isFetching) return <Loader />;
    if (isError) return <div>{<ErrorFetch message={error.message} />}</div>;
    console.log(data.daily);
    if (data) {
        return (
            <>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<HomeLayout />}>
                            <Route
                                path="/"
                                element={
                                    <WeatherData
                                        current={data.current}
                                        name={data.name}
                                        timezone={data.timezone}
                                        daily={data.daily}
                                    />
                                }
                            ></Route>
                            <Route path="*" element={<ErrorPage />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </>
        );
    }
};

export default App;
