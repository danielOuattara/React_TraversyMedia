import React from 'react';  // Not required no more

import PropTypes from 'prop-types';

const Header = (/* props,  */{superTitle}) => {
    return (
        <div>
            <h1>Task Tracker</h1>
            {/* <p>{props.title}</p> */}
            <p>{superTitle}</p>
        </div>
    )
}

Header.defaultProps =  {
    superTitle: 'Task Title',
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header;


// STOPPED AT : 30'18"