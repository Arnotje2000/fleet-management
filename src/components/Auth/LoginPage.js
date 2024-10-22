import React, { useContext, useState } from 'react'; // Import useContext and useState
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext

const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext); // Get login function from context
  const [errorMessage, setErrorMessage] = useState(''); // State for error message

  const handleRegister = (e) => {
    e.preventDefault();
    console.log('Navigating to register');
    navigate('/register');
  };

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent default form submission
    const username = document.getElementById('username').value; // Get username from input
    const password = document.getElementById('password').value; // Get password from input
  
    // Call the login function from context
    if (login(username, password)) {
      console.log('Log in to dashboard');
      setErrorMessage(''); // Clear any previous error message
      navigate('/dashboard'); // Navigate to dashboard if login is successful
    } else {
      setErrorMessage('Invalid credentials. Please try again.'); // Set error message
      console.log('Invalid credentials'); // Log invalid credentials
    }
  };

  return (
    <div
      className="h-screen w-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/raivis-razgals-ostLWBW4hsw-unsplash.jpg')" }}
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-md shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
        {errorMessage && ( // Conditionally render the error message
          <div className="mb-4 text-red-500 text-sm text-center">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleLogin}> {/* Handle login on form submission */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              id="username"
              type="text"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit" // This will now call handleLogin
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">
              Forgot Password?
            </a>
            <button
              type="button"
              className="text-sm text-blue-500 hover:text-blue-700"
              onClick={handleRegister} // Call handleRegister on click
            >
              Not Yet Registered?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;