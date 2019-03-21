import React from 'react';
import PropTypes from 'prop-types';
import { TeamItem } from '../Teams/TeamsList';
import Players from './Players';
import Tweets from './Tweets';
import Fixtures from './Fixtures/Fixtures';
import FixtureDetails from './Fixtures/FixtureDetails';
import TeamControlls from './TeamControlls';
import { isFavorite } from '../../services/functions';
import '../../../css/Team.scss';

class Team extends React.Component {
    constructor(props) {
        super(props);
        this.togglePlayersFixtures = this.togglePlayersFixtures.bind(this);
    }

    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        this.props.fetchTeam(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.deleteCurrentTeam();
    }

    togglePlayersFixtures() {
        this.props.clearPagination();
        this.props.togglePlayersFixtures();
    }

    render() {
        const team = this.props.currentTeam;
        const { entities } = this.props;
        if (!team) {
            return null;
        }
        let TeamContent;
        if (this.props.isPlayersActive) {
            TeamContent = (
                <React.Fragment>
                    <Players players={entities} />
                    <Tweets />
                </React.Fragment>
            );
        } else {
            TeamContent = (
                <React.Fragment>
                    <Fixtures fixtures={entities} />
                    <FixtureDetails />
                </React.Fragment>
            );
        }
        return (
            <section className='TeamSection'>
                <header className='TeamHeader'>
                    <TeamItem
                        team={team}
                        isFavorite={isFavorite(this.props.favoriteTeams, team.teamId)}
                        activeLeagueId={this.props.activeLeagueId}
                        addFavoriteTeam={this.props.addFavoriteTeam}
                        deleteFavoriteTeam={this.props.deleteFavoriteTeam}
                    />
                    <TeamControlls
                        isPlayersActive={this.props.isPlayersActive}
                        togglePlayersFixtures={this.togglePlayersFixtures}
                    />
                </header>
                <section className='TeamContent'>
                    {TeamContent}
                </section>
            </section>
        );
    }
}

Team.propTypes = {
    currentTeam: PropTypes.object,
    entities: PropTypes.array,
    isPlayersActive: PropTypes.bool.isRequired,
    favoriteTeams: PropTypes.array.isRequired,
    activeLeagueId: PropTypes.number.isRequired,
    togglePlayersFixtures: PropTypes.func.isRequired,
    clearPagination: PropTypes.func.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
    deleteCurrentTeam: PropTypes.func.isRequired,
    addCurrentTeam: PropTypes.func.isRequired,
    fetchTeam: PropTypes.func.isRequired,
};

export default Team;
