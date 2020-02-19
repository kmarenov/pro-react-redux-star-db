import {SwapiServiceConsumer} from '../swapi-service-context';
import ItemDetails, {Record} from '../item-details';
import React from 'react';

const PlanetDetails = ({itemId}) => {
    return (
        <SwapiServiceConsumer>
            {
                ({ getPlanet, getPlanetImage }) => {
                    return (
                        <ItemDetails itemId={itemId}
                                     getData={getPlanet}
                                     getImageUrl={getPlanetImage}>
                            <Record field="population" label="Population" />
                            <Record field="rotationPeriod" label="Rotation period" />
                            <Record field="diameter" label="Diameter" />
                        </ItemDetails>
                    );
                }
            }
        </SwapiServiceConsumer>
    );
};

export default PlanetDetails;
