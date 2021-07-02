import PropTypes from 'prop-types';
import React from 'react';

export function Slot({ name, content, children }) {
    if (Array.isArray(content)) {
        const found = content.find((c) => c.props.slot === name);

        if (found) {
            return found;
        }
    } else if (content && content.props.slot === name) {
        return content;
    }

    return <>{children}</>;
}

Slot.propTypes = {
    name: PropTypes.string,
    content: PropTypes.node,
    children: PropTypes.node,
};
