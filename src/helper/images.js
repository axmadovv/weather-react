import day from "../assets/images/animated/day.svg";
import cloudy from "../assets/images/animated/cloudy.svg";
import rainy from "../assets/images/animated/rainy-1.svg";
import snowy from "../assets/images/animated/snowy-3.svg";
import thunder from "../assets/images/animated/thunder.svg";
export const getImage = (descr) => {
    if (descr == "ясно") {
        return day;
    } else if (descr.includes("дождь")) {
        return rainy;
    } else if (descr.includes("снег")) {
        return snowy;
    } else if (descr.includes("гром")) {
        return thunder;
    } else {
        return cloudy;
    }
};
