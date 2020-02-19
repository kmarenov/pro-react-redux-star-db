import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import {PeoplePage, PlanetsPage, StarshipsPage} from '../pages';

export default class App extends Component {
   render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={new SwapiService()}>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet/>
                        <PeoplePage />
                        <PlanetsPage />
                        <StarshipsPage />
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
