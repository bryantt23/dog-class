class Dog {
  constructor(name, breed, age, bark, favoriteFoods) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.bark = bark;
    this.favoriteFoods = favoriteFoods;
  }

  set currentAge(age) {
    this.age = age;
  }

  isFavoriteFood(food) {
    console.log(food, this.favoriteFoods);
    return this.favoriteFoods
      .map(food => food.toLowerCase())
      .includes(food.toLowerCase());
  }

  barks = () => {
    return this.age > 3 ? this.bark.toUpperCase() : this.bark;
  };
}

const dog = new Dog('Fido', 'German Shepard', 3, 'Bork!', ['Bacon', 'Chicken']);
console.log(JSON.stringify(dog));
console.log(dog.name);
console.log(dog.barks());
console.log(dog.favoriteFoods);
console.log(dog.favoriteFoods);
dog.currentAge = 42;
console.log(JSON.stringify(dog));
console.log(dog.barks());
console.log(dog.isFavoriteFood('Bacon'));
console.log(dog.isFavoriteFood('Banana'));
console.log(dog.isFavoriteFood('bacon'));
console.log(dog.isFavoriteFood('ChIckEn'));
