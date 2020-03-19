import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import FadeIn from "react-fade-in";
import IngredientList from "./IngredientList";

function RecipeItem({ title, image, ingredients }) {
    return (
        <FadeIn className="animate" childClassName="loaded">
            <Card>
                <div className="card-img-container">
                    <Card.Img variant="top" src={image} />
                </div>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Body>
                        <IngredientList ingredients={ingredients} />
                    </Card.Body>
                </Card.Body>
            </Card>
        </FadeIn>
    );
}

RecipeItem.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    ingredients: PropTypes.string.isRequired
};

export default RecipeItem;
