import React, { Component } from "react";
import '../App.css';

export default class AddingItems extends Component {
    render() {
        const { item,Change,Submit,editItem } = this.props
        return(
            <div className="card card-body my-3">
            <form onSubmit={Submit}>
                <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text bg-info text-white">
                <i className="fa fa-book"></i>
                </div>
                </div>
                    <input type="text" className="form-control text-capitalize" placeholder="Add an item to the todo-list" value={item} onChange={Change} required/>
                </div>
                    <button type="submit" className={editItem ? "btn btn-block btn-success mt-3" : "btn btn-block btn-primary mt-3"}> {editItem ? "edit item" : "add item"} </button>
            </form>
            </div>
        )
    }
}