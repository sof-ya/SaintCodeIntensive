import createPerson from "./createPerson.js";
import { likedNames } from "./likePerson.js";

function renderPersons(data, gridElem) {
  gridElem.innerHTML = "";
  data.forEach((person) => {
    const personCard = createPerson(
      person,
      likedNames.includes(person.name),
      data
    );
    gridElem.appendChild(personCard);
  });
}

export default renderPersons;
