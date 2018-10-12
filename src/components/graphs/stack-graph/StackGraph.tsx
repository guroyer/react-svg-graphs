import React, { PureComponent } from "react";

import HorizontalStackGraph from "./HorizontalStackGraph";

const values = [
    {value: 70, color: "green"},
    {value: 30, color: "red"},
    {value: 21, color: "blue"},
    {value: 54, color: "yellow"},
    {value: 13, color: "purple"}
];

class StackGraph extends PureComponent {
    render() {
        return (
            <HorizontalStackGraph values={values} width={600} height={50} />
        );
    }
}

export default StackGraph;