import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import AuthRoute from "./AuthRoute/AuthRoute"
import Header from "./Header/Header"
import NotFound from "./pages/NotFound"
import Detail from "./pages/Detail"
import Home from "./pages/Home"
import Menu from "./pages/Menu"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Filtered from "./pages/Filtered"
import MyProfile from "./pages/MyProfile"


function App() {
  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal);


  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register setUserData={setUserData} />} />
          <Route path="/login" element={<Login setUserData={setUserData} />} />
          <Route path="/MyProfile" element={<AuthRoute user={userData} component={<MyProfile userData={userData} setUserData={setUserData} />} />} />
          <Route path="/menu" element={<AuthRoute user={userData} component={<Menu userData={userData} />} />} />
          <Route path="/filtered" element={<AuthRoute user={userData} component={<Filtered />} />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  )
}

export default App
