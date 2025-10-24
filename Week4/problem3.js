//problem 1: temp conversion
//Abigail Hitchcock
//10/23/25

function calculateAverage(scores){
    let avg = 0;
    if (scores.length > 0) {
        for (let i = 0; i < scores.length; i++) {
            avg += scores[i];
        }
        //return the overall average by dividing the total by amount of scores
        return (avg / scores.length);
    }
    else {
        //return 0 if no data is input
        return avg;
    }
}
function dropLowestScore(scores) {
    //define our minimum to be the first value to avoid a useless if statement in the for loop
    let minIndex = 0;
    //make new array
    let newScores = [];
    //start with the 2nd score since the 1st one is the smallest number at that point
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < scores[minIndex]) {
            //take note of the objects index if its score is less than the current lowest score
            minIndex = i;
        }
    }
    //define new array
    for (let i = 0; i < scores.length; i++) {
        if (i == minIndex) {
            //skip lowest value
            continue;
        }
        else if (i < minIndex) { 
            //add normally if the score hasnt been dropped yet
            newScores[i] = scores[i];
        }
        else { 
            //if the dropped score has already been fixed, do i-1 to ensure no empty values
            newScores[(i - 1)] = scores[i];
        }
    }
    
    return newScores;
    
}
function getLetterGrade(score) {
    //return the one letter depending on the score
    if (score <= 59) {
        return "F";
    }
    else if (score <= 69) {
        return "D";
    }
    else if (score <= 79) {
        return "C";
    }
    else if (score <= 89) {
        return "B";
    }
    //if above 89, its an A
    else {
        return "A";
    }
}
function curveGrades(scores, curveAmount) {
    //new array
    let newScores = [];
    for (let i = 0; i < scores.length; i++) {
        //ensure no score is above 100
        if (scores[i] > (100 - curveAmount)) {
            newScores[i] = 100;
        }
        else {
            //add the curve amount to the score if it'll end up being less than 100
            newScores[i] = scores[i] + curveAmount;
        }
    }
    return newScores;
}




console.log(calculateAverage([80, 90, 70]));
console.log(calculateAverage([100, 50, 75]));
console.log(calculateAverage([]));
console.log(dropLowestScore([80, 90, 70, 85]));
console.log(dropLowestScore([50, 50, 75, 100]));
console.log(getLetterGrade(95));
console.log(getLetterGrade(82));
console.log(getLetterGrade(58));
console.log(curveGrades([85, 95, 70], 10));
console.log(curveGrades([90, 96, 80], 5));