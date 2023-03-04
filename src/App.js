import React from 'react';
import  'bootstrap/dist/css/bootstrap.css';
import EmpLogin from './Components/EmpLogin';
 import Menu from "./Components/Menu"
 import Corosel from "./Components/Corosel";


function App() {
  return (
    <div className="App">
    <>
       <Corosel />
      {/* <EmpLogin /> */}
      <Menu />
    </>
    </div>
  );
}


export default App;
