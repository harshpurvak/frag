import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"
import Home from "./pages/home"


const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App