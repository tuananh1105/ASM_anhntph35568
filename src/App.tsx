import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./components/Home"
import Detail from "./components/Detail"
import Checkout from './components/Checkout';
import LayoutWedsite from './components/layouts/LayoutWedsite';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LayoutWedsite />} >
            <Route index element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}
export default App
