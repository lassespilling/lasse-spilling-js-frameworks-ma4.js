// React
import React from "react";
import FadeIn from "react-fade-in";

// Bootstrap
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// Custom Components
import Preloader from "../layout/Preloader";
import RecipeItem from "./RecipeItem";

// URL
// import { BASE_URL } from "../../data/api";
export default class RecipeList extends React.Component {
    state = {
        loading: true,
        recipes: null
    };

    async componentDidMount() {
        // Asynchronous
        const url =
            "https://cors-anywhere.herokuapp.com/http://www.recipepuppy.com/api/";
        const bg = document.querySelector("#thebg");
        const response = await fetch(url); // Receives promise
        const data = await response.json(); // Returns JSON
        bg.src = `https://picsum.photos/${window.screen.width / 3}/${window
            .screen.height / 3}/?blur=5'`;

        this.setState({ recipes: data.results.slice(0, 3), loading: false }); // Update object with data from API (limited to 3 results for faster loading), remove preloader
        bg.addEventListener("load", () => {
            setTimeout(() => {
                bg.classList.add("loaded");
            }, 1);
        });
    }

    render() {
        if (this.state.loading) {
            return (
                <Preloader text="Loading culinary goodness..." /> // Preloader
            );
        }
        if (!this.state.recipes) {
            return <div>Could not load recipes...</div>;
        }
        return (
            <FadeIn className="animate" childClassName="loaded">
                <Row>
                    {this.state.recipes.map(recipe => {
                        const { title, thumbnail } = recipe;

                        return (
                            <Col xs={12} sm={6} md={4} key={title}>
                                <RecipeItem title={title} img={thumbnail} />
                            </Col>
                        );
                    })}
                </Row>
            </FadeIn>
        );
    }
}
