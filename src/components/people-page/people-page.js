import React, { Component } from 'react';
import './people-page.css';
import Row from '../row';
import {PersonDetails, PersonList} from '../sw-components';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3
    };

    onPersonSelected = (id) => {
        this.setState({ selectedPerson: id });
    };

    render() {
        const itemList = (
            <PersonList onItemSelected={this.onPersonSelected} />
        );

        const personDetails = (
            <PersonDetails itemId={this.state.selectedPerson} />
        );

        return <Row left={itemList} right={personDetails} />;
    }
}
