//Part 1
const adventurer = {
name: "Robin",
health: 10,
inventory: ["sword", "potion", "artifact"],
companion: [
    {
      name: "Leo",
      type: "Cat",
    },
    {
      name: "Frank",
      type: "Flea",
      inventory: ["small hat", "sunglasses"],
    },
],
roll (mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`)
}
}
console.log(adventurer.roll())
console.log(adventurer.roll())
//Part 2 & 4
class Character {
static MAX_HEALTH = 100
  constructor (name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
  roll (mod = 0) {
const result = Math.floor(Math.random() * 20) + 1 + mod;
console.log(`${this.name} rolled a ${result}.`)
}
speak(sound) {
    console.log(sound);
  }
}

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
robin.roll();
robin.companion.roll();
robin.companion.companion.roll()

//Part 3 & 4
class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard"]
  constructor(name, role) {
    super(name);
    // Adventurers have specialized roles.
    if (Adventurer.ROLES.includes (role)){
        this.role = role;
    }
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }
  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  speak() {
    super.speak("Hello");
  }
}
class Companion extends Character {
  constructor(name, type, inventory) {
    super(name);
    this.inventory = inventory;
    this.type = type;
  }
  speak() {
    if (this.type !== "human") super.speak("Meow");
    else super.speak("Hi");
  }
}
const leo = new Companion("Leo", "Cat", ["tail"]);
const Robin = new Adventurer("Robin", "Healer")
const Frank = new Companion("Frank", "Flea", ["sunglasses", "small hat"])
console.log(Robin)
console.log(Frank)
//Part 5



