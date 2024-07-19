import { Route, Routes } from "react-router-dom"
import { useState } from "react"
import AuthRoute from "./AuthRoute/AuthRoute"
import Header from "./Header/Header"
import NotFound from "./pages/NotFound"
import Detail from "./pages/Detail"
import Menu from "./pages/Menu"
import Register from "./pages/Register"
import Login from "./pages/Login"
import MyProfile from "./pages/MyProfile"
import { foodContext, useFoodContext } from "./ContextFood/ContextFood";
import Filtered from "./pages/Filtered"


function App() {
  const dataLocal = JSON.parse(localStorage.getItem("user"));
  const [userData, setUserData] = useState(dataLocal);
  console.log(userData);
  const contextFood = useFoodContext();

  return (
    <>
      <Header />
      <main>
        <foodContext.Provider value={contextFood}>
          <Routes>
            <Route path="/register" element={<Register setUserData={setUserData} />} />
            <Route path="/login" element={<Login setUserData={setUserData} />} />
            <Route path="/" element={<AuthRoute user={userData} component={<MyProfile userData={userData} setUserData={setUserData} />} />} />
            <Route path="/menu" element={<AuthRoute user={userData} component={<Menu userData={userData} />} />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/filter" element={<AuthRoute user={userData} component={<Filtered />} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </foodContext.Provider>
      </main>
    </>
  )
}

export default App
