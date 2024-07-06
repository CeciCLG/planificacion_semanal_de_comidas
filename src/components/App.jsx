import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import Menu from "./pages/Menu"
import Filtered from "./pages/Filtered"
import NotFound from "./pages/NotFound"
import Detail from "./pages/Detail"


function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/filtered" element={<Filtered />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </main>
    </>
  )
}

export default App
