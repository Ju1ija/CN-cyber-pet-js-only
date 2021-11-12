const inquirer = require("inquirer");
const { initQs } = require("./questions");
const { Dog, Cat, Rabbit, Fish, Turtle, Chicken, Monkey } = require("./classes");
let pet

const startGame = () => {
  inquirer
    .prompt(initQs)
    .then((answers) => {
      switch (true) {
        case answers.petType == "Dog":
          pet = new Dog(answers.petType, answers.petName, answers.petAge);
          break;
        case answers.petType == "Cat":
          pet = new Cat(answers.petType, answers.petName, answers.petAge);
          break;
        case answers.petType == "Rabbit":
          pet = new Rabbit(answers.petType, answers.petName, answers.petAge);
          break;
        case answers.petType == "Fish":
          pet = new Fish(answers.petType, answers.petName, answers.petAge);
          break;
        case answers.petType == "Turtle":
          pet = new Turtle(answers.petType, answers.petName, answers.petAge);
          break;
        case answers.petType == "Chicken":
          pet = new Chicken(answers.petType, answers.petName, answers.petAge);
          break;
        case answers.petType == "Monkey":
          pet = new Monkey(answers.petType, answers.petName, answers.petAge);
          break;
      }
    })
    .then(() => console.table(pet))
    .then(() => gameLoop())
}

const gameLoop = () => {
  if (pet.healthLevel == 0) {
    pet.happyLevel = 0;
    pet.hungerLevel = 0;
    pet.thirstLevel = 0;
    pet.tirednessLevel = 0;
    console.log(`Your pet ${pet.name} died.`);
    console.table(pet);
    return
  } else if (pet.healthLevel == 100) {
    console.log(`Congrats! Your pet ${pet.name} is very healthy!`);
    return
  }
  inquirer
    .prompt([
      {
        type: "list",
        name: "action",
        message: "What would you like to do?",
        choices: [
          "Play",
          "Feed",
          "Give water",
          "Let pet rest",
          "Other"
        ],
      },
    ])
    .then((answers) => {
      if (answers.action === "Play") {
        pet.play();
      } else if (answers.action === "Feed") {
        pet.giveFood();
      } else if (answers.action === "Give water") {
        pet.giveDrink();
      } else if (answers.action === "Let pet rest") {
        pet.goToBed();
      } else {
        switch (true) {
          case pet.type == "Dog":
            pet.chewShoe();
            console.log(`Oh no! ${pet.name} just chewed your favourite shoe!`);
            break;
          case pet.type == "Cat":
            pet.scratchFurniture();
            console.log(`Oh no! ${pet.name} just scratched another piece of your furniture!`);
            break;
          case pet.type == "Rabbit":
            pet.eatCarrot();
            console.log(`${pet.name} is really enjoying that carrot!`);
            break;
          case pet.type == "Fish":
            pet.jumpOut();
            console.log(`Oh no! ${pet.name} just jumped out of the bowl!`);
            break;
          case pet.type == "Turtle":
            pet.rollOver();
            console.log(`Ahh, ${pet.name} rolled over again...`);
            break;
          case pet.type == "Chicken":
            pet.layEggs();
            console.log(`Ooo, look at that! ${pet.name} just laid another egg!`);
            break;
          case pet.type == "Monkey":
            pet.eatBanana();
            console.log(`${pet.name} just stole another banana from the cupboard!`);
            break;
        }
      }
      console.table(pet);
    })
    .then(() => gameLoop())
}

startGame();