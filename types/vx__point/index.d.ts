// Type definitions for @vx/point 0.0.190
// Project: https://github.com/hshoff/vx
// Definitions by: Ferdy Budhidharma <https://github.com/ferdaber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

export interface PointData {
    x: number;
    y: number;
}

export class Point {
    x: number;
    y: number;

    constructor(data: PointData);

    value(): PointData;

    toArray(): [number, number];
}
