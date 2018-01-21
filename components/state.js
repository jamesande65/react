import React from 'react';

// const StateHTML = ({name}) => {
//     return (
//         <div>{name.name}</div>
//     )
// }

class StateHTML extends React.Component{
    constructor() {
        super()
    }

    handleClick() {
        console.log(this.props);
        this.props.func(this.props.name.name);
    }

    render() {
        const {name, func} = this.props;
        return (
            <div onClick={this.handleClick.bind(this)}>{name.name}</div>
        );
    }
}

export default StateHTML;