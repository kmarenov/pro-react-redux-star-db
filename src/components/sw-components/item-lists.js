import React from 'react';
import {withData, withSwapiService} from '../hoc-helpers';
import ItemList from '../item-list';

const withChildFunction = (fn) => (Wrapped) => {
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

const PersonList = withSwapiService(mapPersonMethodsToProps)(withData(withChildFunction(i => `${i.name} (${i.birthYear})`)(ItemList)));
const PlanetList = withSwapiService(mapPlanetMethodsToProps)(withData(withChildFunction(item => item.name)(ItemList)));
const StarshipList = withSwapiService(mapStarshipMethodsToProps)(withData(withChildFunction(({model, name}) => <span>{name} ({model})</span>)(ItemList)));

export {
    PersonList,
    PlanetList,
    StarshipList
};
