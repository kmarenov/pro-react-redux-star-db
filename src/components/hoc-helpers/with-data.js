import React, {Component} from 'react';
import Spinner from '../spinner';

const withData = (View) => {
    return class extends Component {
        state = {
            data: null
        };

        componentDidMount() {
            const { getData } = this.props;

            getData()
                .then(data => this.setState({ data }))
            ;
        }

        render() {
            const { data } = this.state;

            if (!data) {
                return <Spinner />;
            }

            return <View {...this.props} data={data} />
        }
    }
};

export default withData;
