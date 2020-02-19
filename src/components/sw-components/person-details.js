import ItemDetails, {Record} from '../item-details';
import React from 'react';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PersonDetails = ({itemId, swapiService}) => {
    const { getPerson,  getPersonImage } = swapiService;

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

export default withSwapiService(PersonDetails);
