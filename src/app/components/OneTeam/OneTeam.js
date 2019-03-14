import React from 'react';
// import PropTypes from 'prop-types';
import TeamsList from '../Teams/TeamsList';
import Players from './Players';
import Tweets from './Tweets';
import '../../../css/OneTeam.scss';

const team = [{
    id: 1,
    name: 'FC Bayern Munchen',
    shortName: 'Bayern',
    imgURL: 'http://upload.wikimedia.org/wikipedia/en/5/53/Arsenal_FC.svg',
}];

class OneTeam extends React.Component {
    render() {
        return (
            <section className='oneTeamSection'>
                <TeamsList teamsArray={team} />
                <section className='oneTeamContent'>
                    <Players />
                    <Tweets />
                </section>
            </section>
        );
    }
}

// Teams.propTypes = {
//     activeLeagueName: PropTypes.string.isRequired,
// };

export default OneTeam;
