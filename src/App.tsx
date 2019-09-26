import React from 'react';
import routes from './routes';
import { HashRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux';
import { GlobalStyle } from '@/style' // 全局重置样式
import { IconStyle } from '@/assets/iconfont/iconfont'
// import '@/assets/iconfont/iconfont.css'
import store from './store'

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <GlobalStyle />
        <IconStyle />
        {renderRoutes(routes)}
      </HashRouter>
    </Provider>
  );
}

export default App;
