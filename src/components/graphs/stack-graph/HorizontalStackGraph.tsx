import React, { PureComponent } from "react";

import Svg from "utils/Svg";
import StackGraph, { StackGraphDirectionEnum } from "graphs/stack-graph/StackGraph";

export interface HorizontalStackGraphProps {
    units: HorizontalStackGraphUnit[],
    width: number,
    height: number
}

export interface HorizontalStackGraphUnit {
    color: string,
    value: number
}

class HorizontalStackGraph extends PureComponent<HorizontalStackGraphProps> {
    render() {
        const { units, width, height } = this.props;

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