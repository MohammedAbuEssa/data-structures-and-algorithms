"use strict";

const movies = [
  { title: "The Shawshank Redemption", year: 1994, genres: ["Drama"] },
  { title: "The Godfather", year: 1972, genres: ["Crime", "Drama"] },
  { title: "Annie Hall", year: 1977, genres: ["Comedy", "Romance"] },
  { title: "A Beautiful Mind", year: 2001, genres: ["Biography", "Drama"] },
  { title: "Pulp Fiction", year: 1994, genres: ["Crime", "Drama"] },
  { title: "Scarface", year: 1983, genres: ["Crime", "Drama"] },
  { title: "Wrath of Man", year: 2021, genres: ["Crime", "Action"] },
];

function sortByYearDescending(movieArray) {
  return [...movieArray].sort((a, b) => b.year - a.year);
}

function removeLeadingArticles(title) {
  return title.replace(/^(A|An|The)\s+/i, "");
}

function sortByTitleIgnoringArticles(movieArray) {
  return [...movieArray].sort((a, b) => {
    const titleA = removeLeadingArticles(a.title);
    const titleB = removeLeadingArticles(b.title);
    return titleA.localeCompare(titleB);
  });
}

const sortedByYear = sortByYearDescending(movies);
const sortedByTitle = sortByTitleIgnoringArticles(movies);

console.log("Sorted by year:", sortedByYear);
console.log("Sorted by title (ignoring articles):", sortedByTitle);
