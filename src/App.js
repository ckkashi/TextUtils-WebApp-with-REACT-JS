import "./App.css";
import Navbar from "./components/Navbar";
import Textbox from "./components/Textbox";
import React,{useState} from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode,setNewMode] = useState('light');
  
  const [alertt,setNewAlert] =  useState(null);

  let showAlert = (alertType,alertMsg)=>{
    setNewAlert({
      type:alertType,
      msg:alertMsg
    })
    setTimeout(() => {
      setNewAlert(null);
    }, 2000);
  }

  let toggle = ()=>{
    if(mode==='light'){
      setNewMode('dark');
      
      document.body.style.backgroundColor = 'grey' ;
      showAlert('success','You successfully enabled dark mode.');
    }else{
      setNewMode('light');
      
      document.body.style.backgroundColor = 'white' ;
      showAlert('success','You successfully enabled light mode.');
    }
  };

  let lightMode = ()=>{
    setNewMode('light');
      
    document.body.style.backgroundColor = 'white' ;
    showAlert('success','You successfully enabled light mode.');
  }

  let darkMode = ()=>{
    setNewMode('dark');
      
      document.body.style.backgroundColor = 'grey' ;
      showAlert('success','You successfully enabled dark mode.');
  }

  let primaryMode = ()=>{
    setNewMode('primary');
      
    document.body.style.backgroundColor = '#013787' ;
    showAlert('success','You successfully enabled primary mode.');
  }


  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggle} light={lightMode} dark={darkMode} primary={primaryMode}/>
      <Alert alert={alertt}/>
      <div className="container my-3">
        <Routes>
          <Route exact path="/" element={<Textbox title="Enter text for analyze" mode={mode}/>} />
            
          
          <Route path="/about" element={<About mode={mode}/>} />
         
        </Routes>
      </div>
      </Router>

    </>
  );
}

export default App;
