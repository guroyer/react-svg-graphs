import React, { Component } from "react";

import HorizontalStackGraphDemo from "examples/horizontal-stack-graph-demo/HorizontalStackGraphDemo";

class App extends Component<{}, {}> {
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