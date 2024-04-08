import { useState } from 'react';
import { LoginScreen } from './screen/LoginScreen.jsx';
import { Body } from './screen/Body.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <>
      {isAuthenticated ? (
        <Body setIsAuthenticated={setIsAuthenticated} />
      ) : (
        <LoginScreen setIsAuthenticated={setIsAuthenticated} />
      )}
    </>
  );
}

export default App;
