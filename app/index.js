import { personsData } from "./api/getPersons.js";
import renderPersons from "./renderPersons.js";

const grid = document.querySelector(".grid");
const input = document.querySelector(".input");
const select = document.querySelector(".select");

function inputHandler(e) {
  //   const filteledData = [];

  //   for (let i = 0; i < personsData.length; i++) {
  //     if (personsData[i].name.toLowerCase().trim().includes(inputValue)) {
  //       filteledData.push(personsData[i]);
  //     }
  //   }

  const inputValue = e.target.value.toLowerCase().trim();
  const selectValue = select.value.toLowerCase().trim();

  let filteledData = personsData;

  if (selectValue != "") {
    filteledData = filteledData.filter((person) =>
      person.house.toLowerCase().trim().includes(selectValue)
    );
  }

  filteledData = filteledData.filter((person) =>
    person.name.toLowerCase().trim().includes(inputValue)
  );

  renderPersons(filteledData, grid);
}

function selectHandler(e) {
  const inputValue = input.value.toLowerCase().trim();
  const selectValue = e.target.value.toLowerCase().trim();

  let filteledData = personsData;

  if (inputValue != "") {
    filteledData = filteledData.filter((person) =>
      person.name.toLowerCase().trim().includes(inputValue)
    );
  }

  filteledData = filteledData.filter((person) =>
    person.house.toLowerCase().trim().includes(selectValue)
  );

  renderPersons(filteledData, grid);
}

input.addEventListener("input", inputHandler);
select.addEventListener("change", selectHandler);

renderPersons(personsData, grid);
