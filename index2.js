// Define an object constructor
function City(location, population, attractions, timezone) {
  this.location = location;
  this.population = population;
  this.attractions = attractions;
  this.timezone = timezone;
}

// Create City objects for Tokyo, Milan, and Ottawa
let TOKYO = new City("Japan", "37.4 million", ["Tokyo Tower", "Shinjuku Gyoen", "Meiji Shrine"], "UTC+9");
let MILAN = new City("Italy", "1.4 million", ["Duomo di Milano", "Sforza Castle", "Galleria Vittorio Emanuele II"], "UTC+2");
let OTTAWA = new City("Canada", "1 million", ["Parliament Hill", "Rideau Canal", "National Gallery of Canada"], "UTC-5");

// Create buttons for each city and link them to the objects
let cities = [TOKYO, MILAN, OTTAWA];
cities.forEach(city => {
  let button = document.createElement("button");
  button.textContent = `Explore ${city.location}`;
  document.body.appendChild(button);

  // Add an event listener to display city details
  button.addEventListener("click", function() {
      alert(
          `Location: ${city.location}\n` +
          `Population: ${city.population}\n` +
          `Attractions: ${city.attractions.join(", ")}\n` +
          `Time Zone: ${city.timezone}`
      );
  });
});
