import React, {useState, useEffect} from 'react';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage.js';
import ErrorModal from './components/ErrorModal.js';

function App() {

  // pseudo enums : PENDING, SUCCESS, FAILURE
  const [loginStatus, setLoginStatus] = useState('PENDING');
  

  return (
    <div className="app-container">

      {
        loginStatus==="PENDING" && (
          <LoginPage setLoginStatus={setLoginStatus}></LoginPage>
        )
      }
        
      {
        loginStatus==="SUCCESS" && (
          <ProfilePage setLoginStatus={setLoginStatus}></ProfilePage>
        )
      }

    </div>
  )
}

export default App;
