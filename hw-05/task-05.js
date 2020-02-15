'use strict';
class Car {
  constructor({speed = 0, price, maxSpeed, isOn = false, distance = 0}) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this.price = price;
  }

  set _price (price) {
    this.price = price;
  }

  get _price () {
    return this.price;
  }

  static getSpecs (car) {
    console.log (car);
  }

  turnOn () {
    this.isOn = true;
  }

  turnOff () {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate (value) {
    if (this.speed + value <= this.maxSpeed) {
      return (this.speed += value);
    }
  }

  decelerate (value) {
    if (this.speed - value !== 0) {
      return (this.speed -= value);
    }
  }

  drive (hours) {
    if (this.isOn === true) {
      return (this.distance += hours * this.speed);
    }
  }
}

const mustang = new Car ({maxSpeed: 200, price: 2000});

mustang.turnOn ();
mustang.accelerate (50);
mustang.drive (2);

Car.getSpecs (mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate (20);
mustang.drive (1);
mustang.turnOff ();

Car.getSpecs (mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log (mustang._price); // 2000
mustang.price = 4000;
console.log (mustang._price); // 4000
