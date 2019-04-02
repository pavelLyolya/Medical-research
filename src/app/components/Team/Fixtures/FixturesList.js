import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation, useTranslation } from 'react-i18next';
import i18nInstance from '../../../../i18n';

const FixtureStatistics = ({
    homeTeamWins,
    awayTeamWins,
    draws,
    homeTeamName,
    awayTeamName,
}) => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });
    return (
        <div className='fixtureStatistics'>
            <span>{t('team.fixtures.statistics')}:</span>
            <span>{homeTeamName} {t('team.fixtures.wins')}: {homeTeamWins}</span>
            <span>{awayTeamName} {t('team.fixtures.wins')}: {awayTeamWins}</span>
            <span>{t('team.fixtures.draws')}: {draws}</span>
        </div>
    );
};

FixtureStatistics.propTypes = {
    homeTeamName: PropTypes.string.isRequired,
    awayTeamName: PropTypes.string.isRequired,
    homeTeamWins: PropTypes.number.isRequired,
    awayTeamWins: PropTypes.number.isRequired,
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
                <p className='fixturesItemDate'>{this.props.t('team.fixtures.date')}: {new Date(this.props.utcDate).toDateString()}</p>
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

export const ExtendedFixturesItem = withTranslation('common')(FixturesItem);

const FixturesList = ({
    fixtures,
    fixtureDetails,
    currentTeamId,
    updateDetails,
    leagueId,
}) => fixtures && (
    <section className='fixturesList'>
        {fixtures.map(item => (
            <ExtendedFixturesItem
                i18n={i18nInstance}
                useSuspense={false}
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
);

FixturesList.propTypes = {
    fixtures: PropTypes.array,
    fixtureDetails: PropTypes.object.isRequired,
    currentTeamId: PropTypes.number.isRequired,
    updateDetails: PropTypes.func.isRequired,
    leagueId: PropTypes.number.isRequired,
};

export default FixturesList;
