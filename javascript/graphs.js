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
        if (!this.adjacentList[name]) {
            this.adjacentList[name] = [];
        }
    }

    // Assuming undirected graph
    // Add an Edge between two vertices (or connecting two nodes)
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
        if (this.adjacentList[name]) {
            for (const vertex of this.adjacentList[name]) {
                this.removeEdge(name, vertex);
            }
            delete this.adjacentList[name];
        }
    }

    /**
     *  DFS(vertex):
        if vertex is empty
            return (this is base case)
        add vertex to results list
        mark vertex as visited
        for each neighbor in vertex's neighbors:
        if neighbor is not visited:
          recursively call DFS on neighbor
     * 
     * 
     * 
     * The function should accept a starting node

        Create a list to store the end result, to be returned at the very end

        Create an object to store visited vertices

        Create a helper function which accepts a vertex

        The helper function should return early if the vertex is empty

        The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.

        Loop over all of the values in the adjacencyList for that vertex

        If any of those values have not been visited, recursively invoke the helper function with that vertex

        Invoke the helper function with the starting vertex

        Return the result array
     * 
     * @param {*} vertex 
     */

    DFS_Recursive(vertex) {
        let finalResult = [];
        let visited = {};
        const _this = this;
        function traverse(vertex) {
            if (_this.adjacentList[vertex].length === 0) {
                return;
            }
            visited[vertex] = true;
            finalResult.push(vertex);
            for (const v of _this.adjacentList[vertex]) {
                if (!visited[v]) {
                    traverse(v);
                }
            }
        }
        traverse(vertex);

        return finalResult;
    }

    /** Pseudocode
     * accet a start vertex/ node (start)
     * let S be a Stack
     * S.push(start)
     * while S is not empty
     *      vertex = s.pop()
     *      if vertex is not labeled as discovered
     *          visit vertex (add to result list)
     *          mark/ label as discovered
     *          for each vertex's neighbours 
     *              S.push(neighbor_vertex)
     * 
     * Full step by step pseudocode
     * 
     * the function should accept a starting node
     * Create a stack to help use keep track of vertices (use a list/ array)
     * Create a list to store the end result, to be returned at the very end 
     * Create an object to store the visited vertices
     * Add a starting vertex to the stack and mark it as visited
     * While the stack has something on it 
     *   - Pop the next vertex from the stack
     *   - if vertex hasnt been visited yet
     *      -  mark it as visited
     *      -  add to visited list
     *      - push all of its neighbors into stack
     * Return the result array
     * 
     * 
     * Usage:
     * 
     * DFS_Iterative('A')
     */
    DFS_Iterative(start) {
        const stack = [];
        const result = [];
        let visited  = {};
        stack.push(start);
        while(stack.length > 0) {
            let vertex = stack.pop();
            if(!visited[vertex]) {
                visited[vertex] = true;
                result.push(vertex);
                for(const v of this.adjacentList[vertex]) {
                    stack.push(v);
                }
            }
        }
        return result;
    }

    /**
     * BFS - Breadth first search
     * 1. the function should accept starting vertex/ node to start traversing
     * 2. create a queue and place starting vertex
     * 3. create a Map/ object to keep track of nodes visited
     * 4. mark the starting vertex as visited
     * 5. loop as long as elements are available in queue
     * 6. remove the first vertex and check if the vertex is not visited
     *      if not visted
     *          mark as visited
     *          loop the vertices if retrieved vertex from the queue
     *          add to queue (enqueue) 
     * 7. return the visited list/ array
     */
    BFS_Iterative(start_vertex) {
        const result = [];
        const visited = {
        };
        // queue operations map to array operations
        // enqueue = get the first element => array shift
        // dequeue = add element at the end => push oper
        const queue = [start_vertex];
        while(queue.length) {
            const vertex = queue.shift();
            if(!visited[vertex]) {
                result.push(vertex);
                visited[vertex] = true;
                for(const v of this.adjacentList[vertex]) {
                    queue.push(v);
                }
            }
            
            
        }
        return result;
    }
}
const g = new Graph();
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log('DFS_Recursive("A")', g.DFS_Recursive('A'));
console.log('DFS_Iterative("A")', g.DFS_Iterative('A'));
console.log('BFS_Iterative("A") ', g.BFS_Iterative('A'));