import React from "react";
import AlertCommon from "../AlertCommon/AlertCommon";

export default class ErrorCommon extends React.Component{
    constructor(props) {
        super(props);
        this.state = props;
    }

    render() {
        return (
            <AlertCommon >
                {this.state}
            </AlertCommon>
        )
    }
}