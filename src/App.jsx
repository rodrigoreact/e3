
import './App.css'
import rod from "./assets/img/rik.jpg";
import Randm_app from './components/Randm_app';
import Footer from './components/Footer';

function App() {
 

  return (
    <div className="App">
      <header>
      <img src={rod} alt="" width={1686} height={670}/>
      </header>
      <Randm_app />   
      
 
      <Footer />
    
    </div>
  )
}

export default App
