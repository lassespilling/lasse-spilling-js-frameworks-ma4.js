import React from "react"; // React
import PropTypes from "prop-types"; // Proptypes

// Bootstrap
import Spinner from "react-bootstrap/Spinner";

const Preloader = ({ text }) => {
    if (text === "") {
        text = "Loading...";
    }
    return (
        <div className="preloader">
            <div className="preloader__box">
                <Spinner
                    animation="border"
                    variant="dark"
                    className="preloader__spinner"
                />
                <p className="preloader__text">{text}</p>
            </div>
        </div>
    );
};

Preloader.propTypes = {
    text: PropTypes.string
};

export default Preloader;
