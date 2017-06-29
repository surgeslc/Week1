var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

// sort by name
students.sort(function(a, b) {
  var nameA = a.name;
  var nameB = b.name;
  var ageA = a.age;
  var ageB = b.age;

  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  // names are equal, which would return 0 so sort by age (descending)
  if (ageB < ageA) {
    return -1
  }
  if (ageB > ageA) {
    return 1;
  }
});

console.log(students);
/*INSTRUCTIONS
Say we have a list of students that we would like to sort in alphabetical order.
If students have the same name, then we prioritize the older student first.

Write a sorting function (sometimes called a custom comparator), that sorts the
above array first by the name ascending alphabetically, and in cases where the
names are equal sort by descending age.*/