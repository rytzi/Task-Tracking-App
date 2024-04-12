import { useState } from 'react';
import { LoginScreen } from './screen/LoginScreen.jsx';
import { Body } from './screen/Body.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState('');

  return (
    <>
      {isAuthenticated ? (
        <Body setIsAuthenticated={setIsAuthenticated} user={user}/>
      ) : (
        <LoginScreen setIsAuthenticated={setIsAuthenticated} setUser={setUser} />
      )}
    </>
  );
}

export default App;
