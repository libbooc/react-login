import { Button } from 'flowbite-react';
import { useState } from 'react';
import TextInput from './Input';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [loginMessage, setLoginMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.username === 'root' && formData.password === 'root') {
      alert('Login Successfully');

      setFormData({
        username: '',
        password: '',
      });
    } else {
      alert('Login Unsuccessful');
    }
  };

  const isSubmitDisabled = formData.username === '' || formData.password === '';

  return (
    <div data-testid = "app-container" className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-20 rounded shadow-md w-full max-w-md">
        {loginMessage && (
          <p className={loginMessage === 'Login Successfully'}>
            {loginMessage}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
          <TextInput
            label="Password"
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
          <div>
          <Button 
              type="submit"
              id="button"
              className={` w-2/3 mx-auto bg-purple-500 text-white p-2 rounded hover:bg-purple-600 focus:outline-none ${
                isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitDisabled}
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
