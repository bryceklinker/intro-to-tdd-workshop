import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { PresentationApp } from "./PresentationApp"

describe('PresentationApp', () => {
    test('when root is shown then welcome slide is shown', () => {
        const { getByTestId } = renderWithRouter();

        expect(getByTestId('welcome')).toBeVisible();
    })

    test('when welcome is shown then welcome slide is shown', () => {
        const {getByTestId} = renderWithRouter('/welcome');

        expect(getByTestId('welcome')).toBeVisible();
    })

    test('when why tdd is shown then why tdd slide is shown', () => {
        const {getByTestId} = renderWithRouter('/why-tdd');

        expect(getByTestId('why-tdd')).toBeVisible();
    })

    test('when tdd rules are shown then tdd rules slide is shown', () => {
        const { getByTestId} = renderWithRouter('/tdd-rules');

        expect(getByTestId('tdd-rules')).toBeVisible();
    })

    function renderWithRouter(currentRoute = '/') {
        return render(
            <MemoryRouter initialEntries={[currentRoute]}>
                <PresentationApp />
            </MemoryRouter>
        )
    }
})