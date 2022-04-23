const matrix1 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
];

const matrix2 = [
    [1, 2, 3],
    [4, 5, []],
    [7, 8, 9],
    [null, 11, 12],
    [13, 14, NaN],
];

const matrix3 = [
    [1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25],
];

const rotate90DegreeWithoutDiagonals = (matrix) => {
    const result = [];
    const length = matrix.length;

    matrix.forEach((row, rowIndex) => {
        if (length !== row.length) {
            throw new RangeError("Incorrect value");
        }
        const temp = [];
        row.forEach((column, columnIndex) => {
            if (
                rowIndex == columnIndex ||
                rowIndex + columnIndex === length - 1
            ) {
                temp.push(matrix[rowIndex][columnIndex]);
            } else {
                temp.push(matrix[length - columnIndex - 1][rowIndex]);
            }
        });
        result.push(temp);
    });

    return result;
};

const rotate90Degree = (matrix) => {
    const result = [];
    const rowLength = matrix.length;

    matrix.forEach(function (row, rowIndex) {
        const temp = [];

        row.forEach(function (column, columnIndex) {
            result[columnIndex] = result[columnIndex] || [];
            result[columnIndex][rowLength - rowIndex - 1] = column;
        });
    });
    return result;
};

const calculateRotationNumber = (deg) => {
    if (deg % 90 !== 0) {
        throw new RangeError("Incorrect value");
    }

    deg = (deg % 360) / 90;
    deg += deg < 0 ? 4 : 0;

    return deg;
};

const rotate = (matrix, deg) => {
    const r = calculateRotationNumber(deg);

    return Array.from({ length: r }).reduce((a, e) => {
        return rotate90Degree(a);
    }, matrix);
};
const rotateWithoutDiagonals = (matrix, deg) => {
    const r = calculateRotationNumber(deg);

    return Array.from({ length: r }).reduce((a, e) => {
        return rotate90DegreeWithoutDiagonals(a);
    }, matrix);
};
// console.log(rotate(matrix2, 90));
// console.log(rotateWithoutDiagonals(matrix3, 270));
