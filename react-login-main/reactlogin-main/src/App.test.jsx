import { fireEvent, render, screen } from '@testing-library/react';
import App from "../src/App";


describe('App', () => {
  it('should render the App', () => {
    render(<App />);
    screen.debug()
    const appContainer = screen.getByTestId(/app-container/i);
    expect(appContainer).toBeInTheDocument();

  });

  it('should enable the button if both textboxes are typed', () => {
    render(<App />);
    screen.debug()
    fireEvent.change(screen.getByLabelText(/username/i), { target: { value: 'root' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'root' } });

    const loginButton = screen.getByRole('button', { name: /login/i });
    expect(loginButton).not.toBeDisabled();
  });
});