import React, { ReactNode, SFC } from "react";

interface GProps {
    x?: number,
    y?: number,
    angle?: number
}

const defaultProps: GProps = {
    x: 0,
    y: 0,
    angle: 0
};

const G: SFC<GProps> = ({ children, x, y, angle }) => {
    let transform = `translate(${x}, ${y})`;

    if (angle > 0) {
        transform += ` rotate(${angle})`;
    }

    return (
        <g transform={transform}>
            {children}
        </g>
    );
};

G.defaultProps = defaultProps;

export default G;