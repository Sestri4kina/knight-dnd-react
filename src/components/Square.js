import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Square extends Component {
    static propTypes = {
        black: PropTypes.bool
    };

    render() {
        const { black } = this.props;
        const fill = black ? 'black' : 'white';
        const stroke = black ? 'white' : 'black';

        return (
            <div style={{ 
                backgroundColor: fill, 
                color: stroke,
                width: '12.5vh',
                height: '12.5vh'
                }}> 
                { this.props.children }
            </div> 
        );
    }
}