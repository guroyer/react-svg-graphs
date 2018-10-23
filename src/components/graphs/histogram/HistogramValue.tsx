import React, { PureComponent } from "react";

import G from "utils/G";
import { round } from "utils/mathHelpers";

export interface HistogramValueProps {
    color: string,
    width: number,
    height: number,
    value: number
}

class HistogramValue extends PureComponent<HistogramValueProps> {
    render () {
        const { color, width, height, value } = this.props;

        const fontSize = round(width / 2.6, 0);
        const y = fontSize + 2 < height ? fontSize : -2;
        const textColor = fontSize + 2 < height ? "white" : "#6d6c6d";

        return (
            <G>
                <rect 
                    style={{fill: color}}
                    width={width}
                    height={height} />
                <text x={2} y={y} style={{ fontSize, fill: textColor, height: fontSize }} className="histogram-value-label">
                    {value}
                </text>
            </G>
        );
    }
}

export default HistogramValue;