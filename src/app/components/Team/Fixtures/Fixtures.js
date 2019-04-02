import React from 'react';
import { useTranslation } from 'react-i18next';
import i18nInstance from '../../../../i18n';
import TeamsHeader from '../../Teams/TeamsHeader';
import FixturesList from '../../../containers/FixturesListContainer';
import Pagination from '../../../containers/PaginationContainer';
import DateChooser from '../../../containers/DateChooserContainer';

const Fixtures = () => {
    const { t } = useTranslation('common', { i18nInstance, useSuspense: false });
    return (
        <div className='fixtures'>
            <TeamsHeader headerName={t('team.headers.Fixtures')} />
            <DateChooser
                i18n={i18nInstance}
                useSuspense={false}
            />
            <Pagination
                i18n={i18nInstance}
                useSuspense={false}
            />
            <FixturesList />
        </div>
    );
};

export default Fixtures;
