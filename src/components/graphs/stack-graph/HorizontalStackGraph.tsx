import React, { Component } from "react";

import { Svg } from "utils/Svg";
import { StackGraphValue } from "./StackGraphValue";

export class HorizontalStackGraph extends Component {
    render() {
        return (
            <div className="horizontal-stack-graph-container">
                <Svg>
                    <g>
                        <StackGraphValue width={50} height={50} color="black" />
                    </g>
                    <g transform="translate(50, 0)">
                        <StackGraphValue width={50} height={50} color="red" />
                    </g>
                </Svg>
            </div>
        );
    }
}