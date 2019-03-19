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
    componentDidMount() {
        // eslint-disable-next-line react/prop-types
        this.props.fetchOneTeam(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.deleteCurrentTeam();
    }

    render() {
        const team = this.props.currentTeam;
        if (!team) {
            return null;
        }
        let oneTeamContent;
        if (this.props.isPlayersActive) {
            oneTeamContent = (
                <React.Fragment>
                    <Players players={team.squad} />
                    <Tweets />
                </React.Fragment>
            );
        } else {
            oneTeamContent = (
                <React.Fragment>
                    <Fixtures />
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
                        togglePlayersFixtures={this.props.togglePlayersFixtures}
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
    isPlayersActive: PropTypes.bool.isRequired,
    favoriteTeams: PropTypes.array.isRequired,
    activeLeagueId: PropTypes.number.isRequired,
    togglePlayersFixtures: PropTypes.func.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
    deleteCurrentTeam: PropTypes.func.isRequired,
    addCurrentTeam: PropTypes.func.isRequired,
    fetchOneTeam: PropTypes.func.isRequired,
};

export default OneTeam;
