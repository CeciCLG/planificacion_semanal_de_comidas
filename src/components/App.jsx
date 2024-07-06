import { Route, Routes } from "react-router-dom"
import Header from "./Header/Header"
import NotFound from "./pages/NotFound"
import Detail from "./pages/Detail"
import Login from "./pages/Login"
import { useState } from "react"
import Home from "./pages/Home"
import AuthRoute from "./AuthRoute/AuthRoute"
import Menu from "./pages/Menu"


function App() {
  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUserData={setUserData} userData={userData} />} />
          <Route path="/menu" element={<AuthRoute user={userData} component={<Menu />} />} />
          <Route path="/filtered" element={<AuthRoute user={userData} component={<Menu />} />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
