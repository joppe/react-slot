/* eslint-env jest */

import { render, screen } from '@testing-library/react';
import PropTypes from 'prop-types';
import React from 'react';

import { Slot } from '../../src/component/Slot';
import { Template } from '../../src/component/Template';
import { withSlot } from '../../src/hoc/withSlot';

const Card = withSlot(({ children, content }) => {
    return (
        <div>
            <header>
                <Slot name="top" content={content}>
                    Top fallback
                </Slot>
            </header>
            <main>{children}</main>
            <hr />
            <footer>
                <Slot name="bottom" content={content}>
                    bottom
                </Slot>
            </footer>
        </div>
    );
});

Card.propTypes = {
    children: PropTypes.node,
    content: PropTypes.node,
};

describe('projection', () => {
    it('with all provided slots', () => {
        render(
            <Card>
                <Template slot="bottom">
                    This should be placed in the bottom?
                </Template>
                <Template slot="top">This should be placed in the top</Template>
                <h2>The rest?</h2>
                <p>Is here</p>
            </Card>,
        );

        expect(
            screen.getByText('This should be placed in the bottom?'),
        ).toBeDefined();
        expect(
            screen.getByText('This should be placed in the top'),
        ).toBeDefined();
        expect(screen.getByText('The rest?')).toBeDefined();
        expect(screen.getByText('Is here')).toBeDefined();
    });

    it('fallback to default', () => {
        render(
            <Card>
                <Template slot="bottom">
                    This should be placed in the bottom?
                </Template>
                <Template slot="stop">
                    This should be placed in the top
                </Template>
                <h2>The rest?</h2>
                <p>Is here</p>
            </Card>,
        );

        console.log(screen.findAllByText('This should be placed in the top'));

        expect(
            screen.getByText('This should be placed in the bottom?'),
        ).toBeDefined();
        expect(screen.getByText('Top fallback')).toBeDefined();
        expect(screen.getByText('Is here')).toBeDefined();
    });
});
