import React, { PureComponent } from "react";

import Svg from "utils/Svg";
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
        const width = 600;
        const height = 50;

        return (
            <div className="horizontal-stack-graph-container">
                <Svg width={width} height={height}>
                    <StackGraph 
                        units={units} 
                        width={width} 
                        height={height} 
                        direction={StackGraphDirectionEnum.horizontal} />
                </Svg>
            </div>
        );
    }
}

export default HorizontalStackGraph;