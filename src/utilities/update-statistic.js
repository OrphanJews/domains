export const updateStatistic = (statistic, newRow) => {
    const arr = statistic;

    if (arr.length === 10) {
        arr.shift();
    }
    arr.push(newRow);
    return arr;
};