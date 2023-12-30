
'use strict';

import { api_key, link } from "./api_key.js";

const container = document.getElementById("movies");
const searchInput = document.getElementById("search");

const displayUpcomingMovies = async () => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`);
        const { results } = await res.json();

        const movieCards = results.map(({ backdrop_path, original_title, vote_average, id }) => (`
            <div class="content">
            <a href="https://www.themoviedb.org/movie/${id}" target="_blank">
            <img src=https://image.tmdb.org/t/p/w500${backdrop_path} alt="${
                original_title}" />
            </a>
                <p><strong> ${original_title}</strong></p>
                <a href="https://www.themoviedb.org/movie/${id}" target="_blank">Show Detail</a> <br>
                <progress value=${vote_average * 10} max="100"></progress>
            </div>
        `)).join("");

        
        container.innerHTML = movieCards;
    } catch (error) {
        console.error(error);
    }
};

const searchMovies = async (title) => {
    try {
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${title}`);
        const { results } = await res.json();

        const movieCards = results.map(({ backdrop_path, original_title, vote_average, id }) => (`
            <div class="content" onclick="fetchAndDisplayMovieDetails('${backdrop_path}', '${original_title}')">
            <a href="https://www.themoviedb.org/movie/${id}" target="_blank">
            <img src=https://image.tmdb.org/t/p/w500${backdrop_path} alt="${
                original_title}" />
            </a>
                <p><strong> ${original_title}</strong></p>
                <a href="https://www.themoviedb.org/movie/${id}" target="_blank">Show Detail</a> <br>
                <progress value=${vote_average * 10} max="100"></progress>
            </div>

            </div>
        `)).join("");

        container.innerHTML = movieCards;
    } catch (error) {
        console.error(error);
    }
};

document.getElementById("searchs").addEventListener("click", () => {
    const searchValue = searchInput.value.trim();
    if (searchValue !== "") {
        searchMovies(searchValue);
    }
});

displayUpcomingMovies();
