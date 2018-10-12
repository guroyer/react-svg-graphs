import React, { PureComponent } from "react";

import Svg from "utils/Svg";
import G from "utils/G";
import { StackGraphValue } from "./StackGraphValue";

export enum StackGraphDirectionEnum {
    horizontal,
    vertical
}

export interface HorizontalStackGraphProps {
    values: HorizontalStackGraphValue[],
    width: number,
    height: number,
    direction?: StackGraphDirectionEnum
}

export interface HorizontalStackGraphValue {
    color: string,
    value: number
}

class HorizontalStackGraph extends PureComponent<HorizontalStackGraphProps> {
    static defaultProps = {
        direction: StackGraphDirectionEnum.horizontal
    };

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
        const { values, width, height, direction } = this.props;
        const x = direction === StackGraphDirectionEnum.horizontal ? 0 : height;
        const angle = direction == StackGraphDirectionEnum.horizontal ? 0 : 90;

        let xPosition = 0;

        return (
            <G angle={angle} x={x}>
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
        const { width, height, direction } = this.props;
        const displayedWidth = direction === StackGraphDirectionEnum.horizontal ? width : height;
        const diplayedHeight = direction === StackGraphDirectionEnum.horizontal ? height : width;

        return (
            <div className="horizontal-stack-graph-container">
                <Svg width={displayedWidth} height={diplayedHeight}>
                    <G>
                        {this.renderValues()}
                    </G>
                </Svg>
            </div>
        );
    }
}

export default HorizontalStackGraph;