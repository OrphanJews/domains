export const getArrayEmpty = (width, height) => {
    const arr = [];

    for (let x = 0; x < height; x++) {
        const test = [];
        for (let y = 0; y < width; y++) {
            test.push({value: 0, color: '#ffffff'});
        }
        arr.push(test);
    }

    return arr;
};