import React from 'react';

const Main = () => {
    let array = [1,2,4];
    return (<div>
        <h1 className="red">React {
            <ul>
                {
                    array.map((elem, index) => {
                        return (
                            <li key={index}> { elem === 2 ? 'this one' : elem } </li>
                        )
                    })
                }
            </ul>
        }</h1>
    </div>)
};

export default Main;