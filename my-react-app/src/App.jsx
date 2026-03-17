import { BrowserRouter, Link, Route, Routes } from "react-router-dom";

import LoginForm from "./components/loginForm";
function App(){
  return(
    <BrowserRouter>
    <nav>
      <Link to="/login">Login to Account</Link>
    </nav>
    <Routes>
      <Route path="/login" element={<LoginForm/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;