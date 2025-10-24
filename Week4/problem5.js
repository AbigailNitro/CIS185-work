//problem 1: temp conversion
//Abigail Hitchcock
//10/23/25

function reverseArray(arr) {
    let newArray = [];
    //for loop in reverse order to get the index of arr descending
    for ( let i = arr.length - 1; i >= 0; i--) {
        //use array length to get the next position of input
        newArray[newArray.length] = arr[i];
    }
    return newArray;
}

function removeDuplicates(arr) {
    let newArray = [];
    //set the first value since that cannot be a duplicate
    newArray[0] = arr[0];
    //define check bool
    let isPresent = false;
    for ( let i = 1; i <= arr.length; i++) {
        //reset bool each loop
        isPresent = false;
        for ( let k = 0; k <= newArray.length; k++) {
            //scan each index of the new array to make sure it doesnt have the value youre trying to add
            if (newArray[k] == arr[i]) {
                //if its a dupe, set bool to true and end loop
                isPresent = true;
                break;
            }
            else {
                continue;
            }
                
            
        }
        if (isPresent) {
            //if theres a dupe, reset bool and check the next value
            continue
        }
        else {
            //if its not a dupe, add it to the new array
            newArray[newArray.length] = arr[i];
        }
    }
    return newArray;
}

function rotateArray(arr, positions) {
    let newArray = [];
    let timesShifted = 0;
    let rotated = "";
    //check to see if its rotated at all
    if (positions > arr.length) {
        rotated = " (" + positions + " % " + arr.length + " = ";
        //calculate new shift
        positions = positions % arr.length;
        if (positions > 1) {
            //check whether it should be with an S or not
            rotated += positions + " rotations)"
        }
        else {
            rotated += positions + " rotation)"
        }
    }
    for ( let i = 0; i < arr.length; i++) {
        if ((i + positions) >= arr.length) {
            //check if the newArray index needs to overflow back to the start
            newArray[timesShifted] = arr[i];
            //add to the counter to keep shifting over
            timesShifted++;
        }
        else {
            //normal placement
            newArray[i + positions] = arr[i];
        }
    }
    if (rotated != "") {
        //return rotation info if present
        return newArray + rotated; 
    }
    else {
        return newArray;
    }
}

function findSecondLargest(numbers) {
    let secondLargest = "";
    let largest = numbers[0];

    for ( let i = 1; i < numbers.length; i++) {
        if (secondLargest != "" && numbers[i] < largest && numbers[i] > secondLargest){
            secondLargest = numbers[i]; 
            continue;
        }
        if (numbers[i] < largest) {
            secondLargest = numbers[i]; 
        }
        else if (numbers[i] > largest) {
            largest = numbers[i];
            i = -1;
        }
        else {
            continue;
        }
    }
    if (secondLargest == "") {
        return null;
    }
    else {
        return secondLargest;
    }
}



console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArray(["a", "b", "c"]));
console.log(reverseArray([]));
console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));
console.log(removeDuplicates(["a", "b", "a", "c"]));
console.log(rotateArray([1, 2, 3, 4], 1));
console.log(rotateArray([1, 2, 3, 4], 2));
console.log(rotateArray([1, 2, 3], 4));
console.log(findSecondLargest([10, 20, 30, 40]));
console.log(findSecondLargest([5, 5, 5]));
console.log(findSecondLargest([100, 50, 100, 75]));
