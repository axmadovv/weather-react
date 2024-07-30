import React from "react";
import { getImage } from "../helper/errorImg";
import { RiArrowGoBackLine } from "react-icons/ri";
const ErrorFetch = ({ message }) => {
    return (
        <div className="error">
            <div className="error__box">
                <h1 className="error__box-title">Oops!</h1>
                <p className="error__box-text">{message}</p>
            </div>
            <img className="error__img" src={getImage(message)} alt="" />
            <a href="" className="error__btn">
                <RiArrowGoBackLine /> Go Home
            </a>
        </div>
    );
};

export default ErrorFetch;
