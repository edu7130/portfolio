import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorkerRegistration';
import { AppRouter } from './routers/AppRouter';



ReactDOM.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.register({
  onUpdate: async (registration) =>{
    if(registration && registration.waiting){
      await registration.unregister();
      registration.waiting.postMessage({ type: 'SKIP_WAITING'});
      window.location.reload();
    }
  }
});
