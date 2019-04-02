import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import globalizationHelper from '../globalizationHelper';

class TeamItem extends React.PureComponent {
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
    t: PropTypes.func,
    activeLeagueId: PropTypes.number.isRequired,
    team: PropTypes.object.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    addFavoriteTeam: PropTypes.func.isRequired,
    deleteFavoriteTeam: PropTypes.func.isRequired,
};

export default globalizationHelper(TeamItem);
