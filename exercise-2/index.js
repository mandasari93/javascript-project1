const names = [
  "Mr. Tatum",
  "Mr. Evan",
  "Mrs. Jolie",
  "Mr. Pitt",
  "Mr. Paul",
  "Mrs. Paula",
  "Mr. Hemsworth"
];

names.map(name => console.log("Meet with: " + name));

const newNames = names.filter(newNames => newNames.includes("Mr."))
console.log(newNames);

const identify = names.map((name, i) => {
    if (name.includes("Mr.")) console.log(`${i + 1}. ${name + " (male)"}`)
    else if (name.includes("Mrs.")) console.log(`${i + 1}. ${name + " (female)"}`)
}
)

const searchName = name =>
    names.filter(x => x.includes(name) ? console.log(x) : " ");
searchName("Hemsworth");
