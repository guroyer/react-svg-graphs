import React, { PureComponent } from "react";

import HorizontalStackGraphDemo from "examples/horizontal-stack-graph-demo/HorizontalStackGraphDemo";
import "./app.less";

class App extends PureComponent {
    render() {
        return (
            <div className="app-root">
                <div className="graphs-demo-container">
                    <HorizontalStackGraphDemo />
                </div>
            </div>
        );
    }
}

export default App;