import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';

export default class ItemDetails extends Component {
    swapiService = new SwapiService();

    state = {
        item: null,
        loading: true,
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
        const { itemId } = this.props;

        if (!itemId) {
            return;
        }

        this.setState(() => { return { loading: true }});

        this.swapiService
            .getPerson(itemId)
            .then(item => this.setState({ item, loading: false }));
    }

    render() {
        if (!this.state.item) {
            return <span>Select a item from a list</span>;
        }

        const { item, loading } = this.state;

        const spinner = loading ? <Spinner/> : null;
        const content = !loading ? <ItemView item={ item } /> : null;

        return (
            <div className="item-details card">
                {spinner}
                {content}
            </div>
        )
    }
}

const ItemView = ({ item }) => {
    const { id, name, gender, birthYear, eyeColor } = item;

    return (
      <React.Fragment>
          <img className="item-image"
               src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

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
