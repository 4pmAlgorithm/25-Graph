//2020/10/16
//6:39pm - 


// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex]){
//         this.adjacencyList[vertex] = []
//         }
//     }
//     addEdge(v1, v2){
//         this.adjacencyList[v1].push(v2)
//         this.adjacencyList[v2].push(v1)
//     }

//     removeEdge(v1, v2){
//         this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
//         this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
//     }
//     removeVertex(v){
//         while(this.adjacencyList[v].length){
//             let adjV = this.adjacencyList[v].pop()
//             this.removeEdge(v, adjV)
//         }
//         delete this.adjacencyList[v]
//     }
// }

// let g = new Graph
// g.addVertex("KEY1")
// g.addVertex("KEY2")
// g.addVertex("KEY3")

// g.addEdge("KEY2", "KEY3")
// g.addEdge("KEY1", "KEY3")
// g.addEdge("KEY1", "KEY2")

// //g.removeVertex("KEY3")
// console.log(g)


//10/16/2020
//4:42pm - 5:00pm 18min 
//6:17pm - 6:37pm 20min


// class Graph {
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         this.adjacencyList[vertex] = []
//     }

//     addEdge(v1, v2){
//         this.adjacencyList[v1].push(v2)
//         this.adjacencyList[v2].push(v1)
//     }

//     removeEdge(v1,v2){
//         this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
//         this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
//     }

//     removeVertex(v){
//         while(this.adjacencyList[v].length){
//             let adjacencyVortex = this.adjacencyList[v].pop()
//             this.removeEdge(v, adjacencyVortex)
//         }
//         delete this.adjacencyList[v]
//     }
// }












//4:00pm - 4:42pm

// class Graph{
//     constructor(){
//         this.adjacencyList = {}
//     }

//     addVertex(vertex){
//         this.adjacencyList[vertex] = []
//     }

//     addEdge(v1, v2){
//         this.adjacencyList[v1].push(v2)
//         this.adjacencyList[v2].push(v1)
//     }

//     removeEdge(v1, v2){
//         this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2)
//         this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1)
//     }

//     removeVertex(v){

//     while(this.adjacencyList[v].length){
//         let adjacencyVertex = this.adjacencyList[v].pop()
//         this.removeEdge(v, adjacencyVertex)
//     }
//     delete this.adjacencyList[v] 
// }
// }




















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
//     removeEdge(vertex1,vertex2){
//         this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
//             v => v !== vertex2
//         );
//         this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
//             v => v !== vertex1
//         );
//     }
//     removeVertex(vertex){
//         while(this.adjacencyList[vertex].length){ //iterating
//             const adjacentVertex = this.adjacencyList[vertex].pop(); //declare adjacentVertex, remove all the ele of arr of obj val
//             this.removeEdge(vertex, adjacentVertex); //removing the edge //removing both vertex, and adjacentVertex
//         }
//         delete this.adjacencyList[vertex] //remove the vertex (the key)
//     }
// // }

// let g = new Graph();
// g.addVertex("NY");
// g.addVertex("UTAH");
// g.addVertex("LA");
// g.addVertex("CHICAGO");
// g.addVertex("SEOUL")
// g.addEdge("NY", "CHICAGO");
// g.addEdge("CHICAGO", "LA");
// g.addEdge("LA", "UTAH");
// g.addEdge("UTAH", "SEOUL");
// g.addEdge("SEOUL", "LA");
// g.addEdge("LA", "NY");
// console.log(g)
// g.removeVertex("SEOUL")

// console.log(g)


