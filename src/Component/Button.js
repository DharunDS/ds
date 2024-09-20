import React from 'react';
import './Button.css';

function Button() {
    return (
        <div className="button">
            <button className="b">Home</button>
            <button className="b">Skill</button>
            <button className="b">Portfolio</button>
            <button className="b">About</button>
        </div>
    );
}

export default Button;
