class Cat {
  constructor(name, sex) {
    this.name = name,
    this.sex = sex
  }

  speak() {
    return `${this.name} says meow!`;
  }
}

class Dog {
  constructor(name, sex) {
    this.name = name,
    this.sex = sex
  }

  speak() {
    return `${this.name} says woof!`;
  }
}

class Bird {
  constructor(name, sex) {
    this.name = name,
    this.sex = sex
  }

  speak() {
    let message = "";

    if (this.sex == "male") {
      message = `It's me! ${this.name}, the parrot!`;
    } else {
      message = `${this.name} says squawk!`
    }

    return message;
  }
}
