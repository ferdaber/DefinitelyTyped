// Type definitions for @vx/annotation 0.0.190
// Project: https://github.com/hshoff/vx
// Definitions by: Ferdy Budhidharma <https://github.com/ferdaber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { FunctionComponent, ReactNode, SVGAttributes, ComponentProps } from 'react';

type SVG = SVGAttributes<any>;

export interface LinePathAnnotationProps {
    top?: unknown;
    left?: unknown;
    points?: unknown;
    stroke?: SVG['stroke'];
    strokeWidth?: SVG['strokeWidth'];
    className?: SVG['className'];
    label?: ReactNode;
    labelAnchor?: SVG['textAnchor'];
    labelDx?: SVG['dx'];
    labelDy?: SVG['dy'];
    labelFill?: SVG['fill'];
    labelFontSize?: SVG['fontSize'];
    labelStroke?: SVG['stroke'];
    labelStrokeWidth?: SVG['strokeWidth'];
    labelPaintOrder?: SVG['paintOrder'];
}

export function LinePathAnnotation(props: LinePathAnnotationProps): JSX.Element;
