import AppRouter from './router'
import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'

function App() {

  return (
    <div className="App">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  )
}

export default App
