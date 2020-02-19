import React, { Component } from 'react';
import Row from '../row';
import {PlanetDetails, PlanetList} from '../sw-components';

export default class PlanetsPage extends Component {
    state = {
        selectedPlanet: 3
    };

    onPlanetSelected = (id) => {
        this.setState({ selectedPlanet: id });
    };

    render() {
        return <Row
            left={<PlanetList onItemSelected={this.onPlanetSelected} />}
            right={<PlanetDetails itemId={this.state.selectedPlanet} />} />;
    }
}
