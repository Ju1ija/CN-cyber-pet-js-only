class Animal {
  constructor(type, name, age) {
    this.type = type
    this.name = name
    this.age = age
    this.happyLevel = 50
    this.hungerLevel = 50
    this.thirstLevel = 50
    this.tirednessLevel = 50
    this.healthLevel = 50
  }

  play() {
    if (this.happyLevel + 20 <= 100) {
      this.happyLevel += 20;
    } else {
      this.happyLevel = 100;
    }

    if (this.thirstLevel + 10 <= 100) {
      this.thirstLevel += 10;
    } else {
      this.thirstLevel = 100;
      this.healthLevel -= 5;
    }

    if (this.tirednessLevel + 10 <= 100) {
      this.tirednessLevel += 10;
    } else {
      this.tirednessLevel = 100;
      this.healthLevel -= 5;
    }

    if (this.healthLevel - 10 >= 0) {
      this.healthLevel -= 10;
    } else {
      this.healthLevel = 0;
    }
  }

  giveFood() {
    if (this.hungerLevel - 25 >= 0) {
      this.hungerLevel -= 25;
    } else {
      this.hungerLevel = 0;
    }

    if (this.happyLevel + 10 <= 100) {
      this.happyLevel += 10;
    } else {
      this.happyLevel = 100;
    }

    if (this.thirstLevel + 10 <= 100) {
      this.thirstLevel += 10;
    } else {
      this.thirstLevel = 100;
      this.healthLevel -= 5;
    }

    if (this.tirednessLevel + 10 <= 100) {
      this.tirednessLevel += 10;
    } else {
      this.tirednessLevel = 100;
      this.healthLevel -= 5;
    }

    if (this.healthLevel + 10 <= 100) {
      this.healthLevel += 10;
    } else {
      this.healthLevel = 100;
    }
  }

  giveDrink() {
    if (this.thirstLevel - 25 >= 0) {
      this.thirstLevel -= 25;
    } else {
      this.thirstLevel = 0;
    }

    if (this.hungerLevel - 10 >= 0) {
      this.hungerLevel -= 10;
    } else {
      this.hungerLevel = 0;
    }

    if (this.happyLevel + 10 <= 100) {
      this.happyLevel += 10;
    } else {
      this.happyLevel = 100;
    }
  }

  goToBed() {
    if (this.tirednessLevel - 40 >= 0) {
      this.tirednessLevel -= 40;
    } else {
      this.tirednessLevel = 0;
    }

    if (this.thirstLevel + 10 <= 100) {
      this.thirstLevel += 10;
    } else {
      this.thirstLevel = 100;
    }

    if (this.happyLevel + 10 <= 100) {
      this.happyLevel += 10;
    } else {
      this.happyLevel = 100;
    }

    if (this.healthLevel + 10 <= 100) {
      this.healthLevel += 10;
    } else {
      this.healthLevel = 100;
    }
  }
}

class Dog extends Animal {
  constructor(type, name, age) {
    super(type, name, age)
    this.shoesChewed = 0
  }
  chewShoe() {
    this.shoesChewed++;
    if (this.healthLevel - 10 >= 0) {
      this.healthLevel -= 10;
    } else {
      this.healthLevel = 0;
    }
    if (this.happyLevel - 10 >= 0) {
      this.happyLevel -= 10;
    } else {
      this.happyLevel = 0;
    }
  }
}

class Cat extends Animal {
  constructor(type, name, age) {
    super(type, name, age)
    this.furnitureScratched = 1
  }
  scratchFurniture() {
    this.furnitureScratched++;
    if (this.healthLevel - 10 >= 0) {
      this.healthLevel -= 10;
    } else {
      this.healthLevel = 0;
    }
    if (this.happyLevel - 10 >= 0) {
      this.happyLevel -= 10;
    } else {
      this.happyLevel = 0;
    }
  }
}

class Rabbit extends Animal {
  constructor(type, name, age) {
    super(type, name, age)
    this.carrotsEaten = 0
  }
  eatCarrot() {
    this.carrotsEaten++;
    if (this.healthLevel + 10 <= 100) {
      this.healthLevel += 10;
    } else {
      this.healthLevel = 100;
    }
  }
}

class Fish extends Animal {
  constructor(type, name, age) {
    super(type, name, age)
    this.jumpsOutOfBowl = 0
  }
  jumpOut() {
    this.jumpsOutOfBowl++;
    if (this.healthLevel - 20 >= 0) {
      this.healthLevel -= 20;
    } else {
      this.healthLevel = 0;
    }
    if (this.happyLevel - 20 >= 0) {
      this.happyLevel -= 20;
    } else {
      this.happyLevel = 0;
    }
  }
}

class Turtle extends Animal {
  constructor(type, name, age) {
    super(type, name, age)
    this.rolledOver = 1
  }
  rollOver() {
    this.rolledOver++;
    if (this.healthLevel - 15 >= 0) {
      this.healthLevel -= 15;
    } else {
      this.healthLevel = 0;
    }
    if (this.happyLevel - 15 >= 0) {
      this.happyLevel -= 15;
    } else {
      this.happyLevel = 0;
    }
  }
}

class Chicken extends Animal {
  constructor(type, name, age) {
    super(type, name, age)
    this.eggsLaid = 1
  }
  layEggs() {
    this.eggsLaid++;
    if (this.healthLevel - 10 >= 0) {
      this.healthLevel -= 10;
    } else {
      this.healthLevel = 0;
    }
    if (this.happyLevel - 10 >= 0) {
      this.happyLevel -= 10;
    } else {
      this.happyLevel = 0;
    }
  }
}

class Monkey extends Animal {
  constructor(type, name, age) {
    super(type, name, age)
    this.bananasEaten = 1
  }
  eatBanana() {
    this.bananasEaten++;
    if (this.healthLevel + 10 <= 100) {
      this.healthLevel += 10;
    } else {
      this.healthLevel = 100;
    }
  }
}

module.exports = {
  Dog,
  Cat,
  Rabbit,
  Fish,
  Turtle,
  Chicken,
  Monkey
}