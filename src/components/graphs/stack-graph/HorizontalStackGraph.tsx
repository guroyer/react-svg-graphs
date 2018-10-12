import React, { PureComponent } from "react";

import Svg from "utils/Svg";
import G from "utils/G";
import { StackGraphValue } from "./StackGraphValue";

export interface HorizontalStackGraphProps {
    values: HorizontalStackGraphValue[],
    width: number,
    height: number
}

export interface HorizontalStackGraphValue {
    color: string,
    value: number
}

class HorizontalStackGraph extends PureComponent<HorizontalStackGraphProps> {
    total: number;

    constructor(props: HorizontalStackGraphProps) {
        super(props);

        this.total = this.establishTotal(props.values);
    }

    establishTotal = (values: HorizontalStackGraphValue[]) => {
        let total = 0;
        values.map(value => total += value.value);

        return total;
    }
    
    renderValue(width: number, color: string, x: number, index: number) {
        const { height } = this.props;

        return (
            <G x={x} y={0} key={index}>
                <StackGraphValue width={width} height={height} color={color} />
            </G>
        );
    }

    renderValues() {
        const { values, width } = this.props;

        let xPosition = 0;

        return (
            <G>
                {values.map((value, index) => {
                    const adjustedWidth = value.value * width / this.total;

                    const returnValue = this.renderValue(adjustedWidth, value.color, xPosition, index); 

                    xPosition += adjustedWidth;

                    return returnValue;
                })}
            </G>
        );
    }

    render() {
        const { width, height } = this.props;

        return (
            <div className="horizontal-stack-graph-container">
                <Svg width={width} height={height}>
                    <G>
                        {this.renderValues()}
                    </G>
                </Svg>
            </div>
        );
    }
}

export default HorizontalStackGraph;