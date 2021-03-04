const arr1 = [1,1,0];

function magic(arr) {
    const matrix =  new Matrix(arr);
    const result = matrix.calculateRiverLengths();
    // result = [1,1,2];
    return result;
}

console.log(magic(arr1));

