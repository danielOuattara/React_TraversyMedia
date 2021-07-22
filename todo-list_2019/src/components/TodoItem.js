import React, { Component } from 'react'
import PropTypes from "prop-types";
export class TodoItem extends Component {

    getStyle = () => {
        return  {
             textDecoration: this.props.todo.completed ? "line-through": "none",
             background: "#f4f4f4",
             padding: '10px',
             borderBottom: '1px #ccc dotted'
        }
    }

    render() {
        const {id, title } = this.props.todo
        return (

            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markCompleted.bind(this, id)} />
                    {' '}
                    {title}
                    <button style={btnStyle} >X</button>
                </p>
            </div>
        )
    }
}

// PropType
TodoItem.protoTypes = {
  todos: PropTypes.array.isRequired
}

// const itemStyle = {
//     backgroundColor: '#f4f4f4',
// }

const btnStyle = {
    background:'red',
    color:"white",
    border: "none",
    padding:"5px 10px",
    borderRaduis: "50%",
    cursor:"pointer",
    float: "right",
}

export default TodoItem
