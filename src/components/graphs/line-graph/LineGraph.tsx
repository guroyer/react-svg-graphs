import React, { PureComponent } from "react";

import Svg from "utils/Svg";
import G from "utils/G";
import { round } from "utils/mathHelpers";

export interface LineGraphProps {
    title: string,
    width: number,
    height: number,
    units: LineGraphUnit[]
}

export interface LineGraphUnit {
    value: number
}

interface Circle {
    cx: number,
    cy: number,
    r: number
}

class LineGraph extends PureComponent<LineGraphProps> {
    highestValue: number;

    constructor(props: LineGraphProps) {
        super(props);

        this.highestValue = this.establishHighestValue(props.units);
    }

    establishHighestValue = (units: LineGraphUnit[]) => {
        const values = units.map(unit => unit.value);

        return Math.max(...values);
    }

    render() {
        const { title, width, height, units } = this.props;

        const amountOfUnit = units.length;
        const widthBetweenUnits = round(width / (amountOfUnit - 1), 2);

        let xPos = 0;
        let path = "";
        let circles = [] as Circle[];
        units.map((unit, index) => {
            const command = index < 1 ? "M" : "L";
            const y = unit.value * -height / this.highestValue;
            
            path += `${command} ${xPos} ${y} `;
            circles.push({ cx: xPos, cy: y, r: 3});
            xPos = round(xPos + widthBetweenUnits, 2);
        });

        return (
            <div className="line-graph-container">
                <div className="title">
                    {title}
                </div>
                <Svg width={width} height={height}>
                    <G y={height}>
                        <path d={path} style={{ stroke: "black", strokeWidth: "2", fill: "transparent" }} />
                        {circles.map((circle, index) => <circle {...circle} key={index} style={{ fill: "red" }} />)}
                    </G>
                </Svg>
            </div>
        );
    }
}

export default LineGraph;