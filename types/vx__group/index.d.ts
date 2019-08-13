// Type definitions for @vx/group 0.0.190
// Project: https://github.com/hshoff/vx
// Definitions by: Ferdy Budhidharma <https://github.com/ferdaber>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

import { SVGAttributes, Ref } from 'react';

export interface GroupProps extends SVGAttributes<SVGGElement> {
    top?: number;
    left?: number;
    innerRef?: Ref<SVGGElement>;
}

export function Group(props: GroupProps): JSX.Element;
