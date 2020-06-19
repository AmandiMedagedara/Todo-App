import React, { Component } from "react";
import '../App.css';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            bgcolor: "",
            Color:"",
            t:""
        }
    }

    boxClick = (e) => {
        this.setState({
            bgColor: "#98FB98",
            Color:"green",
            t : "Check"
        })
    }
    render() {
        const {title,Delete,Edit} = this.props
        return(
            <li className="list-group-item text-capitalize d-flex justify-content-between my-2" style={{background : this.state.bgColor}}>
            <h6>{title}</h6>
            <div className="todo-icon">
                <span className="mx-2 text-primary" onClick={Edit}>
                    <i className="fa fa-pencil" />
                </span>
                <span className="mx-2 text-danger" onClick={Delete}>
                    <i className="fa fa-trash"/>
                </span>
                <span onClick={this.boxClick} className="mx-2 text-primary">
                    <i className="fa fa-check-square-o" style={{color : this.state.Color}}/>
                </span>
            </div>
            </li>
        );
    }

}