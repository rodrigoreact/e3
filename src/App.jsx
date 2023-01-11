import './App.css'
// import rod from "./assets/img/rik.jpg";
import Randm_app from './components/Randm_app';
import Footer from './components/Footer';
import imagenes from './assets/imagenes';

function App() {
 

  return (
    <div className="App" style={{textAlign: 'center'}}>
      <div className="hijo" style={{textAlign: 'center'}}>
        <header className="imagenHeader">           
          <img src={imagenes[0].name} className="imagenLogo" alt="" />
        </header>
   
      <Randm_app />        
 
      <Footer />
      </div>
    </div>
  )
}

export default App



