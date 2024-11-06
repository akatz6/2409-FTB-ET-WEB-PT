const form = document.querySelector("form");
const clear = document.getElementById("clear");
const sort = document.getElementById("sort");
const output = document.querySelector("#names output");
const arrNames = [];

const printAllNames = () => {
  output.innerHTML = arrNames;
};
form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(event.target);
  arrNames.push(`${data.get("first_name")} ${data.get("last_name")}`);
  printAllNames();
});

clear.addEventListener("click", function (event) {
  output.innerHTML = "";
});

sort.addEventListener("click", function (event) {
  arrNames.sort();
  printAllNames();
});

const arr = [10, 9, 64, 430];
console.log(arr.sort((a, b) => a - b));
// if(a <= b){
//     return a
// }else{
//     return b
// }
