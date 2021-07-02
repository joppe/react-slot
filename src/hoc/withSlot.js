import PropTypes from 'prop-types';
import React from 'react';

export function withSlot(Component) {
    const Wrapper = ({ children }) => {
        const filtered = [].concat(children).reduce(
            (acc, child) => {
                if (child.props?.slot) {
                    acc.slot[child.props.slot] = child;
                } else {
                    acc.rest.push(child);
                }

                return acc;
            },
            { rest: [], slot: {} },
        );

        return <Component content={filtered.slot}>{filtered.rest}</Component>;
    };

    Wrapper.propTypes = {
        children: PropTypes.node,
    };

    return Wrapper;
}
