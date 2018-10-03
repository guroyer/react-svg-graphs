import React, { SFC, ReactNode } from "react";

export interface SvgProps {
    children: ReactNode,
    width?: number,
    height?: number
};

const Svg: SFC<SvgProps> = ({ children, width, height }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
            {children}
        </svg>
    );
};

export default Svg;