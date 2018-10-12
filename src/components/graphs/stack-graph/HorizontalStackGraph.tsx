import React, { PureComponent } from "react";

import StackGraph, { StackGraphDirectionEnum } from "graphs/stack-graph/StackGraph";

const units = [
    {value: 70, color: "green"},
    {value: 30, color: "red"},
    {value: 21, color: "blue"},
    {value: 54, color: "yellow"},
    {value: 13, color: "purple"}
];

class HorizontalStackGraph extends PureComponent {
    render() {
        return (
            <StackGraph 
                units={units} 
                width={600} 
                height={50} 
                direction={StackGraphDirectionEnum.horizontal} />
        );
    }
}

export default HorizontalStackGraph;