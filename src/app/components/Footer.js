import React from 'react';
import '../../css/Footer.scss';
import i18nInstance from '../../i18n';

const Footer = () => (
    <footer className='appFooter'>
        <p className='devInfo'>
            <span>developed by Pavel Lyolya</span>
            <span>2019</span>
        </p>
        <ul className='languages'>
            {i18nInstance.languages.map((item, index) => <li
                key={index}
                onClick={() => i18nInstance.changeLanguage(item)}
            >{item}</li>)}
        </ul>
    </footer>
);

export default Footer;
