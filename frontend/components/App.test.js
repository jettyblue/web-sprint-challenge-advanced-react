import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent, userEvent } from '@testing-library/react';

import AppClass from './AppClass';
import AppFunctional from './AppFunctional';

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
  expect(true).toBe(false)
})



test('that beyonce is NOT on the page', () => {
  const beyonce = screen.queryByText('Beyonce')
  expect(beyonce).not.toBeInTheDocument()
})