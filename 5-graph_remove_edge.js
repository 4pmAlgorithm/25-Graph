class Graph{
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(v1,v2){
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
    removeEdge(vertex1, vertex2){ //Dallas, aspen
        
        console.log(vertex2)
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( //filter only grab that under context
            function (v) {
                console.log("::::::v", v) //Dallas, Aspen 
                console.log("!!", v !== vertex2) //Dallas True, Aspen false
                return v !== vertex2 //grab only thet true, which is Dallas. Remove Aspen
            }
        );
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
            v => v !== vertex1 //remove Dallas
        );
    }
}

let g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
g.addEdge("Dallas", "Tokyo");
g.addEdge("Dallas", "Aspen");
console.log(g)
g.removeEdge("Dallas", "Aspen")
console.log(g)