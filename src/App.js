
import 'bootstrap/dist/css/bootstrap.min.css'
import'bootstrap/dist/js/bootstrap.bundle.min.js'
import Routing from './Routing';
import { createContext } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import Header from './Main/Header';
import Footer from './Main/Footer';
import Home from './Main/Home';
import Treatments from './Main/Treatments';
import BookAppointmnet from './Main/BookAppointmnet';
import ContactUs from './Main/ContactUs';
export const RoutProtect=createContext()

function App() {
  const [token,settoken]=useState('')  
  return (


    <div className="App">
      <RoutProtect.Provider value={[token,settoken]}>
      
      
      <Routing />
      
      </RoutProtect.Provider>
    </div>
  );
}

export default App;
