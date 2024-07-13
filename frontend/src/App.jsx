import { Link,Route,Routes,Navigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navigation from "./components/Navigation/Navigation";
import SignUp from "./components/Login & SignUp/SignUp";
import Login from "./components/Login & SignUp/Login";
import Contact from "./components/Contact/Contact";


function App() {
  return (
    <>
      <Navigation />
      <hr />
      <div>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/SignUp" element={<SignUp/>}/>
          <Route path="/Contact" element={<Contact/>}/>
        </Routes>
      </div>
      <Footer/>
    </>
  );
}

export default App;
