import React from 'react';

class Calc extends React.Component{
    constructor (){
        super();
        this.state = {
            textInput: '0',
            firstOperand: '0',
            secondOperand: '0',
            operator: '0',
            result: '',
        }
    }

    handleInput() {
        this.setState({
            textInput: this.state.textInput
        });
    }

    handleNumInput(e) {
        if(this.state.textInput === '0') {
            if(e.target.value === '.') {
                this.setState({
                    textInput: this.state.textInput + e.target.value,
                });
            } else {
                this.setState({
                    textInput: '' + e.target.value,
                });
            }
        } else {
            this.setState({
                textInput: '' + this.state.textInput + e.target.value,
            });
        }
        console.log(this.state);
    }

    handleOpInput(e) {
        if(this.state.firstOperand !== '0' && this.state.operator !== '0') {
            this.setState({
                secondOperand: this.state.textInput,
            });
            this.handleInput();
            console.log(this.state);
        } else if(this.state.secondOperand !== '0') {
            this.setState({
                result: eval(this.state.firstOperand + this.state.operator + this.state.secondOperand),
                textInput: this.state.result,
                firstOperand: this.state.result,
            });
        } else {
            this.setState({
                firstOperand: this.state.textInput,
                operator: e.target.value,
                textInput: '0',
            });
        }
    }

    handleEquationInput() {

    }

    render() {
        return (
            <div className={'calc'}>
                <input type="text" onChange={this.handleInput.bind(this)} value={this.state.textInput}/>
                <div className={'calc-buttons'}>
                    <button value={'7'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>7</button>
                    <button value={'8'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>8</button>
                    <button value={'9'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>9</button>
                    <button value={'/'} onClick={this.handleOpInput.bind(this)} className={'calcbtn oper'}>/</button>
                    <button value={'4'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>4</button>
                    <button value={'5'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>5</button>
                    <button value={'6'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>6</button>
                    <button value={'*'} onClick={this.handleOpInput.bind(this)} className={'calcbtn oper'}>*</button>
                    <button value={'1'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>1</button>
                    <button value={'2'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>2</button>
                    <button value={'3'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>3</button>
                    <button value={'-'} onClick={this.handleOpInput.bind(this)} className={'calcbtn oper'}>-</button>
                    <button value={'0'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>0</button>
                    <button value={'.'} onClick={this.handleNumInput.bind(this)} className={'calcbtn'}>.</button>
                    <button value={'='} onClick={this.handleEquationInput.bind(this)} className={'calcbtn oper'}>=</button>
                    <button value={'+'} onClick={this.handleOpInput.bind(this)} className={'calcbtn oper'}>+</button>
                </div>
            </div>
        )
    }
}

export default Calc;