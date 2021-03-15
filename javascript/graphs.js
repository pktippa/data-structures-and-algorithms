// Using Adjacent List implementation

class Graph {
    constructor() {
        this.adjacentList = {};
    }
    // Vertex is nothing but Node
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
    // the function should reassign the key of vertex1 to be an array
    // that does not contain vertex2
    // the function should reassign the key of vertex2 to be an array
    // that does not contain vertex1
    removeEdge(vertex1, vertex2) {
        // const idx = this.adjacentList[vertex1].indexOf(vertex2);
        // this.adjacentList[vertex1].splice(idx, 1);

        // const idx2 = this.adjacentList[vertex2].indexOf(vertex1);
        // this.adjacentList[vertex2].splice(idx2, 1);

        // Alternative implementation, filter not required ones
        this.adjacentList[vertex1] = this.adjacentList[vertex1].filter(vertex => vertex !== vertex2);
        this.adjacentList[vertex2] = this.adjacentList[vertex2].filter(vertex => vertex !== vertex1);
    }

    // My intuition:
    // vertex can be part of edges
    // so if we remove a vertex, loop through all the other vertices that are connected through edges
    // and for each of these edges call removeEdge

    // From course:
    removeVertex(name) {
        if(this.adjacentList[name]) {
            for(const vertex of this.adjacentList[name]) {
                this.removeEdge(name, vertex);
            }
            delete this.adjacentList[name];
        }
    }
}