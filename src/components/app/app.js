import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import {PlanetDetails, PlanetList, StarshipDetails, StarshipList} from '../sw-components';
import Row from '../row';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false
    };

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
    }

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator />;
        }

        const planet = this.state.showRandomPlanet ?
            <RandomPlanet/> :
            null;

        const planetList = (
            <PlanetList onItemSelected={this.onPersonSelected}>
                {(item) => item.name}
            </PlanetList>
        );

        const planetDetails = <PlanetDetails itemId={3} />;

        const starshipList = (
            <StarshipList onItemSelected={this.onPersonSelected}>
                {(item) => item.name}
            </StarshipList>
        );

        const starshipDetails = <StarshipDetails itemId={5} />;

        return (
            <div className="stardb-app">
                <Header />
                { planet }

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>

                <PeoplePage />

                <Row left={planetList} right={planetDetails} />

                <Row left={starshipList} right={starshipDetails} />
            </div>
        );
    }
};
