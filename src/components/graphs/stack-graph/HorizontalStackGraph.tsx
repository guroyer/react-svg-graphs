import React, { PureComponent } from "react";

import Svg from "utils/Svg";
import G from "utils/G";
import { StackGraphValue } from "./StackGraphValue";

export interface HorizontalStackGraphProps {
    values: HoriontalStackGraphValue[]
}

export interface HoriontalStackGraphValue {
    color: string,
    value: number
}

class HorizontalStackGraph extends PureComponent<HorizontalStackGraphProps> {
    renderValue(horizontalStackGraphValue: HoriontalStackGraphValue, x:number, index: number) {
        const width = horizontalStackGraphValue.value;
        const height = 50;
        const y = 0;
        const color = horizontalStackGraphValue.color;

        return (
            <G x={x} y={y} key={index}>
                <StackGraphValue width={width} height={height} color={color} />
            </G>
        );
    }

    renderValues() {
        const { values } = this.props;

        let xPosition = 0;

        return (
            <G>
                {values.map((value, index) => {
                    if (index > 0) {
                        const previousValue = values[index - 1].value;
                        xPosition += previousValue;
                    } 
                    
                    return this.renderValue(value, xPosition, index);
                })}
            </G>
        );
    }

    render() {
        return (
            <div className="horizontal-stack-graph-container">
                <Svg>
                    <G>
                        {this.renderValues()}
                    </G>
                </Svg>
            </div>
        );
    }
}

export default HorizontalStackGraph;