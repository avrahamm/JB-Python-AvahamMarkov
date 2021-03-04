let Cell = require('./Cell');

function compareNumbers(a, b) {
    return a - b;
}

module.exports = function(arr) {
    this.inputArr = arr;
    this.cellsArr = [];
    this.riverLengths = [];

    this.buildCellMatrix = function() {
        for ( let row=0; row < this.inputArr.length; row++) {
            let curRow = this.inputArr[row];
            let cellsRow = [];
            for( let col=0; col < curRow.length; col++) {
                let cell = new Cell(this.inputArr[row][col]);
                cellsRow[col] = cell;
            }
            this.cellsArr[row] = cellsRow;
        }
    }

    /**
     * iterate over all cells to find river lengths
     */
    this.calculateRiverLengths = function () {
        for( let row = 0; row < this.cellsArr.length; row++) {
            let curRow = this.cellsArr[row];
            for( let col = 0; col < curRow.length; col++ ) {
                let curCell = curRow[col];
                if (curCell.value === 0 || curCell.taken) {
                    continue;
                }
                const curRiverLength = this.calculateRiverLength(row, col);
                this.riverLengths.push(curRiverLength);
            }
        }
    }

    /**
     * called for cell with value 1 only
     * @param startRow
     * @param startCol
     * @returns {number}
     */
    this.calculateRiverLength = function (startRow, startCol) {
        let curRow = this.cellsArr[startRow];
        let curCell = this.cellsArr[startRow, startCol];
        // curCell.taken = true; // fails here
        let curRiverLength = 1;
        let rightLength = 0;
        if ((startCol + 1) < curRow.length ) {
            rightLength = this.calculateRiverLength(startRow, startCol + 1)
        }

        let bottomLength = 0;
        if ((startRow + 1) < this.cellsArr.length ) {
            bottomLength = this.calculateRiverLength(startRow + 1, startCol)
        }
        curRiverLength = curRiverLength + rightLength + bottomLength;
        return curRiverLength;
    }

    this.getRiverLengths = function () {
        this.calculateRiverLengths();
        console.log(this.cellsArr)
        return this.riverLengths.sort(compareNumbers);
    }
}
