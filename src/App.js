
import "./App.css";
import React, { useState } from 'react';
import About from "./component/About";
// import axios from "axios";
// import Resturent from "./component/Basic/Resturent";
// import Pson from "./component/Basic/Person";
// import Mudasar from "./component/Basic/Mudasar";
// import Abc from "./component/Basic/Abc"
// import State from "./component/Basic/State"
// import Eventhandler from "./component/Basic/Eventhandler";
// import Addstyle from "./component/Addstyle/Addstyle.js";
import Navbar from "./component/Navbar"
import Textform  from "./component/Textform";

const App = () => {
  const [mode, setMode] = useState('light') // weather dark is enable or not
  
  const toggleMode = () =>  {
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
    }else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
    }

  }
  return (
    <div>
<Navbar title="BlueDOt"  mode = {mode} Abouttext="AboutUS" toggleMode = {toggleMode}/>
<div className="container my-3">
<Textform heading="Enter Text For Uppercase" mode = {mode} ></Textform>

{/* <About /> */}

</div>


    </div>
  );
};

export default App;

