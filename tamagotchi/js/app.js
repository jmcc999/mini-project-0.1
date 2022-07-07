// alert("Say hello to your new Tamagotchi")
// set vars
let age = 0
let hunger = 0
let thirst = 0
let sleepiness = 0
let boredom = 0



//crete Tamagotchi class
class Tamagotchi {

  constructor(age, name, hunger, thirst, sleepiness, boredom){

    this.age = age
    this.name = prompt("what will you name your pet?")
    this.hunger = hunger
    this.thirst = thirst
    this.sleepiness = sleepiness
    this.boredom = boredom
  }
  //methods
  //ageing
  getOlder() {
      this.age++

  }

  // eating
    eat() {
      this.hunger --
      console.log("NOMNOMNOM!")
      console.log(this.hunger)
    }

  //drinking
    drink() {
      this.thirst --
      console.log("Gulp!")
      console.log(this.thirst)
    }

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

}

//new
const tommie = new Tamagotchi(0, Tamagotchi.name, 0, 0, 0, 0)

console.log(tommie)

const ageCounter = setInterval(tommie.getOlder, 3000)

console.log(ageCounter)

// tommie.eat()
// tommie.drink()
// tommie.sleep()
// tommie.play()

class Game {

    }
