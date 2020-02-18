import React, { Component } from 'react';

import './item-details.css';
import Spinner from '../spinner';

const Record =  ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {
    state = {
        item: null,
        image: null
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImageUrl } = this.props;

        if (!itemId) {
            return;
        }

        this.setState(() => { return { item: null }});

        getData(itemId)
            .then(item => this.setState({
                item,
                image: getImageUrl(item)
            }));
    }

    render() {
        /*
        if (!this.state.item) {
            return <span>Select a item from a list</span>;
        }
        */

        const { item, image } = this.state;

        if (!item) {
            return <Spinner />;
        }

        return (
            <div className="item-details card">
                <ItemView item={ item } image={ image }>{this.props.children}</ItemView>
            </div>
        )
    }
}

class ItemView extends Component {
    render = () => {
        const {item, image} = this.props;

        return (
            <React.Fragment>
                <img className="item-image" src={image}/>

                <div className="card-body">
                    <h4>{item.name}</h4>
                    <ul className="list-group list-group-flush">
                        {
                            React.Children.map(this.props.children, child => {
                                return React.cloneElement(child, {item})
                            })
                        }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
