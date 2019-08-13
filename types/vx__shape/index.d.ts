// Type definitions for @vx/shape 0.0.190
// Project: https://github.com/hshoff/vx
// Definitions by: Ferdy Budhidharma <https://github.com/ferdaber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { SVGAttributes, Ref, ReactNode } from 'react';
import {
    stackOffsetExpand,
    stackOffsetDiverging,
    stackOffsetNone,
    stackOffsetSilhouette,
    stackOffsetWiggle,
    stackOrderAscending,
    stackOrderDescending,
    stackOrderInsideOut,
    stackOrderNone,
    stackOrderReverse,
    Arc as D3Arc,
    DefaultArcObject,
    PieArcDatum,
    Pie as D3Pie,
    Line as D3Line,
    CurveFactory,
    CurveFactoryLineOnly,
} from 'd3-shape';
import { GroupProps } from 'vx__group';
import { PointData } from 'vx__point';

export type ScalarAccessor<K, T> = K | ((data: T) => K);
export type ArrayAccessor<K, T> = K | ((datum: T, index: number, data: T[]) => K);

interface PathProps extends Omit<SVGAttributes<SVGPathElement>, 'd'> {
    innerRef?: Ref<SVGPathElement>;
}

export interface ArcProps<T = DefaultArcObject> extends PathProps {
    data?: T;
    innerRadius?: ScalarAccessor<number, T>;
    outerRadius?: ScalarAccessor<number, T>;
    cornerRadius?: ScalarAccessor<number, T>;
    startAngle?: ScalarAccessor<number, T>;
    endAngle?: ScalarAccessor<number, T>;
    padAngle?: ScalarAccessor<number, T>;
    padRadius?: ScalarAccessor<number, T>;
    children?(props: { path: D3Arc<any, T> }): ReactNode;
}
export function Arc<T = DefaultArcObject>(props: ArcProps<T>): JSX.Element;

export interface PieProps<T> extends PathProps, Pick<GroupProps, 'top' | 'left'> {
    data: T[];
    innerRadius?: ScalarAccessor<number, PieArcDatum<T>>;
    outerRadius?: ScalarAccessor<number, PieArcDatum<T>>;
    cornerRadius?: ScalarAccessor<number, PieArcDatum<T>>;
    padRadius?: ScalarAccessor<number, PieArcDatum<T>>;
    padAngle?: ScalarAccessor<number, T[]>;
    startAngle?: ScalarAccessor<number, T[]>;
    endAngle?: ScalarAccessor<number, T[]>;
    pieSort?: null | ((a: T, b: T) => number);
    pieSortValues?: null | ((a: number, b: number) => number);
    pieValue?: ArrayAccessor<number, T>;
    centroid?(centroid: [number, number], arc: PieArcDatum<T>): ReactNode;
    children?(props: { arcs: PieArcDatum<T>[]; path: D3Arc<any, PieArcDatum<T>>; pie: D3Pie<any, T> }): ReactNode;
}
export function Pie<T>(props: PieProps<T>): JSX.Element;

export interface LineProps
    extends Omit<SVGAttributes<SVGLineElement>, 'ref' | 'x1' | 'x2' | 'y1' | 'y2' | 'from' | 'to'> {
    from?: PointData;
    to?: PointData;
    innerRef?: Ref<SVGLineElement>;
}
export function Line(props: LineProps): JSX.Element;

export interface LinePathProps<T> extends Omit<PathProps, 'x' | 'y'> {
    data: T[];
    x?: ArrayAccessor<number, T>;
    y?: ArrayAccessor<number, T>;
    defined?: ArrayAccessor<boolean, T>;
    curve?: CurveFactory | CurveFactoryLineOnly;
    children?(props: { path: D3Line<T> }): ReactNode;
}
export function LinePath<T>(props: LinePathProps<T>): JSX.Element;

export function LineRadial(): JSX.Element;
export function Area(): JSX.Element;
export function AreaClosed(): JSX.Element;
export function AreaStack(): JSX.Element;
export function Bar(): JSX.Element;
export function BarGroup(): JSX.Element;
export function BarGroupHorizontal(): JSX.Element;
export function BarStack(): JSX.Element;
export function BarStackHorizontal(): JSX.Element;
export function Stack(): JSX.Element;
export function LinkHorizontal(): JSX.Element;
export function LinkVertical(): JSX.Element;
export function LinkRadial(): JSX.Element;
export function LinkHorizontalCurve(): JSX.Element;
export function LinkVerticalCurve(): JSX.Element;
export function LinkRadialCurve(): JSX.Element;
export function LinkHorizontalLine(): JSX.Element;
export function LinkVerticalLine(): JSX.Element;
export function LinkRadialLine(): JSX.Element;
export function LinkHorizontalStep(): JSX.Element;
export function LinkVerticalStep(): JSX.Element;
export function LinkRadialStep(): JSX.Element;
export function Polygon(): JSX.Element;
export function Circle(): JSX.Element;

interface StackOffsets {
    expand: typeof stackOffsetExpand;
    diverging: typeof stackOffsetDiverging;
    none: typeof stackOffsetNone;
    silhouette: typeof stackOffsetSilhouette;
    wiggle: typeof stackOffsetWiggle;
}
export const STACK_OFFSETS: StackOffsets;
export const STACK_OFFSET_NAMES: keyof StackOffsets;
export function stackOffset<K extends keyof StackOffsets = 'none'>(offset?: K): StackOffsets[K];

interface StackOrders {
    ascending: typeof stackOrderAscending;
    descending: typeof stackOrderDescending;
    insideout: typeof stackOrderInsideOut;
    none: typeof stackOrderNone;
    reverse: typeof stackOrderReverse;
}
export const STACK_ORDERS: StackOrders;
export const STACK_ORDER_NAMES: keyof StackOrders;
export function stackOrder<K extends keyof StackOrders = 'none'>(order?: K): StackOrders[K];

export function degreesToRadians(degrees: number): number;
export function pathHorizontalDiagonal(): void;
export function pathVerticalDiagonal(): void;
export function pathRadialDiagonal(): void;
export function pathHorizontalCurve(): void;
export function pathVerticalCurve(): void;
export function pathRadialCurve(): void;
export function pathHorizontalLine(): void;
export function pathVerticalLine(): void;
export function pathRadialLine(): void;
export function pathHorizontalStep(): void;
export function pathVerticalStep(): void;
export function pathRadialStep(): void;
export function getPoint(): void;
export function getPoints(): void;
