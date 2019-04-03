import React from 'react';
import PropTypes from 'prop-types';
import FixturesItem from './FixturesItem';

class FixtureDetails extends React.Component {
    componentWillUnmount() {
        this.props.clearFixtureDetails();
    }

    render() {
        if (
            !this.props.item
            || !this.props.fixtureDetails.statistics
            || !this.props.fixtureDetails.headToHead
        ) {
            return null;
        }
        return (
            <div className='fixtureDetails'>
                <FixturesItem
                    homeTeam={this.props.item.homeTeam}
                    awayTeam={this.props.item.awayTeam}
                    score={this.props.item.score.fullTime}
                    utcDate={this.props.item.utcDate}
                    statistics={this.props.fixtureDetails.statistics}
                />
                <div className='lastGamesPanel'>
                    {this.props.fixtureDetails.headToHead.map(game => (
                        <FixturesItem
                            key={game.id}
                            isActive={game.id === this.props.fixtureDetails.activeItemId}
                            homeTeam={game.homeTeam}
                            awayTeam={game.awayTeam}
                            score={game.score.fullTime}
                            utcDate={game.utcDate}
                        />
                    ))}
                </div>
            </div>
        );
    }
}

FixtureDetails.propTypes = {
    fixtureDetails: PropTypes.object,
    item: PropTypes.object,
    clearFixtureDetails: PropTypes.func,
};

export default FixtureDetails;
