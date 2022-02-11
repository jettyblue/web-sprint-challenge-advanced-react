import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen, fireEvent } from '@testing-library/react';

import AppClass from './AppClass';
import AppFunctional from './AppFunctional';

// Write your tests here
let submit, emailInput

beforeEach(() => {
  render(<AppClass />)
  submit = screen.queryByText('submit')
  emailInput = screen.queryAllByPlaceholderText('type email')
})
afterEach(() => {
  document.body.innerHTML = ''
})

test('sanity', () => {
  expect(true).toBe(false)
})

test('three ways to look for text', () => {
  screen.getByText('coordinates')
  screen.queryByText('coordinates')
  screen.findByText('coordinates')
})

test('getByText', () => {
  screen.getByText('coordinates')
  screen.getByText('coordinates', { exact: false })
})

test('that beyonce is NOT on the page', () => {
  const beyonce = screen.queryByText('Beyonce')
  expect(beyonce).not.toBeInTheDocument()
})