import { useState } from 'react';
import './App.css';
import Login from './component/Signin';
import Signup from './component/Signup';

function App() {

  let [showSignUp, setShowSignUp] = useState(false);

  const toggleSignup = (e) => {
    e.preventDefault();
    console.log('Toggling');
    setShowSignUp(!showSignUp);
  }

  return (
      <>
        <h4>Home</h4>
      </>
  );
}

export default App;
