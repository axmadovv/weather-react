import React from "react";
import errorPage from "../assets/images/error/Error404.png";
import { RiArrowGoBackLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="error">
            <div className="error__box">
                <h1 className="error__box-title">Oops!</h1>
                <p className="error__box-text">
                    This page does not exist. Please go back!
                </p>
            </div>
            <img className="error__img" src={errorPage} alt="" />
            <NavLink to="/" className="error__btn">
                <RiArrowGoBackLine /> Go Home
            </NavLink>
        </div>
    );
};

export default ErrorPage;
