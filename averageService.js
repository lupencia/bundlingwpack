export function getAvg(color) {
    return getTotalScore(color) / color.length;
}

function getTotalScore(colors) {
    return colors.reduce((color, count) => color + count);
}