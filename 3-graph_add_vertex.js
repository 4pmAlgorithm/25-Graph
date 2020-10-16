class Graph{
    constructor(){
        this.adjacencyList = {}; //create an empty adjacency list obj 
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) { //if this vertex didn't exist
            this.adjacencyList[vertex] = []; //then create the vertex with an empty arr
    }
}



let g = new Graph()
g.addVertex("Seoul")
g.addVertex("San Francisco")
g.adjacencyList["Seoul"].push("han river")
console.log(g)