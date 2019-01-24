/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
Each constructor function has unique properties and methods that are defined in their block comments below:

*/
  
/*
  === GameObject ===
  * createdAt
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method -> returns the string 'GameObject was removed from the game.' 
*/
// function GameObject(options) {
//     this.createdAt = options.createdAt;
//     this.dimensions = options.dimensions;
//     this.name = options.name;
//   }
  
//   GameObject.prototype.destroy = function () {
//     return `GameObject was removed from the game.`;
//   };

  class GameObject {
            //constructor
        constructor(options) {
            this.createdAt = options.createdAt;
            this.dimensions = options.dimensions;
            this.name = options.name;
        }
            //methods
        destroy() {
            return `GameObject was removed from the game.`;
        }
  } //end GameObject class


 
  
  /*
  === CharacterStats ===
  * healthPoints
  * name
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
  */
  
//   function CharacterStats(characterStatsOptions) {
//     GameObject.call(this, characterStatsOptions);
//     this.healthPoints = characterStatsOptions.healthPoints;
//   }
  
//   // Sets up inheritance with GameObject
//   CharacterStats.prototype = Object.create(GameObject.prototype);
  
//   CharacterStats.prototype.takeDamage = function () {
//     return `${this.name} took damage.`;
//   };
  
  class CharacterStats extends GameObject {
        constructor(characterStatsOptions) {
            // inheritance 
            super(characterStatsOptions);
            this.healthPoints = characterStatsOptions.healthPoints;
        }

        takeDamage() {
            return `${this.name} took damage.`;
        }
  } // end CharacterStats class

 
  /*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
  */
//   function Humanoid(humanoidOptions) {
//     CharacterStats.call(this, humanoidOptions);
//     this.team = humanoidOptions.team;
//     this.weapons = humanoidOptions.weapons;
//     this.language = humanoidOptions.language;
//   }
  
//   Humanoid.prototype = Object.create(CharacterStats.prototype);
  
//   Humanoid.prototype.greet = function () {
//     return `${this.name} offers a greeting in ${this.language}.`;
//   };
  

  class Humanoid extends CharacterStats{
        constructor(humanoidOptions) {
            super(humanoidOptions);
            this.team = humanoidOptions.team;
            this.weapons = humanoidOptions.weapons;
            this.language = humanoidOptions.language;
        }

        greet() {
            return `${this.name} offers a greeting in ${this.language}.`;
        }
  } // end Humanoid class

  
  /*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
  */
  
  
  // Test you work by un-commenting these 3 objects and the list of console logs below:
  
  
  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Toungue',
  });
  
  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });
  
  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });
  
  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!

/*
    // Step 1: Declare the class keyword
class Parent {
    // Step 2: Create a new constructor
    constructor(attributes) {
      this.age = attributes.age;
      this.location = attributes.location;
      this.name = attributes.name;
      this.phrase = attributes.phrase;
    }
    // Step 3: Methods
    speak() {
      console.log(`${this.name} says: ${this.phrase}`);
    }
  } // end of class
  
  class Child extends Parent {
    constructor(childAttributes) {
     super(childAttributes);
     this.toy = childAttributes.toy;
    }
    play() {
      console.log(`${this.name} plays with: ${this.toy}`);
    }
  }
  
  class Test extends Parent {
    constructor(testAttr) {
     super(testAttr);
     this.testThing = testAttr.testThing;
    }
    test() {
      console.log(`this test worked!`);
    }
  }
  
  class GrandChild extends Child {
    constructor(gChildAttributes) {
      super(gChildAttributes);
      this.newThing = gChildAttributes.newThing;
    }
    something() {
      console.log(`${this.name} does something with: ${this.newThing}`);
    }
  }
  
  // function GrandChild(gChildAttributes) {
  //   // bind the this keyword to the Parent constructor
  //   super(gChildAttributes)
  //   this.newThing = gChildAttributes.newThing;
  // }
  // // We are recreating the Child prototype to now include Parent as well.
  // GrandChild.prototype = Object.create(Child.prototype);
  
  // // Must place new methods AFTER the Object.create();
  // GrandChild.prototype.something = function() {
  //   console.log(`${this.name} does something with: ${this.newThing}`);
  // }
  
  
  
  const fred = new Parent({
    age: 35,
    name: "Fred",
    location: "Bedrock",
    phrase: "Yabba Dabba Do!",
    toy: "rock car"
  });
  
  const willma = new Parent({
    age: 37,
    name: "Willma",
    location: "Bedrock",
    phrase: "Fred!"
  });
  
  const pebbles = new Child({
    age: 32,
    name: "Pebbles",
    location: "Bedrock",
    phrase: "Ma Ma!",
    toy: "Rock Doll"
  });
  
  const bambamjr = new Test({
    age: 2,
    name: "Bam Bam Jr",
    location: "Bedrock",
    phrase: "BAM BAM",
    toy: "Rock",
    newThing: "Rock Bat",
    testThing: "testing123"
  });
  
  // console.log(fred.location)
  // console.log(willma.age)
  // console.log(pebbles.toy)
  // console.log(pebbles.age)
  // console.log(pebbles.name)
  // console.log(pebbles.location)
  // console.log(pebbles.phrase)
  
  // fred.speak();
  // willma.speak();
  // pebbles.speak();
  // pebbles.play();
  //bambamjr.play();
  bambamjr.test();
  //fred.play();
*/  