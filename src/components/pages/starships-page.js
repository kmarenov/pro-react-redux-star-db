import React, { Component } from 'react';
import Row from '../row';
import {StarshipDetails, StarshipList} from '../sw-components';

export default class StarshipsPage extends Component {
    state = {
        selectedStarship: 5
    };

    onStarshipSelected = (id) => {
        this.setState({ selectedStarship: id });
    };

    render() {
        return <Row
            left={<StarshipList onItemSelected={this.onStarshipSelected} />}
            right={<StarshipDetails itemId={this.state.selectedStarship} />} />;
    }
}
