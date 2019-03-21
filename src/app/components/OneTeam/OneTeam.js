import React from 'react';
import PropTypes from 'prop-types';
import { TeamItem } from '../Teams/TeamsList';
import Players from './Players';
import Tweets from './Tweets';
import Fixtures from './Fixtures/Fixtures';
import FixtureDetails from './Fixtures/FixtureDetails';
import OneTeamControlls from './OneTeamControlls';
import { isFavorite } from '../../services/functions';
import '../../../css/OneTeam.scss';

class OneTeam extends React.Component {
    constructor(props) {
        super(props);
        this.togglePlayersFixtures = this.togglePlayersFixtures.bind(this);
    }

    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        this.props.fetchOneTeam(this.props.match.params.id);
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
        let oneTeamContent;
        if (this.props.isPlayersActive) {
            oneTeamContent = (
                <React.Fragment>
                    <Players players={entities} />
                    <Tweets />
                </React.Fragment>
            );
        } else {
            oneTeamContent = (
                <React.Fragment>
                    <Fixtures fixtures={entities} />
                    <FixtureDetails />
                </React.Fragment>
            );
        }
        return (
            <section className='oneTeamSection'>
                <header className='oneTeamHeader'>
                    <TeamItem
                        team={team}
                        isFavorite={isFavorite(this.props.favoriteTeams, team.teamId)}
                        activeLeagueId={this.props.activeLeagueId}
                        addFavoriteTeam={this.props.addFavoriteTeam}
                        deleteFavoriteTeam={this.props.deleteFavoriteTeam}
                    />
                    <OneTeamControlls
                        isPlayersActive={this.props.isPlayersActive}
                        togglePlayersFixtures={this.togglePlayersFixtures}
                    />
                </header>
                <section className='oneTeamContent'>
                    {oneTeamContent}
                </section>
            </section>
        );
    }
}

OneTeam.propTypes = {
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
    fetchOneTeam: PropTypes.func.isRequired,
};

export default OneTeam;
