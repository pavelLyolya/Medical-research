import React from 'react';
import PropTypes from 'prop-types';
import globalizationHelper from './globalizationHelper';
import '../../css/Footer.scss';

const Home = ({ t }) => (
    <section className='homePage'>
        <p className='description'>{t('home.leagues')}</p>
        <p className='description'>{t('home.teams')}</p>
        <p className='description'>{t('home.players')}</p>
        <p className='description'>{t('home.fixtures')}</p>
    </section>
);

Home.propTypes = {
    t: PropTypes.func,
};

export default globalizationHelper(Home);
