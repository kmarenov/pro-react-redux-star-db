import withSwapiService from '../hoc-helpers/with-swapi-service';
import ItemDetails, {Record} from '../item-details';
import React from 'react';

const StarshipDetails = ({itemId, swapiService}) => {
    const { getStarship,  getStarshipImage } = swapiService;

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

export default withSwapiService(StarshipDetails);
