import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorkerRegistration';
import App from './App';



ReactDOM.render(
  <React.StrictMode>
    <App />
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
