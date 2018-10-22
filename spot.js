class Spot {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];
        this.previous=undefined;
    }


    addNeighbors(gird) {
        
        if (this.x > 0) {
            this.neighbors.push(findInArray(grid,this.x - 1, this.y))
        }
        if (this.x < cols - 1) {
            this.neighbors.push(findInArray(grid,this.x + 1, this.y))
        }
        if (this.y > 0) {
            this.neighbors.push(findInArray(grid,this.x, this.y - 1))
        }
        if (this.y < rows - 1) {
            this.neighbors.push(findInArray(grid,this.x, this.y + 1))
        }
        


    }



    show(col) {
        stroke(20);
        fill(col);
        strokeWeight(2);
        rect(this.x * CScale, this.y * CScale, CScale, CScale)



    }
}