import React, { Component } from "react";
import '../App.css';
import TodoList from "./TodoList";

export default class ItemsList extends Component {
    render() {
        const { items,clearList,Delete,Edit } = this.props
        return(
        <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">todo-list</h3>
            {
                items.map(item => {
                    return(
                        <TodoList key={item} title={item.title} Delete={() => Delete(item.id)} Edit={() => Edit(item.id)} />
                    );
                })
            }
            <button type="button" className="btn btn-danger btn btn-block text-capitalize mt-5" onClick={clearList}>clear list</button>
        </ul>
        );
    }
}