import React, { Component } from 'react';
import './item-list.css';

export default class ItemList extends Component {
    renderItems(arr) {
        return arr.map((item) => {
            const { id } = item;

            const label = this.props.children(item);

            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => this.props.onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    }

    render() {
        const items = this.renderItems(this.props.data);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}
