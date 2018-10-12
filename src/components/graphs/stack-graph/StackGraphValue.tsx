import React, { PureComponent } from "react";

export interface StackGraphValueProps {
    color: string,
    width: number,
    height: number
}

export class StackGraphValue extends PureComponent<StackGraphValueProps> {
    render() {
        const { color, width, height } = this.props;

        return (
            <rect 
                style={{fill: color}}
                width={width}
                height={height} />
        );
    }
}