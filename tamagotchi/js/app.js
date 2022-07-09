// alert("Say hello to your new Tamagotchi")
// set vars
let age = 0
let hunger = 0
let sleepiness = 0
let boredom = 0



//crete Tamagotchi class
class Tamagotchi {

  constructor(age, name, hunger, sleepiness, boredom){

    this.age = age
    this.name = prompt("what will you name your pet?")
    this.hunger = hunger
    this.sleepiness = sleepiness
    this.boredom = boredom
  }
  //methods
  //ageing

  getOlder() {
      this.age++
      document.getElementById("age").innerHTML += Tamagotchi.age
      return this.age
  }

  // getAge() {
  // document.getElementById("age").innerHTML += "this.age"

  // eating
    eat() {
      this.hunger --
      console.log("NOMNOMNOM!")
      console.log(this.hunger)
    }

  //drinking


  //sleeping
    sleep() {
      this.sleepiness --
      console.log("zZZZZZzzZZZZzzzzZZZ")
      console.log(this.sleepiness)
    }

  // playing
    play() {
      this.boredom --
      console.log("WooHoo!")
      console.log(this.boredom)
    }
    increaseHunger() {
      this.hunger = hunger++
      return this.hunger
    }
    increaseBoredom() {
      this.boredom ++
    }

    increaseSleepiness() {
      this.sleepiness++
    }
}

//new
const tommie = new Tamagotchi(0, "Tamagotchi.name", 0, 0, 0)
//
console.log(tommie)
//
const ageCounter = setInterval(tommie.getOlder, 3000)
//
// console.log(tommie.getAge)
setInterval(tommie.increaseHunger, 1000)
console.log(hunger)
// tommie.eat()
// tommie.drink()
// tommie.sleep()
// tommie.play()
// const hungry = () => {
//   setInterval(tommie.increaseHunger++, 3000)
//   return tommie.hunger
//   console.log(tommie.hunger)
// }
class Game {

    }
