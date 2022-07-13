import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App'
import Form from './Components/Form'
import Home from './Components/Home'
import Landing from './Components/Landing'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/form/:id' element={<Form />}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
