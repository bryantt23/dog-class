class Dog {
  constructor(name, breed, age, bark, favorite) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.bark = bark;
    this.favorite = favorite;
  }
}

console.log('hii');

const dog = new Dog('Fido', 'German Shepard', 3, 'Bork!', ['Bacon', 'Chicken']);
console.log(dog);
