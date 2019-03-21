import React from 'react';
import PropTypes from 'prop-types';

const FixtureStatistics = ({
    mainTeam,
    secondTeam,
    draws,
}) => (
    <div className='fixtureStatistics'>
        <span>Statistics:</span>
        <span>{mainTeam.name} wins: {mainTeam.wins}</span>
        <span>{secondTeam.name} wins: {secondTeam.wins}</span>
        <span>Draws: {draws}</span>
    </div>
);

FixtureStatistics.propTypes = {
    mainTeam: PropTypes.object.isRequired,
    secondTeam: PropTypes.object.isRequired,
    draws: PropTypes.number.isRequired,
};

export class FixturesItem extends React.Component {
    constructor(props) {
        super(props);
        this.updateDetails = this.updateDetails.bind(this);
    }

    updateDetails() {
        this.props.updateDetails(
            this.props.leagueId,
            this.props.id,
            this.props.currentTeamId,
            this.props.awayTeam.id,
        );
    }

    render() {
        return (
            <div
                className={this.props.isActive ? 'fixturesItemActive' : 'fixturesItem'}
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
                        mainTeam={this.props.statistics.mainTeam}
                        secondTeam={this.props.statistics.secondTeam}
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
    id: PropTypes.number.isRequired,
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
