import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import PersistentDrawerLeft from './components/PersistentDrawerLeft';
import { isAuth } from './auth';

import Theme from './Theme';

import Routes from './routes'

const App = () => {

  return (
    <Theme>
      <div className="App">
        <BrowserRouter>
          {isAuth() && <PersistentDrawerLeft />}

          <Routes />
        </BrowserRouter>
      </div>
    </Theme>
  );
}
export default App;