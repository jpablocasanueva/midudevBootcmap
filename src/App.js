
import './App.css';
import Mensaje from './Mensaje';

function App() {
   
  const Descripcion = () => {

    return <p>Esta es la app del curso bootcamp react</p>
  }
  
  return (
    <div className="App">
      <Mensaje color='red'msg='Estamos trabjando en un curso de react'/>
      <Mensaje  color ='orange' msg='Hoy es el dia del Gato' />
      <Mensaje color='blue' msg='Botar la cazuela'/>
      <Descripcion />
    </div>
  );
}

export default App;
