import React, { PureComponent } from "react";
import memoize from "memoize-one";

import G from "utils/G";
import { round } from "utils/mathHelpers";

export interface LineProps {
    graphWidth: number,
    graphHeight: number,
    graphHighestValue: number,
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
    lineArtifacts = memoize(
        (units: LineUnit[], height: number, highestValue: number, widthBetweenUnits: number): LineArtifacts => {
            let x = 0;
            let path = "";
            let circles = [] as Circle[];
            units.map((unit, index) => {
                const command = index < 1 ? "M" : "L";
                const y = unit.value * -height / highestValue;
                
                path += `${command} ${x} ${y} `;
                circles.push({ cx: x, cy: y, r: 3});
                x = round(x + widthBetweenUnits, 2);
            });

            return {
                path,
                circles
            };
        }
    );

    render() {
        const { graphWidth, graphHeight, graphHighestValue, units, lineColor } = this.props;

        const amountOfUnit = units.length;
        const widthBetweenUnits = round(graphWidth / (amountOfUnit - 1), 2);
        const { path, circles } = this.lineArtifacts(units, graphHeight, graphHighestValue, widthBetweenUnits);

        return (
            <G>
                <path d={path} style={{ stroke: lineColor, strokeWidth: "2", fill: "transparent" }} />
                {circles.map((circle, index) => <circle {...circle} key={index} style={{ fill: lineColor }} />)}
            </G>
        );
    }
}

export default Line;