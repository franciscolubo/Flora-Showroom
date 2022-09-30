import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Home from './components/Home'
import Landing from './components/Landing'
import Details from './components/Details'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/form/:id' element={<Form />} />
          <Route path='/detail/:id' element={<Details />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
