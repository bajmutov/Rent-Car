import React from 'react';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store';
import './index.css';
import App from 'components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <PersistGate loading={null} persistor={persistor}> */}
    <Provider store={store}>
      <BrowserRouter basename="/Rent-Car">
        <App />
      </BrowserRouter>
      </Provider>
      {/* </PersistGate> */}
  </React.StrictMode>
);

