import React from "react";

const CurrentCard = ({ img, title, text }) => {
    return (
        <div className="weather__box-card-card">
            <div className="weather__box-card-card-card">
                <img src={img} alt="" />
            </div>

            <p className="weather__box-card-card-info">{title}</p>
            <p className="weather__box-card-card-text">{text}</p>
        </div>
    );
};

export default CurrentCard;
