import React, { Component } from 'react';
import './people-page.css';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import SwapiService from '../../services/swapi-service';
import Row from '../row';
import ErrorBoundry from '../error-boundry';

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
            )
        ;

        const personDetails = <PersonDetails personId={this.state.selectedPerson} />;

        return (
            <ErrorBoundry>
                <Row left={itemList} right={personDetails} />
            </ErrorBoundry>
        );
    }
}
