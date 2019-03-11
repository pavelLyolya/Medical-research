import React from 'react';
// import PropTypes from 'prop-types';
import TeamsHeader from './TeamsHeader';
import LeagueSelect from './LeagueSelect';
import { initialState } from '../../reducers/leagues';
import TeamsList from './TeamsList';
import '../../../css/Teams.scss';

const teamsArray = [
    {
        id: 1,
        name: 'FC Bayern Munchen',
        shortName: 'Bayern',
        imgURL: 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
    },
    {
        id: 2,
        name: 'FC Bayern Munchen',
        shortName: 'Bayern',
        imgURL: 'https://upload.wikimedia.org/wikipedia/de/4/41/Afc_bournemouth.svg',
    },
    {
        id: 3,
        name: 'FC Bayern Munchen',
        shortName: 'Bayern',
        imgURL: 'http://upload.wikimedia.org/wikipedia/de/c/c9/FC_Southampton.svg',
    },
    {
        id: 4,
        name: 'FC Bayern Munchen',
        shortName: 'Bayern',
        imgURL: 'http://upload.wikimedia.org/wikipedia/de/5/56/Newcastle_United_Logo.svg',
    },
];

class Teams extends React.Component {
    render() {
        return (
            <section className='teamsSection'>
                <TeamsHeader headerName={'Active League Name'} />
                <LeagueSelect leaguesArray={initialState} />
                <TeamsList teamsArray={teamsArray} />
            </section>
        );
    }
}

// Teams.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default Teams;
