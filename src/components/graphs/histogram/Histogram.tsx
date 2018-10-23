import React, { PureComponent } from "react";

import Svg from "utils/Svg";
import G from "utils/G";
import HistogramValue from "./HistogramValue";
import { round } from "utils/mathHelpers";
import "./histogram.less";

interface HistogramProps {
    title: string,
    width: number,
    height: number,
    units: HistogramUnit[],
    unitWidth?: number
}

interface HistogramUnit {
    color: string,
    value: number
}

class Histogram extends PureComponent<HistogramProps> {
    highestValue: number;
    barWidth: number;
    
    constructor(props: HistogramProps) {
        super(props);

        this.highestValue = this.establishHighestValue(props.units);
        this.barWidth = this.establishBarWidth(props.width, props.units);
    }

    establishHighestValue = (units: HistogramUnit[]) => {
        const values = units.map(unit => unit.value);

        return Math.max(...values);
    }
    establishBarWidth = (graphWidth: number, units: HistogramUnit[]) => {
        return graphWidth / units.length;
    }

    // TODO : add derivedstatefromprops to update highestValue;

    renderValue(x: number, barWidth: number, barHeight: number, unit: HistogramUnit, index: number) {
        return (
            <G x={x} y={-barHeight} key={index} >
                <HistogramValue
                    color={unit.color}
                    value={unit.value}
                    width={barWidth}
                    height={barHeight} />
            </G>
        );
    }

    render() {
        const { width, height, units, title } = this.props;

        let xPos = 0;

        return (
            <div className="histogram-container">
                <div className="title">
                    {title}
                </div>
                <Svg width={width} height={height}>
                    <G y={height}>
                        {units.map((unit, index) => {
                            const adjustedHeight = round(unit.value * height / this.highestValue, 0);
                            
                            const returnValue = this.renderValue(xPos, this.barWidth, adjustedHeight, unit, index);

                            xPos += this.barWidth;

                            return returnValue;
                        })}
                    </G>
                </Svg>
            </div>
        );
    }
}

export default Histogram;