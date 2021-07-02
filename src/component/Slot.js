import PropTypes from 'prop-types';
import React from 'react';

export function Slot({ name, content, children }) {
    return content?.[name] ?? <>{children}</>;
}

Slot.propTypes = {
    name: PropTypes.string,
    content: PropTypes.object,
    children: PropTypes.node,
};
