import React from 'react';
// import PropTypes from 'prop-types';
import TeamsHeader from './TeamsHeader';
import '../../../css/Teams.scss';

class Teams extends React.Component {
    render() {
        return (
            <section>
                <TeamsHeader headerName={'Active League Name'} />
            </section>
        );
    }
}

// Teams.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default Teams;
