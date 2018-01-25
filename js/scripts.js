function Car(model, year, miles) {
  this.make = "Chevrolet";
  this.model = model;
  this.year = year;
  this.miles = miles;
};

function Garage(name) {
  this.name = name;
  this.cars = [];
};

Car.prototype.getYear = function() {
  return this.year;
};

Garage.prototype.carChoice = function() {
  var car = this.cars[Math.floor(Math.random()*this.cars.length)];
  return car.make;
};

Garage.prototype.addCar = function(car) {
  this.cars.push(car);
};

Garage.prototype.moveCar = function(newGarage) {
  var car = this.cars.pop();
  newGarage.cars.push(car);
};

$(document).ready(function() {
  var rayLewisGarage = new Garage("Ray's");
  var serviceGarage = new Garage("Ray's Service");
  console.log(serviceGarage);

  $("#serviceCars").click(function() {
    console.log(serviceGarage.carChoice());
    
  });

  $("#showCars").click(function() {
    console.log(rayLewisGarage.carChoice());
  });

  $("#carInfo").submit(function(event) {
    event.preventDefault();
    var carMake = $("#new-make").val();
    var carModel = $("#new-model").val();
    var carYear = $("#new-year").val();
    var carData = new Car(carMake, carModel, carYear);
    console.log(serviceGarage);
    rayLewisGarage.addCar(carData);


  });
});
