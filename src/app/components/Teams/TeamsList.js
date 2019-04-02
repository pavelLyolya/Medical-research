import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import i18nInstance from '../../../i18n';
import { isFavorite } from '../../services/functions';

export class TeamItem extends React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    toggleFavorite() {
        if (!this.props.isFavorite) {
            this.props.addFavoriteTeam(this.props.team, this.props.activeLeagueId);
        } else {
            this.props.deleteFavoriteTeam(this.props.team.teamId);
        }
    }

    render() {
        return (
            <div className='teamItem'>
                <div className='crestImg'>
                    <img src={this.props.team.imgURL} />
                </div>
                <div className='teamInfo'>
                    <Link to={`/teams/${this.props.team.teamId}`} className='teamName'>{this.props.team.name}</Link>
                    <span className='teamShortName'>{this.props.t('teams.shortName')}: {this.props.team.shortName}</span>
                    <button className='addToFavorite' onClick={this.toggleFavorite}>
                        {this.props.isFavorite ? this.props.t('teams.removeFromFavorites') : this.props.t('teams.addToFavorites')}
                    </button>
                </div>
            </div>
        );
    }
}

TeamItem.propTypes = {
    t: PropTypes.func.isRequired,
    activeLeagueId: PropTypes.number.isRequired,
    team: PropTypes.object.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
};

const ExtendedTeamItem = withTranslation('common')(TeamItem);

const TeamsList = ({
    teamsArray,
    activeLeagueId,
    addFavoriteTeam,
    deleteFavoriteTeam,
    favoriteTeams,
}) => teamsArray && (
    <section className='teamsList'>
        {teamsArray.map(item => <ExtendedTeamItem
            i18n={i18nInstance}
            useSuspense={false}
            key={item.teamId}
            team={item}
            isFavorite={isFavorite(favoriteTeams, item.teamId)}
            activeLeagueId={activeLeagueId}
            addFavoriteTeam={addFavoriteTeam}
            deleteFavoriteTeam={deleteFavoriteTeam}
        />)}
    </section>
);

TeamsList.propTypes = {
    activeLeagueId: PropTypes.number.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
    favoriteTeams: PropTypes.array.isRequired,
    teamsArray: PropTypes.array,
};

export default TeamsList;
