import React, { SFC, ReactNode } from "react";

export interface SvgProps {
    children: ReactNode,
    width?: number,
    height?: number
};

export const Svg: SFC<SvgProps> = (props) => {
    const { children, width, height } = props;

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            {children}
        </svg>
    );
};