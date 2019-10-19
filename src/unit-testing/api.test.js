import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import App from '../app'
import { success, no_content, error } from './samples'

describe('Test different API request samples', async () => {

    // EVERYTHING OK (200)
    test('Query OK', async () => {

        // RENDER THE COMPONENT
        const component = render(<App sample={ success } />)

        // WAIT FOR SELECTORS TO RESOLVE
        await waitForElement(() => component.container.querySelector('.split'))

        // TARGET SELECTOR
        const frame = component.container.querySelectorAll('.split')

        // EXPECTATIONS
        expect(frame.length).toBe(2)
        expect(component.container).toHaveTextContent('8467')
        expect(component.container).toHaveTextContent('8469')
    })

    // QUERY OK, BUT NO RESULTING DATA (204)
    test('Query OK, but no results found', async () => {

        // RENDER THE COMPONENT
        const component = render(<App sample={ no_content } />)

        // WAIT FOR SELECTORS TO RESOLVE
        await waitForElement(() => component.container.querySelector('#error'))

        // EXPECTATIONS
        expect(component.container).toHaveTextContent('No results found!')
    })

    // API UNAVAILABLE (404)
    test('API Unavailable', async () => {

        // RENDER THE COMPONENT
        const component = render(<App sample={ error } />)

        // WAIT FOR SELECTORS TO RESOLVE
        await waitForElement(() => component.container.querySelector('#error'))

        // EXPECTATIONS
        expect(component.container).toHaveTextContent('The API is not responding!')
    })
})