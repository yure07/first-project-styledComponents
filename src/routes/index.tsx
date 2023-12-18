import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Authenticated from "../pages/authenticated";

const RoutesApp = () => {
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Authenticated/>}/>
        </Routes>
    )
}

export default RoutesApp