import React, { Component } from "react";

export interface StackGraphValueProps {
    color: string,
    width: number,
    height: number
}

export class StackGraphValue extends Component<StackGraphValueProps> {
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