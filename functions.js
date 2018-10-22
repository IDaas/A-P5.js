function removeFromArray(arr, obj) {

    for (i = arr.length - 1; i >= 0; i--) {
        if (arr[i] == obj) {
            arr.splice(i, 1);
        }

    }

}

function findInArray(arr, x, y) {
    for(var i=0; i<arr.length;i++){
        if (arr[i].x === x && arr[i].y === y) {
            return arr[i]
        }
    }


}

function heuristic(nodeA, nodeB){
    //return dist(nodeA.x,nodeA.y,nodeB.x,nodeB.y);
    return abs(nodeA.x-nodeB.x)+abs(nodeA.y-nodeB.y);

}