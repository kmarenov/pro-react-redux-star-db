import React from 'react';
import {withData, withSwapiService} from '../hoc-helpers';
import ItemList from '../item-list';

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const mapPersonMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPeople };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllPlanets };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return { getData: swapiService.getAllStarships };
};

const PersonList = withSwapiService(withData(withChildFunction(ItemList, i => `${i.name} (${i.birthYear})`)), mapPersonMethodsToProps);
const PlanetList = withSwapiService(withData(withChildFunction(ItemList, item => item.name)), mapPlanetMethodsToProps);
const StarshipList = withSwapiService(withData(withChildFunction(ItemList, ({model, name}) => <span>{name} ({model})</span>)), mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
}
