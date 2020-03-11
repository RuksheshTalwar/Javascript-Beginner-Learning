// 6.	Convert [1,2,3,4,5] to [6,12,24,30,36,48] using for loop, push, pop etc.

function convertArr() {
    var arr = [1, 2, 3, 4, 5];
    arr.push(6, 8)

    for (i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 6
    }
    return arr
}

var newArr = convertArr()
console.log(newArr)