import React, { PureComponent } from "react";

import HorizontalStackGraphDemo from "examples/horizontal-stack-graph-demo/HorizontalStackGraphDemo";
import HistogramDemo from "examples/histogram-demo/HistogramDemo";
import "assets/fonts/font.less";
import "./app.less";

class App extends PureComponent {
    render() {
        return (
            <div className="app-root">
                <div className="graphs-demo-container">
                    <HorizontalStackGraphDemo />
                    <HistogramDemo />
                </div>
            </div>
        );
    }
}

export default App;