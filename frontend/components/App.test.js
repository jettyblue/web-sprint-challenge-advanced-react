import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import AppClass from './AppClass';

// Write your tests here

beforeEach(() => {
  render(<AppClass />)
  upButton = screen.getByText('UP')
  downButton = screen.getByText('DOWN')
  leftButton = screen.getByText('LEFT')
  resetButton = screen.getByText('reset')
})

afterEach(() => {
  document.body.innerHTML = ''
})

test('sanity', () => {
  expect(true).toBe(true)
})

test('clicking UP increases the step counter', () => {
  fireEvent.click(upButton)
})

test('clicking DOWN increases the step counter', () => {
  fireEvent.click(downButton)
})

test('clicking LEFT increases the step counter', () => {
  fireEvent.click(leftButton)
})

test('clicking reset resets the step counter', () => {
  fireEvent.click(leftButton)
  fireEvent.click(resetButton)
})

test('that beyonce is NOT on the page', () => {
  const beyonce = screen.queryByText('Beyonce')
  expect(beyonce).not.toBeInTheDocument()
})
