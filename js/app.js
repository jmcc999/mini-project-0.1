// alert("Say hello to your new Tamagotchi")
// set vars
let age = 0
let hunger = 0
let sleepiness = 0
let boredom = 0
let name = prompt("what will you name your Tamagotchi?")
if (name != null){
  document.getElementById("name").innerHTML = name
}
//crete Tamagotchi class
class Game {

  constructor(age, hunger, sleepiness, boredom){

    this.age = age
    this.hunger = hunger
    this.sleepiness = sleepiness
    this.boredom = boredom
  }
  //methods
  //ageing
  getOlder() {
      this.age++
      document.getElementById("age").innerHTML = ++age
      return this.age
  }

    eat() {
      this.hunger --
      document.getElementById("hunger").innerHTML = --hunger
      // console.log("NOMNOMNOM!")
      // console.log(this.hunger)
    }
  //drinking
  //sleeping
    sleep() {
      this.sleepiness --
      document.getElementById("sleepiness").innerHTML = --sleepiness
      // console.log("zZZZZZzzZZZZzzzzZZZ")
      // console.log(this.sleepiness)
    }

  // playing
    play() {
      this.boredom --
      document.getElementById("boredom").innerHTML = --boredom
      return this.boredom
      // console.log("WooHoo!")
      // console.log(this.boredom)
    }

    increaseHunger() {
      this.hunger ++
      document.getElementById("hunger").innerHTML = ++hunger
      if (hunger == 10) {
        clearInterval(tommie.increaseHunger)
        alert(`${name} starved to death GAME OVER!`)
      }else{
      return this.hunger
     }
    }
    increaseSleepiness() {
      this.sleepiness++
      document.getElementById("sleepiness").innerHTML = ++sleepiness
      if (sleepiness == 10) {
        clearInterval(sleepiness)
        alert(`${name} fainted GAME OVER!`)
      }else{
      return this.sleepiness
     }
  }
    increaseBoredom() {
      this.boredom ++
      document.getElementById("boredom").innerHTML = ++boredom
      if (boredom == 10) {
        clearInterval(boredom)
        alert(`${name} left to play with someone else GAME OVER!`)
      }else{
      return this.boredom
     }
    }


}

//instantiatestiate
const tommie = new Game(0, "Tamagotchi.name", 0, 0, 0)
//
// console.log(tommie)
//
//dsetintervals
start = () => {
setInterval(tommie.getOlder, 7500)

setInterval(tommie.increaseHunger, 4000)
setInterval(tommie.increaseBoredom, 5000)
setInterval(tommie.increaseSleepiness, 6000)
}
// if (boredom = 10 || hunger = 10 || sleepiness = 10){
//   clearInterval(boredom)
//   clearInterval(hunger)
//   clearInterval(sleepiness)
// }else{
//   return boredom
//   return hunger
//   return sleepiness
// }



// tommie.eat()
// tommie.drink()
// tommie.sleep()
// tommie.play()
