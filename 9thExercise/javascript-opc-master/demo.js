'use strict';

/*
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
*/

/* function info(fname,lname, age){
   this.fname = fname;
   this.lname = lname;
   this.age = age;
   this.checkAdult = () => {return this.age >=18};

 }

 const createInfo = new info("Gosho", "Goshov", 22);
 console.log(createInfo.checkAdult());
 display(createInfo);
 */


/*
  const objectPerson = {
    fName: "Kris",
    lName: "Kostadinov",
    age: 22
  }
  for (let loop in objectPerson)
  {
    display(loop + ": " + objectPerson[loop]);
    /!*loop = loop + objectPerson[loop];
    display(loop);*!/
  }*/

class Person {
    constructor(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }

    get getfullName() {
        return this.fname + " " + this.lname;
    }

    set setfullName(fullname){
      let part = fullname.split(" ");
      this.fname = part[0];
      this.lname = part[1];
    }

}

const p1 = new Person("Kris", "Kostadinov", 22);
p1.setfullName = "Mitko Berbatov"
display(p1.getfullName);
/*
const p1 = new Person("Kris", "Kostadinov", 22);
display();
const p2 = new Person("Ivan", "Petrov", 22);
display(p2.fullName);*/
