import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const mainPage = screen.getByTestId("main-content")
  expect(mainPage).toBeInTheDocument();
});
