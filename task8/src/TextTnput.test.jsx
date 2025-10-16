import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi, test, expect } from 'vitest'
import TextInput from './TextInput';

test('renders input with label and placeholder', () => {
  render(
    <TextInput
      label="Name"
      name="name"
      value=""
      onChange={() => {}}
      placeholder="Enter name"
    />
  );

  expect(screen.getByLabelText('Name')).toBeInTheDocument();
  expect(screen.getByPlaceholderText('Enter name')).toBeInTheDocument();
  expect(screen.getByTestId('name-input')).toBeInTheDocument();
  console.log('TextInput render test passed');
});

test('calls onChange when typing', async () => {
  const handleChange = vi.fn();

  render(
    <TextInput
      label="Email"
      name="email"
      value=""
      onChange={handleChange}
      placeholder="Enter email"
    />
  );

  const input = screen.getByLabelText('Email');
  await userEvent.type(input, 'test@example.com');

  expect(handleChange).toHaveBeenCalledTimes('test@example.com'.length);
  console.log('TextInput onChange test passed');
});
