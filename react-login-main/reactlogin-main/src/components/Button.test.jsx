import { fireEvent, render, screen } from '@testing-library/react';
import Button from "./Button";


describe('Button', () => {
  it('should render the Button', () => {
    render(<Button />);
    screen.debug()
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it('should be disabled', () => {
    render(<Button disabled = {true}/>);
    screen.debug()
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it('should be clicked', () => {
    render(<Button />);
    const button = screen.getByRole("button");
    fireEvent.click(button); 
    expect(button).not.toBeDisabled();
  });

  it('should render the text', () => {
    const buttonText = 'Click me';
    render(<Button>{buttonText}</Button>);
    const button = screen.getByText(buttonText);
    expect(button).toBeInTheDocument();
  });

});