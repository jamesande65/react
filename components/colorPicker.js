import React from 'react';
import ColorBox from './colorBox';

class ColorPicker extends React.Component {
    constructor() {
        super();
        this.state = {
            colors : [
                'red', 'blue', 'green'
            ]
        }
    }

    render() {
        return (
            <div>
                {this.state.colors.map((color, index) => {
                    return (
                        <div key={index}>
                            <ColorBox color={color} />
                        </div>
                    )
                })}
            </div>
        )
    }
}

export default ColorPicker;