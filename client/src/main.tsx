import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import store from './redux/store'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Landing from './components/Landing'
import ClotheDetails from './components/ClotheDetails'
import ClotheCRUD from './components/ClotheCRUD'

ReactDOM.createRoot(document.getElementById('root')!).render(

  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/form' element={<ClotheCRUD />} />
        <Route path='/form/:id' element={<ClotheCRUD />} />
        <Route path='/detail/:id' element={<ClotheDetails />} />
      </Routes>
    </BrowserRouter>
  </Provider>

)
