import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

function RecipeItem({ title, img }) {
    return (
        <Card>
            <div className="card-img-container">
                <Card.Img variant="top" src={img} />
            </div>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
        </Card>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    button: PropTypes.string,
    img: PropTypes.string
};

export default RecipeItem;
