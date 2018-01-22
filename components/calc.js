import React from 'react';

class Calc extends React.Component{
    constructor (){
        super();
        this.state = {
            textInput: '',
            firstOperand: '0',
            secondOperand: '0',
            operator: '0',
            operation: eval(this.firstOperand + this.operator + this.secondOperand),
            result: '',
        }
    }

    handleNumInput(e) {
        this.setState({
            textInput: this.state.textInput + e.target.value
        });
    }

    handleOpInput(e) {
        this.setState({
            firstOperand: this.state.textInput,
            operator: e.target.value,
            textInput: '',
        });
    }

    handleDotInput() {}
    handleEquationInput() {}

    render() {
        return (
            <div className={'calc'}>
                <input type="text" onChange={this.handleNumInput.bind(this)} value={this.state.textInput}/>
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
                    <button value={'.'} onClick={this.handleDotInput.bind(this)} className={'calcbtn'}>.</button>
                    <button value={'='} onClick={this.handleEquationInput.bind(this)} className={'calcbtn oper'}>=</button>
                    <button value={'+'} onClick={this.handleOpInput.bind(this)} className={'calcbtn oper'}>+</button>
                </div>
            </div>
        )
    }
}

export default Calc;