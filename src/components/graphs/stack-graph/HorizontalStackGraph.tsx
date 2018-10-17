import React, { PureComponent } from "react";

import Svg from "utils/Svg";
import StackGraph, { StackGraphDirectionEnum } from "graphs/stack-graph/StackGraph";
import "./horizontalStackGraph.less";

export interface HorizontalStackGraphProps {
    units: HorizontalStackGraphUnit[],
    width: number,
    height: number,
    title: string
}

export interface HorizontalStackGraphUnit {
    color: string,
    value: number
}

class HorizontalStackGraph extends PureComponent<HorizontalStackGraphProps> {
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
                        direction={StackGraphDirectionEnum.horizontal} />
                </Svg>
            </div>
        );
    }
}

export default HorizontalStackGraph;