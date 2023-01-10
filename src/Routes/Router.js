import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErroPage from "../pages/ErroPage";
import HomePage from "../pages/HomePage"
import ProfilePage from "../pages/ProfilePage"

export default function Router(){
    return(
        <BrowserRouter>
            <Routes>
                
                <Route index element={<HomePage/>} />
                <Route path="/profile/:name" element={<ProfilePage/>} />
                <Route path= "*" element={<ErroPage/>} />

            </Routes>
        </BrowserRouter>
    )
}