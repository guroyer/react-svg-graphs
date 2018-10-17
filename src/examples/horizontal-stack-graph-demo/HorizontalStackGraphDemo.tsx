import React, { PureComponent } from "react";

import HorizontalStackGraph from "graphs/stack-graph/HorizontalStackGraph";
import "./horizontalStackGraphDemo.less";

const units = [
    {value: 70, color: "#90d24d"},
    {value: 30, color: "#a9dc76"},
    {value: 21, color: "#78dce8"},
    {value: 54, color: "#ff6188"},
    {value: 13, color: "#ff2e62"}
];

class HorizontalStackGraphDemo extends PureComponent {
    render() {
        return (
            <HorizontalStackGraph
                units={units} 
                width={600} 
                height={50}
                title="Horizontal Stack Graph" />
        );
    }
}

export default HorizontalStackGraphDemo;