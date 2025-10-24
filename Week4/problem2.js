//problem 1: temp conversion
//Abigail Hitchcock
//10/23/25

function countLeaves(days) {
    let leaves = 0;
    
    let total = "";
    if (days != 1) {
        for (let i = 1; i <= days; i++) {
            //for loop ensures the pattern continues to any day
            //the doubling day means nothing since its just + 10
            leaves += (10 * i);
            if (i == 1) {
                //if this is the first iteration, add the " (" to make the output match the intended output
                total += (" (" + 10 * i);
            }
            else {
                //otherwise type " + [num]" to keep the sequence going 
                total += (" + " + 10 * i);
            }
        }
        //add closing bracket
        total += (")");
        //return a combo of both rather than define a new string
        return (leaves + total);
    }  
    else {
        //if its day one, return one day worth of leaves
        return 10;
    }
}

function categorizeLeafColors(leaves) {
    let colorCount = {};
    //only run code if theres actual input
    if (leaves.length > 0){
        //repeat for each input
        for (let i = 0; i < leaves.length; i++){
            //if the color doesnt exist, make it exist with a count of 1
            if (colorCount[leaves[i]] == null) {
                colorCount[leaves[i]] = 1;
            }
            //otherwise, add one
            else {
                colorCount[leaves[i]] += 1;
            }
        }
        return colorCount
    }
    else {
        //if no input, give closed brackets
        return colorCount;
    }
    
}




console.log(countLeaves(1));
console.log(countLeaves(2));
console.log(countLeaves(4));
console.log(countLeaves(5));
console.log(categorizeLeafColors(["red", "yellow", "red", "brown"]));
console.log(categorizeLeafColors(["orange", "orange", "orange"]));
console.log([]);