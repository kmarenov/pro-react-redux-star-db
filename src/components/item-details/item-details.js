import React, { Component } from 'react';

import './item-details.css';
import Spinner from '../spinner';

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
        const content = !loading ? <ItemView item={ item } image={ image } /> : null;

        return (
            <div className="item-details card">
                {spinner}
                {content}
            </div>
        )
    }
}

const ItemView = ({ item, image }) => {
    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <React.Fragment>
          <img className="item-image" src={ image } />

          <div className="card-body">
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                      <span className="term">Gender</span>
                      <span>{gender}</span>
                  </li>
                  <li className="list-group-item">
                      <span className="term">Birth Year</span>
                      <span>{birthYear}</span>
                  </li>
                  <li className="list-group-item">
                      <span className="term">Eye Color</span>
                      <span>{eyeColor}</span>
                  </li>
              </ul>
          </div>
      </React.Fragment>
    );
};

