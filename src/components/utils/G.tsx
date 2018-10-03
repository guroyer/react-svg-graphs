import React, { ReactNode, SFC } from "react";

interface GProps {
    x?: number,
    y?: number
}

const defaultProps: GProps = {
    x: 0,
    y: 0
};

const G: SFC<GProps> = ({ children, x, y }) => {
    const transform = `translate(${x}, ${y})`;

    return (
        <g transform={transform}>
            {children}
        </g>
    );
};

G.defaultProps = defaultProps;

export default G;