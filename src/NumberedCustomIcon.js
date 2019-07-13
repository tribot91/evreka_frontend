import React, { Component } from 'react';

export default class SVGIconComponent extends Component {
    render() {
        const digit = this.props.digit || 0;
        return (
            <svg width="30px" height="30px" viewBox="0 0 42 42" className="donut" aria-labelledby="beers-title beers-desc" role="img">
                <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill='#445275' role="presentation" fillOpacity={this.props.collected ? 1 : 0.7}></circle>
                <g className="chart-text">
                    <text className="chart-number" x={digit < 10 ? "40%" : (digit < 100 ? "33%" : "26%")} y="60%" fill="white">
                        {(digit > 1) && digit}
                    </text>
                </g>
            </svg>
        );
    }
}