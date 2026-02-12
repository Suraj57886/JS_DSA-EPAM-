// There are n computers numbered from 0 to n - 1 connected by ethernet cables connections forming a network where connections[i] = [ai, bi] represents a connection between computers ai and bi. Any computer can reach any other computer directly or indirectly through the network.

// You are given an initial computer network connections. You can extract certain cables between two directly connected computers, and place them between any pair of disconnected computers to make them directly connected.

// Return the minimum number of times you need to do this in order to make all the computers connected. If it is not possible, return -1.

 

// Example 1:


// Input: n = 4, connections = [[0,1],[0,2],[1,2]]
// Output: 1
// Explanation: Remove cable between computer 1 and 2 and place between computers 1 and 3.
// Example 2:


// Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2],[1,3]]
// Output: 2
// Example 3:

// Input: n = 6, connections = [[0,1],[0,2],[0,3],[1,2]]
// Output: -1
// Explanation: There are not enough cables.
 

// Constraints:

// 1 <= n <= 105
// 1 <= connections.length <= min(n * (n - 1) / 2, 105)
// connections[i].length == 2
// 0 <= ai, bi < n
// ai != bi
// There are no repeated connections.
// No two computers are connected by more than one cable.
var makeConnected = function(n, connections) {
    if(connections.length < n-1){
        return -1
    }
    let parent=new Map()
    let size=new Map()

    function find(x){
        if(parent.get(x)!==x){
            parent.set(x,find(parent.get(x)))
        }
        return parent.get(x);
    }
    function union(x,y){
        let rx=find(x)
        let ry=find(y)

        if(size.get(rx)<=size.get(ry)){
            parent.set(rx,ry);
            size.set(ry,size.get(rx)+size.get(ry))
        }else{
            parent.set(ry,rx)
            size.set(rx,size.get(rx)+size.get(ry))
        }
    }
    for(let i=0;i<n;i++){
        parent.set(i,i)
        size.set(i,1);
    }
    for(let connection of connections){
        let u=connection[0]
        let v=connection[1]
        union(u,v)
    }
    let parents=new Set()
    for(let i=0;i<n;i++){
        parents.add(find(i))
    }
    return parents.size-1
};