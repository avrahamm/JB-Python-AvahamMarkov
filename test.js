const Matrix = require('./Matrix');

const arr1 = [[1,0]];

function magic(arr) {
    const matrix =  new Matrix(arr);
    matrix.buildCellMatrix();
    const result = matrix.getRiverLengths();
    // result = [1,1,2];
    return result;
}

console.log(magic(arr1));

