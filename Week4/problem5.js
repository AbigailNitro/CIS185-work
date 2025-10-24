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
    newArray[0] = arr[0];
    let isPresent = false;
    for ( let i = 1; i <= arr.length; i++) {
        let indexCheck = 0;
        isPresent = false;
        for ( let k = 0; k < newArray.length; k++) {
            
            if (newArray[k] == arr[i]) {
                isPresent = true;
                break;
            }
            else {
                continue;
            }
                
            
        }
        if (isPresent) {
            continue
        }
        else {
            newArray[newArray.length] = arr[i];
        }
    }
    return newArray;
}

function rotateArray(arr, positions) {

}

function findSecondLargest(numbers) {

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
