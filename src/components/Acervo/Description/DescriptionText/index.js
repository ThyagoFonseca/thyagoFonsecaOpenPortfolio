import React from "react";
import './descriptionText.css'

export default class DescriptionText extends React.Component {
    render(){
        return(
            <div className={'textArea ' + this.props.secondaryClass}>{this.props.DescriptionText}</div>
        )
    }
}