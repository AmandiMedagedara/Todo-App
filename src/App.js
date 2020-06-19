import React, { Component } from 'react';
import AddingItems from "./components/adding-items";
import ItemsList from "./components/items-list";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import uuid from 'react-uuid';

class App extends Component {
    state = {
        items: [],
        id: uuid(),
        item: "",
        editItem: false
    };

    Change = e => {
        this.setState({
            item: e.target.value
        });
    };
    Submit = e => {
        e.preventDefault();

        const newItem = {
            id: this.state.id,
            title: this.state.item
        };

        const updatedItems = [...this.state.items, newItem];

        this.setState({
            items: updatedItems,
            item: "",
            id: uuid(),
            editItem: false
        });
    };

    clearList = () => {
        this.setState({
            items: []
        });
    };

    Delete = (id) => {
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
            items: filteredItems
        });
    };

    Edit = id => {
        const filteredItems = this.state.items.filter(item => item.id !== id);

        const ItemsSelected = this.state.items.find(item => item.id === id);

        console.log(ItemsSelected);

        this.setState({
            items: filteredItems,
            title: ItemsSelected.title,
            editItem: true,
            id: id
        });
    };

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto col-md-8 mt-4">
                        <h1 className="text-capitalize text-center">todo app</h1>
                        <AddingItems item={this.state.item} Change={this.Change} Submit={this.Submit} editItem={this.state.editItem}/>
                        <ItemsList items={this.state.items} clearList={this.clearList} Delete={this.Delete} Edit={this.Edit}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
