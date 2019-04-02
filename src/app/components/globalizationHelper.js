import React from 'react';
import { withTranslation } from 'react-i18next';
import i18nInstance from '../../i18n';

const globalizationHelper = (Component) => {
    const ExtendedComponent = withTranslation('common')(Component);
    const TranslatedComponent = props => <ExtendedComponent
        i18n={i18nInstance}
        useSuspense={false}
        {...props}
    />;
    return TranslatedComponent;
};

export default globalizationHelper;
