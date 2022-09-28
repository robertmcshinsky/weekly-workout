import './App.css';
import Home from "./pages/001_Home";
import About from "./pages/002_About";
import Navbar from "./components/001_Navbar";
import Footer from "./components/100_Footer";

function App() {
  return (
      <section>
          <Navbar></Navbar>
          <Home></Home>
          <About></About>
          <Footer></Footer>
      </section>
  );
}

export default App;
