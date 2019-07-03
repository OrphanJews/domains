export const findDomains = (matrix) => {
    const domains = [];
    const arr = matrix.map((arr) => {
        return arr.map((item) => {
            return item.value;
        });
    });

    for (const rowNumber in arr) {
        for (const columnNumber in arr[rowNumber]) {
            if (Number(arr[rowNumber][columnNumber]) === 1) {
                domains.push(getDomainFull(arr, parseInt(columnNumber), parseInt(rowNumber)));
            }
        }
    }

    return domains
};

function getDomainFull(data, x, y) {
    let dom = [];
    const flow = function (x, y) {
        if (x >= 0 && y < data.length && y >= 0 && x < data[y].length) {
            if (Number(data[y][x]) === 1) {
                data[y][x] = 0;
                dom.push({x: x, y: y});
                flow(x - 1, y);
                flow(x + 1, y);
                flow(x, y - 1);
                flow(x, y + 1);
            }
        }
    };
    flow(x, y);
    if (dom.length > 0) {
        return dom
    }
}