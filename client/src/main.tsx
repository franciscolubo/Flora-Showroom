import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './Components/Form'
import Home from './Components/Home'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {
            location.href === 'http://localhost:3000/'
            ? <Route path='/' element={<Landing />}/>
            : <Route path='/' element={<Navbar />}/>
          }
          <Route path='/home' element={<Home />}/>
          <Route path='/form/:id' element={<Form />}/>
          </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
