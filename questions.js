const initQs = [
  {
    type: "list",
    name: "petType",
    message: "What type of pet would you like?",
    choices: [
      "Dog",
      "Cat",
      "Rabbit",
      "Fish",
      "Turtle",
      "Chicken",
      "Monkey"
    ]
  },
  {
    type: "input",
    name: "petName",
    message: "What is your pet's name?"
  },
  {
    type: "number",
    name: "petAge",
    message: "How old is your pet?"
  }
];

module.exports = {
  initQs
}