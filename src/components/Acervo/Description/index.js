import React from 'react';
import './Description.css'
import DescriptionButton from './DescriptionButton'
import DescriptionText from './DescriptionText'

export default class Description extends React.Component {

    constructor(){
        super()
        this.state = {
            buttonLabel: 'Saiba mais',
            classDiv: 'hide'
        }
    }

    alternateState(){
        var state
        var buttonTitle
        if (this.state.classDiv === 'hide'){
            state = 'show'
            buttonTitle = 'Ver menos'
        }else{
            state = 'hide'
            buttonTitle = 'Saiba mais'
        }
        this.setState({
            buttonLabel: buttonTitle,
            classDiv: state
        })
    }
    render() {
        return (
            <div className={'description' + this.props.secondaryClass}>
                <DescriptionButton function={this.alternateState.bind(this)} label={this.state.buttonLabel}/>
                <DescriptionText DescriptionText={this.props.APIDescription} secondaryClass={this.state.classDiv} />
            </div>
        )
    }
}