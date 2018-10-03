import React, { Component } from "react";

import { StackGraph } from "./components/graphs/stack-graph/StackGraph";

class App extends Component<{}, {}> {
    render() {
        return (
            <div className="app-root">
                <div className="graphs-demo-container">
                    <StackGraph />
                </div>
            </div>
        );
    }
}

export default App;