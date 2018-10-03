export function lineToAngle(x1, y1, length, radians) {
    var x2 = x1 + length * Math.cos(radians),
        y2 = y1 + length * Math.sin(radians);
    return { x: x2, y: y2 };
}

export function randomRange(min, max) {
    return min + Math.random() * (max - min);
}

export function degreesToRads(degrees) {
    return (degrees / 180) * Math.PI;
}
