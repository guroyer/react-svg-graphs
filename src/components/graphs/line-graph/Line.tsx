import React, { PureComponent } from "react";
import momeize from "memoize-one";

import G from "utils/G";
import { round } from "utils/mathHelpers";

export interface LineProps {
    graphWidth: number,
    graphHeight: number,
    units: LineUnit[],
    lineColor: string
}

export interface LineUnit {
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

class Line extends PureComponent<LineProps> {
    highestValue = momeize((units: LineUnit[]) => {
        const values = units.map(unit => unit.value);

        return Math.max(...values);
    });
    lineArtifacts = momeize(
        (units: LineUnit[], height: number, highestValue: number, widthBetweenUnits: number): LineArtifacts => {
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
        const { graphWidth, graphHeight, units, lineColor } = this.props;

        const highestValue = this.highestValue(units);
        const amountOfUnit = units.length;
        const widthBetweenUnits = round(graphWidth / (amountOfUnit - 1), 2);
        const { path, circles } = this.lineArtifacts(units, graphHeight, highestValue, widthBetweenUnits);

        return (
            <G>
                <path d={path} style={{ stroke: lineColor, strokeWidth: "2", fill: "transparent" }} />
                {circles.map((circle, index) => <circle {...circle} key={index} style={{ fill: lineColor }} />)}
            </G>
        );
    }
}

export default Line;