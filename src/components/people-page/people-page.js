import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ItemDetails, { Record } from '../item-details';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3
    };

    swapiService = new SwapiService();

    onPersonSelected = (id) => {
        this.setState({ selectedPerson: id });
    };

    render() {
        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={this.swapiService.getAllPeople}>

                {i => `${i.name} (${i.birthYear})`}

            </ItemList>
        );

        const personDetails = (
            <ItemDetails itemId={this.state.selectedPerson}
                         getData={this.swapiService.getPerson}
                         getImageUrl={this.swapiService.getPersonImage}>
                <Record field="gender" label="Gender" />
                <Record field="birthYear" label="Birth year" />
                <Record field="eyeColor" label="Eye color" />
            </ItemDetails>
        );

        return <Row left={itemList} right={personDetails} />;
    }
}
