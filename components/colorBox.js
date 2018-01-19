import React from 'react';

const ColorBox = ({color}) => {
    return (
        <div className="box" style={ {background: color} } />
    )
}

export default ColorBox;