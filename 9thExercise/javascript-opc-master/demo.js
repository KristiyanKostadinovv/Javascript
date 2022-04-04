'use strict';

(function() {
  const person ={
    fName: "Kris",
    lName: "Kostadnov",
    age: 22,
    checkAdult: function (){
      if(this.age >=18){
        console.log("adult");
        return this.age;
      }else {
        alert(this.age + "not an adult \n");
      }
    }
  };

  const health = {
    weight: 33,
    height: 160
  };

  display(person.checkAdult());

  function mergeObj(){
    const assigned = Object.assign({},person,health);
    console.log(assigned);
  }

  console.log(person);
  console.log(health);
  mergeObj();

})();
