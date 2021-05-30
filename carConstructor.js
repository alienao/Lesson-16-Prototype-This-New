// 4.Car Constructor
// Write a Car constructor that initializes model and milesPerGallon from arguments.
// All instances built with Car:
// should initialize with an tank at 0
// should initialize with an odometer at 0
// Give cars the ability to get fueled with a .fill(gallons) method. Add the gallons to tank. -
// STRETCH: Give cars ability to .drive(distance). The distance driven:
// Should cause the odometer to go up.
// Should cause the the tank to go down taking milesPerGallon into account.
// STRETCH: A car which runs out of fuel while driving can't drive any more distance:
// The drive method should return a string "Iran out of fuel at x miles!" x being odometer.

function carConstructor(model, milesPerGallon) {
  this.model = model;
  this.milesPerGallon = milesPerGallon;
  this.tank = 0;
  this.model = model;
  this.odometer = 0;
  this.fill = function (gallons) {
    this.tank += gallons;
  };
  this.drive = function (distance) {
    let maxDistance = this.tank / milesPerGallon;
    let restFuel = this.tank - distance * milesPerGallon;
    if (restFuel > 0) {
      this.tank = restFuel;
      this.odometer = distance;
      return `tank - ${this.tank}, odometer - ${this.odometer} `;
    }
    if (distance > maxDistance) {
      this.tank = 0;
      this.odometer = maxDistance;
      return `I ran out of fuel at ${this.odometer} miles!`;
    }
  };
  this.carInfo = function () {
    return `Car model is ${this.model} `;
  };
}

let lam = new carConstructor("Lamborghini", 4);
lam.fill(200);
console.log(lam.drive(200));
