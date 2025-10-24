//problem 1: temp conversion
//Abigail Hitchcock
//10/23/25

function createPyramid(height) {
    let pyramid = "";
    for (let i = 0; i < height; i++) {
        for ( let j = 0; j < (height - (i + 1)); j++) {
            //add spaces equal to height - row number + 1
            pyramid += " ";
        }
        for ( let j = 0; j < (i * 2) + 1; j++) {
            //add stars equal to row * 2 + 1
            pyramid += "*";
        }
        //new line
        pyramid += "\n";
    }
    return pyramid;
}

function createNumberStaircase(steps) {
    let staircase = "";
    //repeat for each step
    for (let i = 0; i < steps; i++) {
        //add offset of 1 so that first step will always be 1
        for (let j = 1; j <= (i + 1); j++) {
            staircase += j;
        }
        //line break
        staircase += "\n";
    }
    return staircase;
}

function createCheckerboard(size) {
    let check = "";
    for (let i = 0; i < size; i++) {
        //check if we're on an even or odd row
        if (i % 2 == 0) {
            for (let j = 0; j < size; j++) {
                //write the x's and o's in sequence
                //this sequence will always start with X but the for loop ensures it continues with any size
                if (j % 2 == 0) {
                    check += "X";
                }
                else {
                    check += "O";
                }
            }
        }
        else {
            //offset for by 1 to get alternate string
            for (let j = 1; j <= size; j++) {
                if (j % 2 == 0) {
                    check += "X";
                }
                else {
                    check += "O";
                }
            }
        }
        //add line break
        check += "\n";
    }
    return check;
}



console.log(createPyramid(3));
console.log(createPyramid(4));
console.log(createNumberStaircase(5));
console.log(createCheckerboard(4));