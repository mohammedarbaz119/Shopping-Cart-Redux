import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Products } from './components/Products'
import { Footer } from './components/Footer'
import { Cart } from './components/cart'
import './App.css'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route
            path="/"
            element={<Products />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
    </Provider>
  )
}
import store from './store/store'

export default App
