import Header from "./components/Header"
import './App.css';
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="results" > <h2>Total Results 350</h2> </div>
      {/* <div className="container"> */}
      <Home/>
      <Footer/>
      {/* </div> */}
    </div>
  );
}

export default App;
