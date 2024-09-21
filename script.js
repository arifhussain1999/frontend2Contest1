/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.
  filter(element=>element.profession==="developer")
  .map(element=>console.log(element.name));
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(element=>{
    if(element.profession==="developer")
    console.log(element.name);
  })
}

function addData() {
  //Write your code here, just console.log
  arr.push({ id: 4, name: "Arif", age: "25", profession: "developer" });
}

function removeAdmin() {
  //Write your code here, just console.log
  arr =arr.filter(element=>element.profession!=="admin")
}

function concatenateArray() {
  //Write your code here, just console.log
  const num =[
    {id: 5, name: "Alice", age: "23", profession: "designer"},
{id: 6, name: "Bob", age: "30", profession: "manager"},
{id: 7, name: "Charlie", age: "28", profession: "developer"},
{id: 8, name: "Diana", age: "26", profession: "tester"},
  ]

  arr=arr.concat(num);
}
