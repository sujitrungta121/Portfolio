import React from "react";
import {Route,Routes} from "react-router-dom";


import Homepage from "./component/Homepage";
import Project from "./component/project";
import Contact from "./component/Contact";
import About from "./component/About";

function App() {
  return (
<>
 <Routes>
  <Route path="/" element={<Homepage/>}/>
  <Route path="/Project" element={<Project/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/Contact" element={<Contact/>}/>
</Routes> 
   {/* <Homepage/>
   <About/>
   <Contact/>
   <Project/>  */}
</>
  );
}

export default App;
