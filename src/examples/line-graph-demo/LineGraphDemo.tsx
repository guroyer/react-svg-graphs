import React, { PureComponent } from "react";

import LineGraph from "graphs/line-graph/LineGraph";
import { randomInt } from "utils/mathHelpers";

const units1 = [
    { value: 6 },
    { value: 19 },
    { value: 40 },
    { value: 52 },
    { value: 21 },
    { value: 28 },
    { value: 27 },
    { value: 10 },
];

const units2 = [
    { value: randomInt(60) },
    { value: randomInt(60) },
    { value: randomInt(60) },
    { value: randomInt(60) },
    { value: randomInt(60) },
    { value: randomInt(60) },
    { value: randomInt(60) },
    { value: randomInt(60) },
]

const lines = [
    { units: units1, lineColor: "#4cd1e1" },
    { units: units2, lineColor: "#ff6188" }
]

class LineGraphDemo extends PureComponent {
    render() {
        return (
            <LineGraph
                title="Line Graph"
                width={600}
                height={400}
                lines={lines} />
        );
    }
}

export default LineGraphDemo;