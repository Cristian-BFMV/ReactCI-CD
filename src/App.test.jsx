import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

const setup = () => {
  render(<App />);
};

describe('App component', () => {
  it('Should render the component text', () => {
    setup();

    expect(
      screen.getByText('Click on the Vite and React logos to learn more')
    ).toBeInTheDocument();
  });
});
