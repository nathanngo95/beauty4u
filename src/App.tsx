import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './dashboard/Dashboard';
import SignIn from './sign-in/SignIn';
import useToken from './sign-in/useToken';

function App() {
  const { token, setToken } = useToken();
  console.log(token);
  if(!token) {
    return <SignIn setToken={setToken} />
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
