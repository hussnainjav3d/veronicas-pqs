import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Provider as ReduxProvider } from 'react-redux'
import { store, persistor } from './app/Redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import { Router } from './app/Router'

ReactDOM.render(
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <React.StrictMode>
          <Router />
        </React.StrictMode>
      </BrowserRouter>
    </PersistGate>
  </ReduxProvider>,
  document.getElementById(`root`),
)
reportWebVitals()
