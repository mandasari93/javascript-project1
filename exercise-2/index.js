const names = [
  "Mr. Tatum",
  "Mr. Evan",
  "Mrs. Jolie",
  "Mr. Pitt",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hemsworth"
];

//lv: 0
names.map(name => console.log(`Meet with:  ${name}`));

//lv: 1
const newNames = names.filter(newNames => newNames.includes("Mr."));
console.log(newNames);

//lv: 2
const identify = names.map((name, index) => {
  if (name.includes("Mr.")) console.log(`${index + 1}. ${name} " (male)"`);
  else if (name.includes("Mrs."))
    console.log(`${index + 1}. ${name } " (female)"`);
});

//lv: 3
const searchName = name =>
  names.filter(x => (x.includes(name) ? console.log(x) : " "));
searchName("Hemsworth");

//lv: 4
const names1 = ["Mr. Fahri", "Mr. Abdul", "Mrs. Josephhine"];
const names2 = ["Mr. Joseph", "Mr. Paul", "Mrs. Paula", "Mr. Hakim"];
const together = names1.concat(names2);
console.log(together);

//lv: 5
const mixed = [
  "Mr. Fahri",
  null,
  undefined,
  "Mr. Abdul",
  24,
  "Mrs. Josephhine",
  "Mr. Joseph",
  "Mr. Paul",
  32,
  "Mrs. Paula",
  7,
  22,
  "Mr. Hakim"
];

function filterMix(value) {
  return typeof value === "number";
}
var filtered = mixed.filter(filterMix);

console.log(filtered);
