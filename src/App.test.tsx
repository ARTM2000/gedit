import { render, screen } from '@testing-library/react';
import App from './App';

test('renders code editor app', () => {
  render(<App />);
  const themeButton = screen.getByText(/light/i);
  expect(themeButton).toBeInTheDocument();
});
