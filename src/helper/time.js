export const getTime = (zone) => {
    return new Date().toLocaleString("en-US", {
        timeStyle: "short",
        timeZone: zone,
        hour12: false,
    });
};

export const getWeek = (dt) => {
    return new Date(dt * 1000).toLocaleString("ru-RU", {
        weekday: "short",
    });
};
export const getDate = (dt) => {
    return new Date(dt * 1000).toLocaleString("ru-RU", {
        day: "2-digit",
        month: "short",
    });
};
