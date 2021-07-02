import PropTypes from 'prop-types';
import React from 'react';

export function Template({ children }) {
    return <>{children}</>;
}

Template.propTypes = {
    slot: PropTypes.string,
    children: PropTypes.node,
};
