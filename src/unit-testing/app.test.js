import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../app'

// MOCK TRAIN CALL
jest.mock('../funcs/fetch')

describe('<App />', () => {
    test('renders all trains it gets from backend', async () => {

        // PLACEHOLDER
        let component

        // RENDER & RERENDER TO ENSURE THAT ALL EFFECTS WERE EXECUTED
        component = render(<App />)
        component.rerender(<App />)

        await waitForElement(
            () => component.container.querySelector('.split')
        )

        // TARGET SELECTOR
        const trains = component.container.querySelectorAll('.split')

        // EXPECTATIONS
        expect(trains.length).toBe(2)
        expect(component.container).toHaveTextContent('8467')
        expect(component.container).toHaveTextContent('8469')
    })
})