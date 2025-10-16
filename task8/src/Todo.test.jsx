import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { test, expect } from 'vitest'
import Todo from './Todo';

test('renders heading and input', () => {
  render(<Todo />);
  expect(screen.getByTestId('title')).toBeInTheDocument();
  expect(screen.getByTestId('todo-input')).toBeInTheDocument();
  console.log('Todo renders test passed');
});

test('adds a task to the list', async () => {
  render(<Todo />);
  const input = screen.getByTestId('todo-input');
  const button = screen.getByTestId('add-button');

  await userEvent.type(input, 'Buy milk');
  await userEvent.click(button);

  expect(screen.getByText('Buy milk')).toBeInTheDocument();
  console.log('Todo add test passed');
});

test('does not add empty task', async () => {
  render(<Todo />);
  const button = screen.getByTestId('add-button');
  await userEvent.click(button);

  expect(screen.queryByTestId('task')).not.toBeInTheDocument();
  console.log('Todo empty add test passed');
});
