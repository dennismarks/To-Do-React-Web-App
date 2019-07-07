// rce

import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {
    render() {
        return (
            <div>
                <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

// PropTypes - validation for props that a comp should have
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

export default TodoItem
