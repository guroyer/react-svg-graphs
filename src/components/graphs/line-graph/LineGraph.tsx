import React, { PureComponent } from "react";
import momeize from "memoize-one";

import Svg from "utils/Svg";
import G from "utils/G";
import { round } from "utils/mathHelpers";
import memoizeOne from "memoize-one";

export interface LineGraphProps {
    title: string,
    width: number,
    height: number,
    units: LineGraphUnit[],
    lineColor: string
}

export interface LineGraphUnit {
    value: number
}

interface Circle {
    cx: number,
    cy: number,
    r: number
}

interface LineArtifacts {
    circles: Circle[],
    path: string
}

class LineGraph extends PureComponent<LineGraphProps> {
    highestValue = memoizeOne((units: LineGraphUnit[]) => {
        const values = units.map(unit => unit.value);

        return Math.max(...values);
    });
    lineArtifacts = memoizeOne(
        (units: LineGraphUnit[], height: number, highestValue: number, widthBetweenUnits: number): LineArtifacts => {
            let xPos = 0;
            let path = "";
            let circles = [] as Circle[];
            units.map((unit, index) => {
                const command = index < 1 ? "M" : "L";
                const y = unit.value * -height / highestValue;
                
                path += `${command} ${xPos} ${y} `;
                circles.push({ cx: xPos, cy: y, r: 3});
                xPos = round(xPos + widthBetweenUnits, 2);
            });

            return {
                path,
                circles
            };
        }
    );

    render() {
        const { title, width, height, units, lineColor } = this.props;

        const highestValue = this.highestValue(units);
        const amountOfUnit = units.length;
        const widthBetweenUnits = round(width / (amountOfUnit - 1), 2);
        const { path, circles } = this.lineArtifacts(units, height, highestValue, widthBetweenUnits);

        return (
            <div className="line-graph-container">
                <div className="title">
                    {title}
                </div>
                <Svg width={width} height={height}>
                    <G y={height}>
                        <path d={path} style={{ stroke: lineColor, strokeWidth: "2", fill: "transparent" }} />
                        {circles.map((circle, index) => <circle {...circle} key={index} style={{ fill: lineColor }} />)}
                    </G>
                </Svg>
            </div>
        );
    }
}

export default LineGraph;