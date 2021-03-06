import React, { PureComponent } from "react";

import HorizontalStackGraphDemo from "examples/horizontal-stack-graph-demo/HorizontalStackGraphDemo";
import HistogramDemo from "examples/histogram-demo/HistogramDemo";
import LineGraphDemo from "examples/line-graph-demo/LineGraphDemo";
import "assets/fonts/font.less";
import "./app.less";

class App extends PureComponent {
    render() {
        return (
            <div className="app-root">
                <div className="graphs-demo-container">
                    <HistogramDemo />
                    <LineGraphDemo />
                    <HorizontalStackGraphDemo />
                </div>
            </div>
        );
    }
}

export default App;