import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text }) => (
    <button className='signButton'>
        {text}
    </button>
);

Button.propTypes = {
    text: PropTypes.string,
};

export default Button;
