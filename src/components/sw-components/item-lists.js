import React from 'react';
import SwapiService from '../../services/swapi-service';
import { withData } from '../hoc-helpers';
import ItemList from '../item-list';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        )
    }
};

const PersonList = withData(withChildFunction(ItemList, i => `${i.name} (${i.birthYear})`), getAllPeople);
const PlanetList = withData(withChildFunction(ItemList, item => item.name), getAllPlanets);
const StarshipList = withData(withChildFunction(ItemList, ({model, name}) => <span>{name} ({model})</span>), getAllStarships);

export {
    PersonList,
    PlanetList,
    StarshipList
}
