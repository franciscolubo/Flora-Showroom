import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
<<<<<<< HEAD
import Form from './components/Form'
import Home from './components/Home'
import Landing from './components/Landing'
import Details from './components/Details'
=======
import Form from './Components/Form'
import Home from './Components/Home'
import Landing from './Components/Landing'
import Navbar from './Components/Navbar'
>>>>>>> c5678f72e49e24243afc876f6638e45005e34d08

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
<<<<<<< HEAD
          <Route path='/' element={<Landing />} />
          <Route path='/home' element={<Home />} />
          <Route path='/form/:id' element={<Form />} />
          <Route path='/detail/:id' element={<Details />} />
        </Routes>
=======
          {
            location.href === 'http://localhost:3000/'
            ? <Route path='/' element={<Landing />}/>
            : <Route path='/' element={<Navbar />}/>
          }
          <Route path='/home' element={<Home />}/>
          <Route path='/form/:id' element={<Form />}/>
          </Routes>
>>>>>>> c5678f72e49e24243afc876f6638e45005e34d08
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
