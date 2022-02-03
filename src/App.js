import "./style/App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import AddFriend from "./pages/AddFriend";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App_container">
          <Navbar />
          <Routes>
            <Route exact path="/" element={Home()} />
            <Route path="/Add-a-friend" element={AddFriend()} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
