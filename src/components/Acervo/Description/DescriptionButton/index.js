import React from 'react';
import './DescriptionButton.css'

export default class DescriptionButton extends React.Component {
    render() {
        return(
            <button className='DescriptionButton' onClick={this.props.function}>
                {this.props.label}
            </button>
        )
    }
}