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
        loading: true,
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

        this.setState(() => { return { loading: true }});

        getData(itemId)
            .then(item => this.setState({
                item,
                loading: false,
                image: getImageUrl(item)
            }));
    }

    render() {
        if (!this.state.item) {
            return <span>Select a item from a list</span>;
        }

        const { item, loading, image } = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <ItemView item={ item } image={ image }>{this.props.children}</ItemView> : null;

        return (
            <div className="item-details card">
                {spinner}
                {content}
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
