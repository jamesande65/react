import React from 'react';

class Popup extends React.Component {
    constructor() {
        super();
        this.state = {
            state: false,
            textInput: 'react',
            color: '',
        }
    }

    activate(){
        this.setState({
            state: true
        });
    }

    deactivate(){
        this.setState({
            state: false
        });
    }

    handleInput(e){
        this.setState({
            textInput: e.target.value
        });
    }

    handleColor(e){
        this.setState({
            color: e.target.value
        });
    }

    render() {
        const { state } = this.state;
        return (
            <div className={'big-box'}>
                <div style={ {background: this.state.color} } className={ state === true ? 'popup active' : 'popup'}>
                    <h1> {this.state.textInput} </h1>
                    <button className={'btn'} onClick={ this.deactivate.bind(this) }>Close</button>
                </div>
                <button className={'btn'} onClick={ this.activate.bind(this) }>Open</button>
                <input type="text" onChange={this.handleInput.bind(this)} value={this.state.textInput}/>
                <input type="color" onChange={this.handleColor.bind(this)} value={this.state.color}/>
            </div>
        )
    }
}

export default Popup;