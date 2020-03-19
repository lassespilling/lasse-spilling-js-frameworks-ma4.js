// React
import React from "react";

// URL
// import { BASE_URL } from "../../data/api";
export default class Bg extends React.Component {
    state = {
        loading: true
    };

    async componentDidMount() {
        // Asynchronous
        const bg = document.querySelector("#thebg");
        bg.src = `https://picsum.photos/${window.screen.width / 3}/${window
            .screen.height / 3}/?blur=5'`;
        bg.addEventListener("load", () => {
            setTimeout(() => {
                bg.classList.add("loaded");
            }, 1);
        });
    }

    render() {
        return <img id="thebg" alt="" />;
    }
}
