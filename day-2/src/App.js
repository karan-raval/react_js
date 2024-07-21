import './App.css';
import Navbar from "./components/navbar";
import Subheader from './components/subheader';
import Section from './components/section-1';
import Footer from './components/footer';
import Section2 from './components/section-2';
import Section3 from './components/section-3';
import Section4 from './components/section-4';

function App() {
  return (
    <div>
     <Navbar/>
     <Subheader/>
     <Section/>
     <Section2></Section2>
     <Section3/>
     <Section4/>
     <Footer/>
    </div>
  );
}

export default App;