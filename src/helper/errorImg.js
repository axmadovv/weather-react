import error404 from "../assets/images/error/Error404.png";
import error401 from "../assets/images/error/Error401.png";
import errorFull from "../assets/images/error/ErrorFull.png";

export const getImage = (e) => {
    if (e.includes("404")) {
        return error404;
    } else if (e.includes("401")) {
        return error401;
    } else {
        return errorFull;
    }
};
