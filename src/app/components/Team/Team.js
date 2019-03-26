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
        this.props.activateTeams();
        // eslint-disable-next-line react/prop-types
        const teamId = +this.props.match.params.id;
        if (this.props.isFavoritesShown) {
            const foundTeam = this.props.favoriteTeams.find(item => teamId === item.teamId);
            if (foundTeam) {
                this.props.fetchTeam(teamId, foundTeam.leagueId);
            }
        } else {
            this.props.fetchTeam(teamId, this.props.activeLeagueId);
        }
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
                    <Fixtures />
                    {this.props.fixtureDetails.isActive && <FixtureDetails
                        fixtureDetails={this.props.fixtureDetails}
                        item={entities.find(
                            entity => entity.id === this.props.fixtureDetails.activeItemId,
                        )}
                        clearFixtureDetails={this.props.clearFixtureDetails}

                    />}
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
    activateTeams: PropTypes.func.isRequired,
    currentTeam: PropTypes.object,
    entities: PropTypes.array,
    isPlayersActive: PropTypes.bool.isRequired,
    isFavoritesShown: PropTypes.bool.isRequired,
    favoriteTeams: PropTypes.array.isRequired,
    activeLeagueId: PropTypes.number.isRequired,
    togglePlayersFixtures: PropTypes.func.isRequired,
    clearPagination: PropTypes.func.isRequired,
    clearFixtureDetails: PropTypes.func.isRequired,
    fixtureDetails: PropTypes.object.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
    deleteCurrentTeam: PropTypes.func.isRequired,
    addCurrentTeam: PropTypes.func.isRequired,
    fetchTeam: PropTypes.func.isRequired,
};

export default Team;
