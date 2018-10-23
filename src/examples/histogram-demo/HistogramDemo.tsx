import React, { PureComponent } from "react";

import Histogram from "graphs/histogram/Histogram";
import "./histogramDemo.less";

const units = [
    {value: 70, color: "#90d24d"},
    {value: 30, color: "#a9dc76"},
    {value: 21, color: "#78dce8"},
    {value: 54, color: "#ff6188"},
    {value: 13, color: "#ff2e62"}
];

class HistogramDemo extends PureComponent {
    render() {
        return (
            <Histogram
                units={units} 
                width={600} 
                height={400}
                title="Histogram" />
        );
    }
}

export default HistogramDemo;