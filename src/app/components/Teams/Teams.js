import React from 'react';
import PropTypes from 'prop-types';
import TeamsHeader from './TeamsHeader';
import LeagueSelect from './LeagueSelect';
import FavoritesButton from './FavoritesButton';
import TeamsList from './TeamsList';
import { initialState } from '../../reducers/leagues';
// import { getAllTeams } from '../../services/api';
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
    componentDidMount() {
        this.props.fetchTeams(this.props.activeLeagueId);
    }

    render() {
        return (
            <section className='teamsSection'>
                <TeamsHeader headerName={'Active League Name'} />
                <div className='teamsSubheader'>
                    <LeagueSelect leaguesArray={initialState} />
                    <FavoritesButton />
                </div>
                <TeamsList teamsArray={teamsArray} />
            </section>
        );
    }
}

Teams.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    leagues: PropTypes.array.isRequired,
    changeActiveLeague: PropTypes.func.isRequired,
    fetchTeams: PropTypes.func.isRequired,
};

export default Teams;
