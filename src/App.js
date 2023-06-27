
import './App.css';

function App() {
  // aca va todo lo de JS
  let saludo = "bienvenidos a mi web"
  function hacerClick(){
console.log("usted hizo click")
  }
  return (
   <div>
    {saludo}
    <button onClick={hacerClick}> hace click </button>
   </div>
 
  );
}

export default App;
