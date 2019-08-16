import React from 'react';
import { HashRouter } from 'react-router-dom';
import routes from './routes';
import { renderRoutes } from 'react-router-config'

const App: React.FC = () => {
  return (
    <HashRouter>
      {renderRoutes(routes)}
    </HashRouter>
  );
}

export default App;
