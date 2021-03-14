// Using Adjacent List implementation

class Graph {
    constructor() {
        this.adjacentList = {};
    }
    // Add a vertex 
    // 1. accepts a name of the vertex
    // 2. add a key to the adjacent list with the name of the vertex and sets its
    //    value to the empty array
    addVertex(name) {
        if(!this.adjacentList[name]) {
            this.adjacentList[name] = [];
        }
    }

    // Assuming undirected graph
    // Add an Edge between two vertices
    // 1. function should accept two verticies names
    // 2. find the adjancency list in vertex 2 and add the vertex 1 name in the array
    // 3. find the adjacency list in vertex 1 and add the vertex 2 name in the array
    addEdge(vertex1, vertex2) {
        if (this.adjacentList[vertex1]) {
            this.adjacentList[vertex1].push(vertex2);
        }
        if (this.adjacentList[vertex2]) {
            this.adjacentList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1, vertex2) {
    }
}