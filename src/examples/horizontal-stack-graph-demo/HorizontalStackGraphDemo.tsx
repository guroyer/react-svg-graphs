import React, { PureComponent } from "react";

import HorizontalStackGraph from "graphs/stack-graph/HorizontalStackGraph";

const units = [
    {value: 70, color: "green"},
    {value: 30, color: "red"},
    {value: 21, color: "blue"},
    {value: 54, color: "yellow"},
    {value: 13, color: "purple"}
];

class HorizontalStackGraphDemo extends PureComponent {
    render() {
        return (
            <HorizontalStackGraph
                units={units} 
                width={600} 
                height={50} />
        );
    }
}

export default HorizontalStackGraphDemo;