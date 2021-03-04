const Matrix = require('./Matrix');

const arr1 = [
    [1,0,0,1],
    [0,0,1,0],
    [1,0,1,0],
    [1,0,1,0],
];

const arr2 = [
    [0,0,0,1,0,0,0,1],
    [1,1,0,0,0,0,1,0],
    [0,0,0,0,1,1,0,1],
    [1,1,1,0,0,0,0,0],
];

const arr3 = [
    [0,0,0,0,1],
    [0,1,1,1,0],
    [0,1,0,1,0],
    [0,1,1,1,0],
    [1,0,0,0,0],
];

function magic(arr) {
    const matrix =  new Matrix(arr);
    matrix.buildCellMatrix();
    return matrix.getRiverLengths();
}

console.log(magic(arr1));
console.log(magic(arr2));
console.log(magic(arr3));

