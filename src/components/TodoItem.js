import React, { Component } from 'react';
import PropTypes from 'prop-types'


export class TodoItem extends Component {

    getStyle = () => {
        return {
            background:'#f4f4f4',
            padding:'10px',
            borderBottom:'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through': 'none'
        }
    }
    



    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>
                {' '} 
                {title}
                <button onClick= {this.props.delete.bind(this, id)} style={btnStyle}>X</button>
                </p>
            </div>
        );
    }
}

const btnStyle = {
    backgroundColor:'red',
    borderRadius:'50%',
    color:'white',
    padding:'5px 10px',
    float:'right',
    cursor:'pointer'

}


TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}

export default TodoItem;
