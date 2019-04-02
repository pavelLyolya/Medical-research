import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../../../i18n';
import Pagination from '../../containers/PaginationContainer';

const PlayerItem = ({
    name, position, dateOfBirth, shirtNumber,
}) => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });
    return (
        <div className='playerItem'>
            <div className='playerInfo'>
                <h3 className='playerName'>{name}</h3>
                <span className='restInfo'>{t('team.players.position')}: {position}</span>
                <span className='restInfo'>{t('team.players.dateOfBirth')}: {new Date(dateOfBirth).toDateString()}</span>
            </div>
            <div className='shirtNumber'>
                <span>{shirtNumber}</span>
                <img src={'https://image.flaticon.com/icons/svg/290/290691.svg'} />
            </div>
        </div>
    );
};

PlayerItem.propTypes = {
    name: PropTypes.string.isRequired,
    position: PropTypes.string,
    dateOfBirth: PropTypes.string.isRequired,
    shirtNumber: PropTypes.number,
};

const PlayersList = ({ players }) => players && (
    <React.Fragment>
        <Pagination
            i18n={i18nInstance}
            useSuspense={false}
        />
        <section className='playersList'>
            {players.map(item => (
                <PlayerItem
                    key={item.id}
                    name={item.name}
                    position={item.position}
                    dateOfBirth={item.dateOfBirth}
                    shirtNumber={item.shirtNumber}
                />
            ))}
        </section>
    </React.Fragment>
);

PlayersList.propTypes = {
    players: PropTypes.array.isRequired,
};

export default PlayersList;
