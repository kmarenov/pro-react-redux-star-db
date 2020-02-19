import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import PeoplePage from '../people-page/people-page';
import { PlanetDetails, PlanetList, StarshipDetails, StarshipList } from '../sw-components';
import Row from '../row';
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';

export default class App extends Component {
   render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={new SwapiService()}>
                    <div className="stardb-app">
                        <Header />

                        <RandomPlanet/>

                        <PeoplePage />

                        <Row
                            left={<PlanetList />}
                            right={<PlanetDetails itemId={3} />} />

                        <Row
                            left={<StarshipList />}
                            right={<StarshipDetails itemId={5} />} />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
