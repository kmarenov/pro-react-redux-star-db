import React from 'react';
import {PersonList} from '../sw-components';
import {withRouter} from 'react-router-dom';
import Row from "../row";
import PersonDetails from "../sw-components/person-details";

const PeoplePage = ({ match, history }) => {
    const { id } = match.params;

    return (
        <Row
            left={<PersonList onItemSelected={(itemId) => {
                history.push(itemId);
            }} />}
            right={<PersonDetails itemId={id} />} />
    );
};

export default withRouter(PeoplePage);
