import React, { Component } from 'react';

export class AddTodo extends Component {
    state = {
        title:''

    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        })        
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addNew(this.state.title)
        this.setState({
            title:''
        })
    }

    render() {
        return (
            <form onSubmit={this.onSubmit} style= {{display:'flex'}}> 
               <input 
                type='text' 
                name='title' 
                placeholder='Add todo' 
                value = {this.state.title}
                style={{flex:'10', padding:'5px'}}
                onChange={this.handleChange}
               /> 
               <input 
                type='submit' 
                className = 'btn' 
                value='submit' 
                style={{flex:'1'}}
                />
            </form>
        );
    }
}

export default AddTodo;
