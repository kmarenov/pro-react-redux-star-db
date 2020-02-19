import React from 'react';
import {compose, withData, withSwapiService, withChildFunction} from '../hoc-helpers';
import ItemList from '../item-list';

const mapPersonMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPeople };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPlanets };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllStarships };
};

const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(i => `${i.name} (${i.birthYear})`)
)(ItemList);

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(item => item.name)
)(ItemList);

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(({model, name}) => <span>{name} ({model})</span>)
)(ItemList);

export {
    PersonList,
    PlanetList,
    StarshipList
};
