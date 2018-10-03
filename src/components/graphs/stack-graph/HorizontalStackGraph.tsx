import React, { Component } from "react";

import Svg from "utils/Svg";
import G from "utils/G";
import { StackGraphValue } from "./StackGraphValue";

class HorizontalStackGraph extends Component {
    render() {
        return (
            <div className="horizontal-stack-graph-container">
                <Svg>
                    <G>
                        <StackGraphValue width={50} height={50} color="black" />
                    </G>
                    <G x={50} y={0}>
                        <StackGraphValue width={50} height={50} color="red" />
                    </G>
                </Svg>
            </div>
        );
    }
}

export default HorizontalStackGraph;