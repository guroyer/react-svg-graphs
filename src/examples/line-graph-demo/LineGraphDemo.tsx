import React, { PureComponent } from "react";

import LineGraph from "graphs/line-graph/LineGraph";

const units = [
    { value: 6 },
    { value: 19 },
    { value: 40 },
    { value: 52 },
    { value: 21 },
    { value: 28 },
    { value: 27 },
    { value: 10 },
];

class LineGraphDemo extends PureComponent {
    render() {
        return (
            <LineGraph
                title="Line Graph"
                width={600}
                height={400}
                units={units} />
        );
    }
}

export default LineGraphDemo;