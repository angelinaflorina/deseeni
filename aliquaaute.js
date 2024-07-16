function lerp(array, frac) {
    var start = Math.floor(frac * (array.length - 1));
    var end = start + 1;
    var frac2 = frac * (array.length - 1) - start;
    return array[start] * (1 - frac2) + array[end] * frac2;
}
