import { personsData } from "./api/getPersons.js";
import { likedNames } from "./likePerson.js";
import renderPersons from "./renderPersons.js";

const grid = document.querySelector(".grid");

const likedCards = personsData.filter((person) =>
  likedNames.includes(person.name)
);

renderPersons(likedCards, grid);
