import React, { Component } from 'react';
import './DownArrow.scss';

class DownArrow extends Component {
    render() {
        return (
            <div className="arrow-center">
                <svg width="30px" height="20px">
                    <path stroke="#ffffff" stroke-width="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "></path>
                </svg>
            </div>
        );
    }
}

export default DownArrow;