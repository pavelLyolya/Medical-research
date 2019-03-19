import React from 'react';
import PropTypes from 'prop-types';
import { TeamItem } from '../Teams/TeamsList';
import Players from './Players';
import Tweets from './Tweets';
import Fixtures from './Fixtures/Fixtures';
import FixtureDetails from './Fixtures/FixtureDetails';
import OneTeamControlls from './OneTeamControlls';
import '../../../css/OneTeam.scss';

const team = {
    id: 1,
    name: 'FC Bayern Munchen',
    shortName: 'Bayern',
    imgURL: 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
    isFavorite: false,
};

class OneTeam extends React.Component {
    render() {
        let oneTeamContent;
        if (this.props.isPlayersActive) {
            oneTeamContent = (
                <React.Fragment>
                    <Players />
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
                        isFavorite={team.isFavorite}
                        activeLeagueId={2021}
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
    isPlayersActive: PropTypes.bool.isRequired,
    togglePlayersFixtures: PropTypes.func.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
};

export default OneTeam;
