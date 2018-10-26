import React, { PureComponent } from "react";
import memoize from "memoize-one";

import Svg from "utils/Svg";
import G from "utils/G";
import Line, { LineUnit } from "./Line";

export interface LineGraphProps {
    title: string,
    width: number,
    height: number,
    lines: LineProps[]
}

interface LineProps {
    units: LineUnit[],
    lineColor: string
}

interface LinesCanvas {
    graphWidth: number,
    graphHeight: number
}

const padding = 4;

class LineGraph extends PureComponent<LineGraphProps> {
    linesCanvas = memoize(
        (width: number, height: number): LinesCanvas => {
            return {
                graphWidth: width - 2 * padding,
                graphHeight: height - 2 * padding
            };
        }
    );
    highestValue = memoize((lines: LineProps[]) => {
        const values = [] as number[];
        lines.map((line) => line.units.map(unit => values.push(unit.value)));

        return Math.max(...values);
    });

    render() {
        const { title, width, height, lines } = this.props;

        const { graphWidth, graphHeight } = this.linesCanvas(width, height);
        const graphHighestValue = this.highestValue(lines);

        return (
            <div className="line-graph-container">
                <div className="title">
                    {title}
                </div>
                <Svg width={width} height={height}>
                    <G x={padding} y={height - padding}>
                        {lines.map((line, index) => (
                            <Line 
                                units={line.units} 
                                graphWidth={graphWidth} 
                                graphHeight={graphHeight}
                                graphHighestValue={graphHighestValue}
                                lineColor={line.lineColor} />
                        ))}
                    </G>
                </Svg>
            </div>
        );
    }
}

export default LineGraph;