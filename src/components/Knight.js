import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

const knightSource = {
    beginDrag(props) {
        return {};
    }
}

function collect(connect, monitor) {
    return {
        connectDragStore: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}


class Knight extends Component {
    render() {
        const { connectDragStore, isDragging } = this.props;
        return connectDragStore(
            <div style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: 'bold',
                cursor: 'move'
            }}>
                ♘
            </div>
        );
    }
}

Knight.propTypes = {
        connectDragStore: PropTypes.func.isRequired,
        isDragging: PropTypes.bool.isRequired
    }


export default  DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);