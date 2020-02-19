import React, { Component } from 'react';
import './item-list.css';

const ItemList = ({data, children: renderLabel, onItemSelected}) => {
    const renderItems = (arr) => {
        return arr.map((item) => {
            const { id } = item;

            const label = renderLabel(item);

            return (
                <li className="list-group-item"
                    key={id}
                    onClick={() => onItemSelected(id)}>
                    {label}
                </li>
            );
        });
    };

    const items = renderItems(data);

    return (
        <ul className="item-list list-group">
            {items}
        </ul>
    );
};

ItemList.defaultProps = {
    onItemSelected: () => {}
};

export default ItemList;
