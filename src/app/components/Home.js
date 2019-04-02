import React from 'react';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../../i18n';
import '../../css/Footer.scss';

const Home = () => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });

    return (
        <section className='homePage'>
            <p className='description'>{t('home.leagues')}</p>
            <p className='description'>{t('home.teams')}</p>
            <p className='description'>{t('home.players')}</p>
            <p className='description'>{t('home.fixtures')}</p>
        </section>
    );
};

export default Home;
