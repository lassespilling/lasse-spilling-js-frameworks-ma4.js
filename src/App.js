import React from "react";
import "./sass/main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeList from "./components/recipes/RecipeList";
import Bg from "./components/layout/Bg";

function App() {
    return (
        <div className="App">
            <Bg />
            <RecipeList />
        </div>
    );
}

export default App;
