import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('displays hello message when button is clicked', () => {
  render(<App />);
  const button = screen.getByRole('button', { name: 'view-message' });
  fireEvent.click(button);

  const message = screen.getByText('Hello!!!');

  expect(message).toBeInTheDocument();
  expect(message).toMatchSnapshot();
});
