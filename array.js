/**
 * Created by user on 18.03.2017.
 */

function getRandomNumber (from, to) {
    return Math.round(from + Math.random() * (to - from));

}
function generateArray (m) {
    var length = Math.round(Math.random() * m)
    console.log(length);
    arr = new Array(length);
    for (var i = 0; i < length; i++) {
        arr[i] = getRandomNumber(0, 100);
    }
    return arr;
}
var result = generateArray(Number(prompt('Введите максимальную длину массива')));

for (var b = 0; b < result.length - 1; b++) {
    for (var a = 0; a < result.length - 1; a++) {
        if (result[a] > result[a + 1]) {
            var tmp = result[a];
            result[a] = result[a + 1];
            result[a + 1] = tmp;
        }
    }
}
console.log(result);