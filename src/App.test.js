import React from 'react'
import { render, waitForElement } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
jest.mock('./services/trains')
import App from './app'


describe('<App />', () => {
  test('renders all trains it gets from backend', async () => {
    let component

    component = render(
      <App />
    )

    component.debug()
    component.rerender(<App />)

    await waitForElement(
      () => component.container.querySelector('.split')
    )

    const trains = component.container.querySelectorAll('.split')
    expect(trains.length).toBe(2)

    expect(component.container).toHaveTextContent(
      '8467'
    )
    expect(component.container).toHaveTextContent(
      '8469'
    )
  })
})