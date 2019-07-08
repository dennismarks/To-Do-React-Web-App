// rce

import React, { Component } from 'react'
import PropTypes from 'prop-types';


export class TodoItem extends Component {

    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc solid',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        return (
            <div style={this.getStyle()}> 
                <p>
                    <input style={{marginRight: '6px'}} type='checkbox' />
                    {this.props.todo.title}
                </p>
            </div>
        )
    }
}

// PropTypes - validation for props that a comp should have
TodoItem.propTypes = {
	todo: PropTypes.object.isRequired
}

export default TodoItem
