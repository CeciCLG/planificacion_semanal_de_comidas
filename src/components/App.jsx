import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import Menu from "./pages/Menu"
import Filtered from "./pages/Filtered"
import NotFound from "./pages/NotFound"
import Detail from "./pages/Detail"
import Login from "./pages/Login"


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filtered" element={<Filtered />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
