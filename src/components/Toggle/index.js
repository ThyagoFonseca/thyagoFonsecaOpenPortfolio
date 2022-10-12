import React from 'react';
import  './toggle.css'

export class Toggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {isToggle: true}

        //Usando o bind (amarrar) para que o this funcione dentro da callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }

    render() {
        return(
            <button className='button' onClick={this.handleClick}>
                {this.state.isToggleOn ? '>' : '<'}
            </button>
        )
    }
}