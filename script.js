

// js code
let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(employee =>{
        if(employee.profession ==="developer"){
            console.log(employee);
        }
    });
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    array.forEach(employee=> {
        if(employee.profession==="developer"){
            console.log(employee);
        }
    });
  }
  
  function addData() {
    //Write your code here, just console.log
    const newEmployee={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newEmployee);
    console.log(newEmployee);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr.filter(employee=>employee.profession!=="admin")
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const arr3=[{id:1,name:"john",age:"18",profession:"developer"},{id:2, name:"jack",age:"20", profession:"developer"},{id:3, name:"karen", age:"19",profession:"admin"}];
    const newArray=arr.concat(arr3);
    console.log(newArray);
  }