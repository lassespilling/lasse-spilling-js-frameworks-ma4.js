import React, { useState, useEffect } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom Components
import Preloader from "../layout/Preloader";
import RecipeItem from "./RecipeItem";

import { BASE_URL } from "../../data/api";
import Search from "./Search";

function RecipeList() {
    const [recipes, setRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => {
                setRecipes(json.results);
                setFilteredRecipes(json.results);
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    const filterCards = function(e) {
        // Let's get the value the user typed in and make it lower case:
        const searchValue = e.target.value.toLowerCase();

        // create a new array from the recipes array
        const filteredArray = recipes.filter(function(rec) {
            // make each name lowercase so we can check it properly with the search value
            const lowerCaseName = rec.title.toLowerCase();

            // check if the recipe name begins with the search value using the startsWith method
            if (lowerCaseName.startsWith(searchValue)) {
                // if it does, return true
                // this will add it to the new filtered array
                return true;
            }
            return false;
        });

        // set filtered recipes to the new array
        setFilteredRecipes(filteredArray);
    };

    if (loading) {
        return <Preloader text="Loading culinary goodness..." />; // Preloader
    }

    return (
        <>
            <Search handleSearch={filterCards} />
            <Row>
                {filteredRecipes.map(recipe => {
                    const { title, thumbnail, ingredients } = recipe;

                    return (
                        <Col xs={6} sm={6} md={3} key={title}>
                            <RecipeItem
                                title={title}
                                image={thumbnail}
                                ingredients={ingredients}
                            />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
}

export default RecipeList;
