import React from 'react';
import PropTypes from 'prop-types';

const FixtureStatistics = ({
    firstWins,
    secondWins,
    draws,
    firstName,
    secondName,
}) => (
    <div className='fixtureStatistics'>
        <span>Statistics:</span>
        <span>{firstName} wins: {firstWins}</span>
        <span>{secondName} wins: {secondWins}</span>
        <span>Draws: {draws}</span>
    </div>
);

FixtureStatistics.propTypes = {
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    firstWins: PropTypes.number.isRequired,
    secondWins: PropTypes.number.isRequired,
    draws: PropTypes.number.isRequired,
};

export class FixturesItem extends React.Component {
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
                <p className='fixturesItemDate'>Date: {new Date(this.props.utcDate).toDateString()}</p>
                {this.props.statistics && <React.Fragment>
                    <hr />
                    <FixtureStatistics
                        firstName={this.props.homeTeam.name}
                        secondName={this.props.awayTeam.name}
                        firstWins={this.props.statistics.firstWins}
                        secondWins={this.props.statistics.secondWins}
                        draws={this.props.statistics.draws}
                    />
                </React.Fragment>}
            </div>
        );
    }
}

FixturesItem.propTypes = {
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

const FixturesList = ({
    fixtures,
    fixtureDetails,
    currentTeamId,
    updateDetails,
    leagueId,
}) => fixtures && (
    <React.Fragment>
        <section className='fixturesList'>
            {fixtures.map(item => (
                <FixturesItem
                    key={item.id}
                    id={item.id}
                    isActive={item.id === fixtureDetails.activeItemId}
                    currentTeamId={currentTeamId}
                    homeTeam={item.homeTeam}
                    awayTeam={item.awayTeam}
                    score={item.score.fullTime}
                    utcDate={item.utcDate}
                    updateDetails={updateDetails}
                    leagueId={leagueId}
                />
            ))}
        </section>
    </React.Fragment>
);

FixturesList.propTypes = {
    fixtures: PropTypes.array,
    fixtureDetails: PropTypes.object.isRequired,
    currentTeamId: PropTypes.number.isRequired,
    updateDetails: PropTypes.func.isRequired,
    leagueId: PropTypes.number.isRequired,
};

export default FixturesList;
