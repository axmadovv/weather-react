import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    day: true,
    city: 'Tashkent',
    weather: {}
}

export const weather = createSlice({
    name: "weather",
    initialState,
    reducers: {
        setDay: (state) => { state.day = !state.day },
        setCity: (state, actions) => {
            state.city = actions.payload
        },
        setWeather: (state, actions) => {
            state.weather = actions.payload
        }
    }
})

export const { setDay, setCity ,setWeather} = weather.actions
export default weather.reducer

