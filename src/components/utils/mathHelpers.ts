export const round = (value: number, decimal: number) => {    
    return +(Math.round(+`${value}e+${decimal}`) + `e-${decimal}`);
}

export const randomInt = (max: number) => {
    return Math.floor(Math.random() * Math.floor(max));
}

export interface Point {
    x: number,
    y: number
}

export interface Line {
    length: number,
    angle: number
}

export const calculateLine = (pointA: Point, pointB: Point): Line => {
    const lengthX = pointB.x - pointA.x;
    const lengthY = pointB.y - pointA.y;
    
    return {
        length: Math.sqrt(Math.pow(lengthX, 2) + Math.pow(lengthY, 2)),
        angle: Math.atan2(lengthY, lengthX)
    }
}

export const controlPoint = (current: Point, previous: Point, next: Point, reverse: boolean): Point => {
    const firstPoint = previous || current;
    const secondPoint = next || current;

    // TODO: could be added to the params
    const smoothing = 0.2;
    const opposedLine = calculateLine(firstPoint, secondPoint);
    
    // Add PI if the point is the end one
    const angle = opposedLine.angle + (reverse ? Math.PI : 0);
    const length = opposedLine.length * smoothing;
    
    const x = current.x + Math.cos(angle) * length;
    const y = current.y + Math.sin(angle) * length;

    return {x, y};
}

export const bezierCommand = (points: Point[], index: number) => {
    const point = points[index];
    const startCP = controlPoint(points[index - 1], points[index - 2], point, false);
    const endCP = controlPoint(point, points[index - 1], points[index + 1], true);

    return `C ${startCP.x},${endCP.y} ${endCP.x},${endCP.y} ${point.x},${point.y}`;
}