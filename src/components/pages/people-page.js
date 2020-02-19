import React, { Component } from 'react';
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
        return <Row
            left={<PersonList onItemSelected={this.onPersonSelected} />}
            right={<PersonDetails itemId={this.state.selectedPerson} />} />;
    }
}
