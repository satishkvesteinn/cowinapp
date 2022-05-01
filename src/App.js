import './App.css';
import Cra from './Cra';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/navbar';
import RegisterForVaccine from './components/RegisterForVaccine';

import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <>
      < Navbar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/registerforvaccine" element={<RegisterForVaccine/>}>
          </Route>
        </Routes>
      <Footer />
      {/* <Cra/> */}
    </>
  );
}

export default App;
