import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import ItemDetails, { Record } from '../item-details';
import ItemList from '../item-list';
import SwapiService from "../../services/swapi-service";

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
            <div className="stardb-app">
                <Header />
                { planet }

                <button
                    className="toggle-planet btn btn-warning btn-lg"
                    onClick={this.toggleRandomPlanet}>
                    Toggle Random Planet
                </button>

                <PeoplePage />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}>
                            {(item) => item.name}
                        </ItemList>
                    </div>
                    <div className="col-md-6">
                        <ItemDetails itemId={3}
                                     getData={this.swapiService.getPlanet}
                                     getImageUrl={this.swapiService.getPlanetImage}>
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}>
                            {(item) => item.name}
                        </ItemList>
                    </div>
                    <div className="col-md-6">
                        <ItemDetails itemId={5}
                                     getData={this.swapiService.getStarship}
                                     getImageUrl={this.swapiService.getStarshipImage}>
                            <Record field="model" label="Model" />
                            <Record field="manufacturer" label="Manufacturer" />
                            <Record field="costInCredits" label="Cost in credits" />
                        </ItemDetails>
                    </div>
                </div>
            </div>
        );
    }
};
