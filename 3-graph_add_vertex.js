class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}



let g = new Graph()
g.addVertex("Seoul")
g.addVertex("San Francisco")
g.adjacencyList["Seoul"].push("han river")
console.log(g)