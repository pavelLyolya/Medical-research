import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from '../../globalizationHelper';
import FixtureStatistics from './FixtureStatistics';
import { team } from '../../../services/translationKeys';

class FixturesItem extends React.Component {
    constructor(props) {
        super(props);
        this.updateDetails = this.updateDetails.bind(this);
    }

    updateDetails() {
        if (this.props.updateDetails) {
            this.props.updateDetails(
                this.props.leagueId,
                this.props.id,
                this.props.homeTeam.id,
                this.props.awayTeam.id,
            );
        }
    }

    render() {
        return (
            <div
                className={this.props.isActive ? 'fixturesItemSelected' : 'fixturesItem'}
                onClick={this.updateDetails}
            >
                <header className='fixturesItemHeader'>
                    <h3>{this.props.homeTeam.name} - {this.props.awayTeam.name}</h3>
                    {this.props.score && this.props.score.homeTeam !== null && <span>
                        {this.props.score.homeTeam} - {this.props.score.awayTeam}
                    </span>}
                </header>
                <p className='fixturesItemDate'>{this.props.t(team.fixtures.date)}: {new Date(this.props.utcDate).toDateString()}</p>
                {this.props.statistics && <React.Fragment>
                    <hr />
                    <FixtureStatistics
                        homeTeamName={this.props.homeTeam.name}
                        awayTeamName={this.props.awayTeam.name}
                        homeTeamWins={this.props.statistics.firstWins}
                        awayTeamWins={this.props.statistics.secondWins}
                        draws={this.props.statistics.draws}
                    />
                </React.Fragment>}
            </div>
        );
    }
}

FixturesItem.propTypes = {
    t: PropTypes.func.isRequired,
    homeTeam: PropTypes.object.isRequired,
    awayTeam: PropTypes.object.isRequired,
    score: PropTypes.object,
    utcDate: PropTypes.string.isRequired,
    statistics: PropTypes.object,
    isActive: PropTypes.bool,
    updateDetails: PropTypes.func,
    currentTeamId: PropTypes.number,
    id: PropTypes.number,
    leagueId: PropTypes.number,

};

export default globalizationHelper(FixturesItem);
