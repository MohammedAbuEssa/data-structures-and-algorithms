"use strict";
const Vertex = require("./Vertex");
const Edge = require("./Edge");
class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }
  addVertex(vertex) {
    this.adjacencyList.set(vertex, []);
  }
  addDirectedEdge(start, end, weight) {
    if (!this.adjacencyList.has(start) || !this.adjacencyList.has(end)) {
      console.log(`vertex does not exist`);
      return;
    } else {
      const adjacencies = this.adjacencyList.get(start);
      let edge = new Edge(end, weight);
      adjacencies.push(edge);
    }
  }
  getVertices() {
    return Array.from(this.adjacencyList.keys());
  }
  getNeighbors(vertex) {
    if (this.adjacencyList.has(vertex)) {
      return this.adjacencyList.get(vertex);
    }
    return [];
  }
  size() {
    return this.adjacencyList.size;
  }
}

const graph = new Graph();

// Add vertices
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

// Get vertices
console.log("Vertices:", graph.getVertices());

graph.addDirectedEdge("A", "B");
graph.addDirectedEdge("B", "c");
graph.addDirectedEdge("A", "C");
// Get neighbors of a vertex
console.log("Neighbors of A:", graph.getNeighbors("A"));

// Get the size of the graph
console.log("Graph Size:", graph.size());
