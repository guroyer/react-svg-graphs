import React, { Component } from "react";

import HorizontalStackGraph from "graphs/stack-graph/HorizontalStackGraph";

class App extends Component<{}, {}> {
    render() {
        return (
            <div className="app-root">
                <div className="graphs-demo-container">
                    <HorizontalStackGraph />
                </div>
            </div>
        );
    }
}

export default App;