/**
 * Shortest path Dijkstas algorithm
 */

/**
 * Pseudo code
 * Credit: https://cs.slides.com/colt_steele/graphs#/120/0/0
 * 
 * This function should accept a starting and ending vertex
 * 
 * Create an object (we'll call it distances) and set each key to be every 
 * vertex in the adjacency list with a value of infinity, except for the 
 * starting vertex which should have a value of 0.
 * 
 * After setting a value in the distances object, add each vertex with a priority 
 * of Infinity to the priority queue, except the starting vertex, 
 * which should have a priority of 0 because that's where we begin.
 * 
 * Create another object called previous and set each key to be every vertex 
 * in the adjacency list with a value of null
 * 
 * Start looping as long as there is anything in the priority queue
 * dequeue a vertex from the priority queue
 * 
 * If that vertex is the same as the ending vertex - we are done!
 * 
 * Otherwise loop through each value in the adjacency list at that vertex
 * 
 * Calculate the distance to that vertex from the starting vertex
 * 
 * if the distance is less than what is currently stored in our distances object
 * update the distances object with new lower distance
 * update the previous object to contain that vertex
 * enqueue the vertex with the total distance from the start node
 */