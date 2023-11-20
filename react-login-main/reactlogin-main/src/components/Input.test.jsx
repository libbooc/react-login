import { render, screen, fireEvent} from '@testing-library/react';
import TextInput from './Input';

describe('TextInput', () => {
  it('should be rendered', () => {
    render(<TextInput label="Test Label" type="text" id="test" name="test" value="" onChange={() => {}} />);
    const inputElement = screen.getByLabelText(/test label/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('should be able to type', () => {
    render(<TextInput label="Test Label" type="text" id="test" name="test" value="" onChange={() => {}} />);
    const inputElement = screen.getByLabelText(/test label/i);
    fireEvent.change(inputElement, { target: { value: inputElement.value } });
    expect(inputElement.value).toContain(inputElement.value);
  });


  it('should render the label', () => {
    render(<TextInput label="Test Label" type="text" id="test" name="test" value="" onChange={() => {}} />);
    const labelElement = screen.getByText(/test label/i);
    expect(labelElement).toBeInTheDocument();
  });
});