import SwapiService from "../../services/swapi-service";
import ItemDetails, {Record} from "../item-details";
import React from "react";

const swapiService = new SwapiService();

const {
    getPerson,
    getPlanet,
    getStarship,
    getPersonImage,
    getPlanetImage,
    getStarshipImage
} = swapiService;

const PersonDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getPerson}
                     getImageUrl={getPersonImage}>
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth year" />
            <Record field="eyeColor" label="Eye color" />
        </ItemDetails>
    );
};

const PlanetDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getPlanet}
                     getImageUrl={getPlanetImage}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation period" />
            <Record field="diameter" label="Diameter" />
        </ItemDetails>
    );
};

const StarshipDetails = ({itemId}) => {
    return (
        <ItemDetails itemId={itemId}
                     getData={getStarship}
                     getImageUrl={getStarshipImage}>
            <Record field="model" label="Model" />
            <Record field="manufacturer" label="Manufacturer" />
            <Record field="costInCredits" label="Cost in credits" />
        </ItemDetails>
    );
};

export {
    PersonDetails,
    PlanetDetails,
    StarshipDetails
}
