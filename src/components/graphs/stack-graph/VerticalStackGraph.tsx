import React, { PureComponent } from "react";

import Svg from "utils/Svg";
import StackGraph, { StackGraphUnit, StackGraphDirectionEnum } from "graphs/stack-graph/StackGraph";
import "./verticalStackGraph.less";

export interface VerticalStackGraphProps {
    units: StackGraphUnit[],
    width: number,
    height: number,
    title: string
}

class VerticalStackGraph extends PureComponent<VerticalStackGraphProps> {
    render() {
        const { units, width, height, title } = this.props;

        return (
            <div className="horizontal-stack-graph-container">
                <div className="title">
                    {title}
                </div>
                <Svg width={width} height={height}>
                    <StackGraph 
                        units={units} 
                        width={width} 
                        height={height} 
                        direction={StackGraphDirectionEnum.vertical} />
                </Svg>
            </div>
        );
    }
}

export default VerticalStackGraph;