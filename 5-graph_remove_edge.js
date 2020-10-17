//3:37pm - 3:54pm
class Graph{
    constructor(){
        this.adjacencyList = {}
    }

    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.adjacencyList[vertex] = []
        }
    }

    addEdge(v1, v2){
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }

    removeEdge(v1,v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2) //t f
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1) //t f
    }
}

let g = new Graph();
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addEdge("B", "C");
g.addEdge("A", "B");
console.log(g)
g.removeEdge("A", "B")
console.log(g)



// class Graph{
//     constructor(){
//         this.adjacencyList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
//     }
//     addEdge(v1,v2){
//         this.adjacencyList[v1].push(v2);
//         this.adjacencyList[v2].push(v1);
//     }
    // removeEdge(vertex1, vertex2){ //Dallas, aspen    
    //     console.log(vertex2)
    //     this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter( //reassign it to filtered one w only grabbing the statement
    //         function (v) {
    //             console.log("::::::v", v) //Dallas, Aspen 
    //             console.log("!!", v !== vertex2) //Dallas True, Aspen false
    //             return v !== vertex2 //grab only thet true, which is Dallas. Remove Aspen
    //         }
    //     );
    //     this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
    //         v => v !== vertex1 //remove Dallas
    //     );
//     }
// }
