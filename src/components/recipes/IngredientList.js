import React from "react";
import PropTypes from "prop-types";

const IngredientList = ({ ingredients }) => {
    console.log(ingredients.split(", "));
    return (
        <ul>
            {ingredients.split(", ").map(item => {
                return <li key={item}>{item}</li>;
            })}
        </ul>
    );
};

IngredientList.propTypes = {
    ingredients: PropTypes.string.isRequired
};

export default IngredientList;
