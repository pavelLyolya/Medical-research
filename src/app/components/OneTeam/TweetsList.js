import React from 'react';
import PropTypes from 'prop-types';

const TweetItem = ({ header, text }) => (
    <div className='tweetItem'>
        <h3 className='tweetHeader'>{header}</h3>
        <p className='tweetText'>{text}</p>
    </div>
);

TweetItem.propTypes = {
    header: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

const TweetsList = ({ tweets }) => (
    <section className='tweetsList'>
        {tweets.map(item => (
            <TweetItem
                key={item.id}
                header={item.header}
                text={item.text}
            />
        ))}
    </section>
);

TweetsList.propTypes = {
    tweets: PropTypes.array.isRequired,
};

export default TweetsList;
