import React from 'react';
// import PropTypes from 'prop-types';
import TeamsList from '../Teams/TeamsList';
import Players from './Players';
import Tweets from './Tweets';
import Fixtures from './Fixtures/Fixtures';
import FixtureDetails from './Fixtures/FixtureDetails';
import OneTeamControlls from './OneTeamControlls';
import '../../../css/OneTeam.scss';

const team = [{
    id: 1,
    name: 'FC Bayern Munchen',
    shortName: 'Bayern',
    imgURL: 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
}];

const isPlayersActive = false;

class OneTeam extends React.Component {
    render() {
        let oneTeamContent;
        if (isPlayersActive) {
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
                    <TeamsList teamsArray={team} />
                    <OneTeamControlls />
                </header>
                <section className='oneTeamContent'>
                    {oneTeamContent}
                </section>
            </section>
        );
    }
}

// Teams.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default OneTeam;
