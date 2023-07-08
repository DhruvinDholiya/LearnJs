// 1 \\ === Finding the maximum element in an array.
let forMax = [99, 29, 56, 190, 8, 200, 111];
const findMaxNum = (array) => {
    let maxNum = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
    alert('maximum number is: ' + maxNum);
}

// 2 \\ === Finding the minimum element in an array.
let forMin = [99, 29, 56, 190, 19, 200, 111];
const findMinNum = (array) => {
    let minNum = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] < minNum) {
            minNum = array[i];
        }
    }
    alert('Minimum number is: ' + minNum);
}

// 3 \\ === Sorting an array in ascending order.
let unAscendingArray = [5, 1, 3, 6, 8, 4, 2, 9, 7, 10];
const ascending = (array) => {
    array.sort((num1, num2) => num1 - num2);
    alert(array);
}

// 4 \\ === Sorting an array in descending order.
let unDescendingArray = [5, 1, 3, 6, 8, 4, 2, 9, 7, 10];
const descending = (array) => {
    array.sort((num1, num2) => num2 - num1);
    alert(array);
}

// 5 \\ === Reversing an array.
let nonRevArray = [50, 40, 30, 20, 10];
const reversing = () => {
    nonRevArray.reverse();
    alert(nonRevArray);
}

// 6 \\ === Finding the sum of all elements in an array.
let arrayForSum = [5, 1, 3, 6, 8, 4, 2, 9, 7, 10];
const sumOfArray = (array) => {
    sum = 0;
    array.map((num) => sum += num);
    alert(sum);
}

// 7 \\ === Finding the average of all elements in an array.
let arrayForAvg = [5, 1, 3, 6, 8, 4, 2, 9, 7];
const avgOfArray = (array) => {
    let sum = 0, avg = 0;

    array.map((num) => sum += num);

    avg = sum / array.length;

    alert(res);
}

// 8 \\ === Checking if an array contains a specific element.
let containesArray = [90, 5, 63, 41, 41, 1, 5, 3];
const checkArray = (array, userNum) => {
    let ans = array.includes(userNum);

    alert(ans);
}

// 9 \\ === Removing duplicates from an array.
let arrayForCopyNum = [1, 1, 2, 3, 4, 5, 6, 6, 6];
const checkCopyArray = (array) => {
    let newArray = [];
    array.map((num) => {
        if (!newArray.includes(num)) {
            newArray.push(num);
        }
    });
    alert(newArray);
}

// 10 \\ === Merging two arrays into a new array.
let merginArrayOne = [10, 20, 30, 40, 50];
let merginArrayTwo = [1, 2, 3, 4, 5];
const merginArray = () => {
    let ans = merginArrayOne.concat(merginArrayTwo);
    alert(ans);
}

// 11 \\ ===  Splitting an array into two arrays based on a condition.
let commonArray = [81, 'd', 'h', false, , 4, 0, 'r', 69, 'u', , 'v', 'i', true, 18, 0, 'n', 1];
const forTwoArray = (array) => {
    let digitArray = [];
    let stringArray = [];
    array.map((arrayEle) => {
        if (typeof arrayEle === "number") {
            digitArray.push(arrayEle);
        } else if (typeof arrayEle === "string") {
            stringArray.push(arrayEle);
        }
    });
    console.log(digitArray);
    console.log(stringArray);
}


// 13 \\ === Rotating an array by a given number of positions.
let forRotateArray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const makeRotateArray = (array, ind) => {
    let rotateEle = array.slice(0, ind);
    let staticEle = array.slice(ind);

    let afterRotate = staticEle.concat(rotateEle);

    console.log(afterRotate);
}


// 14 \\ === Finding the second largest element in an array.
let SecMaxArray = [10, 10, 50, 150, 100, 100, 95, 63, 5, -149]
const findSecMax = (array, ind) => {
    let newMaxArray = [];
    array.map((value) => {
        if (!newMaxArray.includes(value)) {
            newMaxArray.push(value);
        }
    });

    console.log(newMaxArray);

    newMaxArray.sort((num1, num2) => num2 - num1);
    console.log(newMaxArray);

    console.log(newMaxArray[ind - 1]);
}

// 15 \\ === Finding the k-th smallest element in an array.
let kThArray = [10, 3, 34, 56, 39, 11, 18, 22, 76, 4, 45, 97];
const findKThSmallest = (array, k) => {
    let newSmallestarray = [];
    array.map((value) => {
        if (!newSmallestarray.includes(value)) {
            newSmallestarray.push(value);
        }
    });

    newSmallestarray.sort((num1, num2) => num1 - num2);
    console.log(newSmallestarray);

    let kThSmallest = newSmallestarray[k - 1];

    console.log(kThSmallest);
}

// 17 \\ === Finding the median of an array.
let medianArray = [8, 35, 98, 13, 7, 22];
const findMedian = (array) => {
    array.sort((num1, num2) => num1 - num2);
    console.log(array);
    
    let ind = Math.floor(array.length / 2);

    if (array.length % 2 === 0) {
        let medianEle = (array[ind - 1] + array[ind]) / 2;
        console.log(medianEle);

    } else {
        console.log(array[ind]);
    }
}

// 19 \\ === Checking if two arrays are equal or not.
let equalArray_1 = [1, 2, 3, 4, 5];
let equalArray_2 = [1, 2, 3, 4, 5];
const checkEqualArray = (array_1, array_2) => {
    let flag = 0;
    if (array_1.length === array_2.length) {
        for (let i = 0; i < array_1.length; i++) {
            if (array_1[i] !== array_2[i]) {
                flag = 1;
                break;
            }
        }
    } else {
        flag = 1;
    }

    if (flag === 1) {
        console.log('Here, Given both arraies are not same.');
    } else {
        console.log('Here, Given both arraies are same.');
    }
}













// findMaxNum(forMax);
// findMinNum(forMin);
// ascending(unAscendingArray);
// descending(unDescendingArray);
// reversing();
// sumOfArray(arrayForSum);
// avgOfArray(arrayForAvg);
// checkArray(containesArray, 63);
// checkCopyArray(arrayForCopyNum);
// merginArray();
// forTwoArray(commonArray);
// makeRotateArray(forRotateArray, 5);
// findSecMax(SecMaxArray, 3);
// findKThSmallest(kThArray, 3);
// findMedian(medianArray);
// checkEqualArray(equalArray_1, equalArray_2);