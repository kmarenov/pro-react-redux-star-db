import ItemDetails, {Record} from '../item-details';
import React from 'react';
import withSwapiService from '../hoc-helpers/with-swapi-service';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender" />
            <Record field="birthYear" label="Birth year" />
            <Record field="eyeColor" label="Eye color" />
        </ItemDetails>
    );
};

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
};

export default withSwapiService(PersonDetails, mapMethodsToProps);
