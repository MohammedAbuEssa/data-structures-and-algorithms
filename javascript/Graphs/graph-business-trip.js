const Graph = require("./Graph.js");

function businessTrip(graph, cities) {
  // Initialize the cost to 0
  let cost = 0;

  // Check if the trip is possible and calculate the cost
  for (let i = 0; i < cities.length - 1; i++) {
    const currentCity = cities[i];
    const nextCity = cities[i + 1];
    const neighbors = graph.getNeighbors(currentCity);

    // Check if there's a direct flight between the current and next city
    const directFlight = neighbors.find(
      (neighborEdge) => neighborEdge.vertex === nextCity
    );

    if (directFlight) {
      cost += directFlight.weight;
    } else {
      return null; // There is no direct flight, return null
    }
  }

  return cost; // Return the total cost of the trip
}

// Example usage:
const flightGraph = new Graph();

flightGraph.addVertex("City A");
flightGraph.addVertex("City B");
flightGraph.addVertex("City C");

flightGraph.addDirectedEdge("City A", "City B", 100);
flightGraph.addDirectedEdge("City A", "City C", 200);
flightGraph.addDirectedEdge("City B", "City C", 50);

const citiesToVisit = ["City A", "City B", "City C"];

const tripCost = businessTrip(flightGraph, citiesToVisit);
if (tripCost !== null) {
  console.log(`The total cost of the trip is $${tripCost}`);
} else {
  console.log("The trip is not possible with direct flights.");
}
