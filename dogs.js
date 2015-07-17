var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/dog_park");
mongoose.set('debug', true);

var newDogSchema = new mongoose.Schema({
  name: String,
  breed: String,
  age: Number
});

var Dog = mongoose.model("Dog", newDogSchema);

var dogNames = ["Jack", "Chloe", "Lucy", "Cooper", "Riley", "Bear", "Harley", "Lola"];

function mongooseDogEntry() {

  dogNames.forEach(function(dogName, counter) {
    Dog.create({
      name: dogName,
      breed: "Great Dane",
      age: Math.floor(Math.random() * 21 + 1)
    });
    console.log(dogName + " says: WRRRRUUUFFFFFFF");
  });
}

mongooseDogEntry();

Dog.find();
