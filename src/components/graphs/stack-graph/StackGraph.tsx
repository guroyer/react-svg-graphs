import React, { PureComponent } from "react";

import G from "utils/G";
import { StackGraphValue } from "graphs/stack-graph/StackGraphValue";

export enum StackGraphDirectionEnum {
    horizontal,
    vertical
}

export interface StackGraphProps {
    units: StackGraphUnit[],
    width: number,
    height: number,
    direction?: StackGraphDirectionEnum
}

export interface StackGraphUnit {
    color: string,
    value: number
}

class StackGraph extends PureComponent<StackGraphProps> {
    static defaultProps = {
        direction: StackGraphDirectionEnum.horizontal
    };

    total: number;

    constructor(props: StackGraphProps) {
        super(props);

        this.total = this.establishTotal(props.units);
    }

    establishTotal = (units: StackGraphUnit[]) => {
        let total = 0;
        units.map(unit => total += unit.value);

        return total;
    }

    // TODO : add derivedstatefromprops to update the total;
    
    renderValue(width: number, color: string, x: number, index: number) {
        const { height } = this.props;

        return (
            <G x={x} y={0} key={index}>
                <StackGraphValue width={width} height={height} color={color} />
            </G>
        );
    }

    render() {
        const { units, width, height, direction } = this.props;
        const x = direction === StackGraphDirectionEnum.horizontal ? 0 : height;
        const angle = direction == StackGraphDirectionEnum.horizontal ? 0 : 90;

        let xPos = 0;

        return (
            <G angle={angle} x={x}>
                {units.map((unit, index) => {
                    const adjustedWidth = unit.value * width / this.total;

                    const returnValue = this.renderValue(adjustedWidth, unit.color, xPos, index); 

                    xPos += adjustedWidth;

                    return returnValue;
                })}
            </G>
        );
    }
}

export default StackGraph;