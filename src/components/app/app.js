import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import './app.css';
import { SwapiServiceProvider } from '../swapi-service-context';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage} from '../pages';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StarshipDetails from '../sw-components/starship-details';

export default class App extends Component {
    state = { isLoggedIn: false };

    onLogin = () => {
      this.setState({ isLoggedIn: true });
    };

    render() {
        const { isLoggedIn } = this.state;

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={new SwapiService()}>
                    <Router>
                    <div className="stardb-app">
                        <Header />
                        <RandomPlanet />

                        <Route path="/" render={() => <h2>Welcome to StarDB</h2>} exact />
                        <Route path="/people" render={() => <h2>People</h2>} />
                        <Route path="/people/:id?" component={PeoplePage} />
                        <Route path="/planets" component={PlanetsPage} />
                        <Route path="/starships" component={StarshipsPage} exact />
                        <Route path="/starships/:id" render={({ match }) => {
                            const { id } = match.params;
                            return <StarshipDetails itemId={id}/>
                        }} />

                        <Route
                            path="/login"
                            render={() => (
                                <LoginPage
                                    isLoggedIn={isLoggedIn}
                                    onLogin={this.onLogin}
                                />
                            )}
                        />

                        <Route
                            path="/secret"
                            render={() => (
                                <SecretPage isLoggedIn={isLoggedIn} />
                            )}
                        />

                    </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
};
