//See https://www.youtube.com/watch?v=aKYlikFAV4k
// Danniels shiffman's video

//This is based for animation the real version can be modified

var cols = 25;
var rows = 25;
var CScale = 15;
var grid = [];
var openSet = [];
var closeSet = [];
var start;
var end;
var path =[];







function setup() {
    createCanvas(CScale * cols, CScale * rows);
    console.log("Started")


    // on créé tout les noeuds
    for (var i = 0; i < cols; i++) {
        for (var j = 0; j < rows; j++) {

            grid.push(new Spot(i, j));

        }

    }
    // on met en place les voisins
    grid.forEach(spot => {
        spot.addNeighbors(grid);
    });

    start = grid[0];
    end = grid[cols * rows - 1];
    openSet.push(start);



}

function draw() {
    if (openSet.length > 0) {
        // on continue

        //on cherche le meilleur
        var winner = openSet[0];
        openSet.forEach(openSpot => {
            if (openSpot.f < winner.f) {
                winner = openSpot;
            }
        })

        //on définis le spot actuel
        var current = winner;

        // on vérifie si cela d'est pas la fin
        if (current === end) {
            path = [];
            var temp = current;
            path.push(temp);
            while(temp.previous){
                path.push(temp.previous)
                temp=temp.previous;
            }

            console.log("DONE!")


        }
        //on suprime notre element actuel de l'openset
        removeFromArray(openSet, current);
        //on ahjoute l'actuel a la closeSet
        closeSet.push(current);


        //pour tout les voisins de l'actuel
        var curNeighbors = current.neighbors;
        curNeighbors.forEach(neighbor => {
            // si le voisins n'est pas dans la closed set
            if (!closeSet.includes(neighbor)) {
                // On garde la distance depuis le début
                var tempG = current.g + 1;
                // si l'open list contient le voisin en question
                if (openSet.includes(neighbor)) {
                    // et notre valeure g est superieure a celle du voisi en question
                    if (tempG > neighbor.g) {
                        //alors on la met a jour
                        neighbor.g = tempG;
                    }
                }
                //sinon
                else {
                    neighbor.g = tempG;
                    openSet.push(neighbor);
                }
                //on met a jour la valeure heuristic
                neighbor.h = heuristic(neighbor, end);
                // et la totale
                neighbor.f = neighbor.g + neighbor.h;
                // on set le précédent
                neighbor.previous = current;

            }


        });


    } else {
        // pas de solution

    }


    background(200);






    //draw my grid
    grid.forEach(spot => {
        spot.show(200);
    });

    // Draw openset
    openSet.forEach(spot => {
        spot.show(color(0, 255, 0));
    });
    // Draw Close Set
    closeSet.forEach(spot => {
        spot.show(color(255, 0, 0));

    });

    // on désine le path
    path.forEach(spot => {
        spot.show(color(0, 0, 255));

    });















}