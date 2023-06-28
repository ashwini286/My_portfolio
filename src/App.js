// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import './App.css';
// import NavBar from './Componante/NavBar/NavBar';
import HomePage from './Componante/HomePage/HomePage';
import About from './Componante/About/About';
import Skill from './Componante/Skill/Skill'; 
import Experience from './Componante/Project/Skill2';
import Contect from './Componante/Contact/Contect';

// import Home from './Componante/Home/Home';

const override: CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#C1F5FF",
  marginTop: "400px",
  
};

function App() {    
  const [loading, setLoading] = useState(false)
  // let [color, setColor] = useState("#C1F5FF"); 
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      console.log('done')
      setLoading(false);
    },2000)
  },[])


  return (
   
    <div className='App'>
      <header>
      {
        loading ? 
        
          <ClimbingBoxLoader
          className='app2'
        color={"#36d7b7"}
        loading={loading}
        cssOverride={override}
        size={30}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
       :
      <>
      <HomePage />
      <About />
      <Skill />
      <Experience />
      <Contect />
      
      
       </>
      
       
      }
    
      
      </header>
    </div>
    
  );
}

export default App;
