export let likedNames = JSON.parse(localStorage.getItem("likedNames")) ?? [];

export function likePerson(name) {
  likedNames.push(name);
  localStorage.setItem("likedNames", JSON.stringify(likedNames));
}

export function dislikePerson(name) {
  likedNames = likedNames.filter((person) => person !== name);
  localStorage.setItem("likedNames", JSON.stringify(likedNames));
}
