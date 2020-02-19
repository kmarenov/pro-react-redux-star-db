import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import {PlanetDetails, PlanetList, StarshipDetails, StarshipList} from '../sw-components';
import Row from '../row';
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        hasError: false
    };
    
    swapiService = new SwapiService();

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

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="stardb-app">
                        <Header />
                        { planet }

                        <button
                            className="toggle-planet btn btn-warning btn-lg"
                            onClick={this.toggleRandomPlanet}>
                            Toggle Random Planet
                        </button>

                        <PeoplePage />

                        <Row left={<PlanetList onItemSelected={this.onPersonSelected} />} right={<PlanetDetails itemId={3} />} />

                        <Row left={<StarshipList onItemSelected={this.onPersonSelected} />} right={<StarshipDetails itemId={5} />} />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
