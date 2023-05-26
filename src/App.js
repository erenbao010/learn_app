import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {Button, Redbutton, Bluebutton} from '../src/components/Hello/index';
// import {Counter} from '../src/components/Counter.jsx';
// import { Button } from "../src/components/Card/Card.jsx";
import { Button } from "../src/components/Button";
import { Card } from "../src/components/Card";
import styled from "styled-components";
import ReactDOM from "react-dom/client";
import { SideBar } from "./components/SideBar/SideBar";
import Home from "./containers/Home";
import  About  from "./containers/About";
import Login from "./containers/Login";


// function App() {
//   return (
//     <AppWrapper>
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           <div>
//             <Button boderColor="red" percent={-109}>
//               109%
//             </Button>
//             {/* <Counter></Counter> */}
//             {/* <Counter2></Counter2> */}
//             {/* <Button color="red" icon="home" item="second"></Button> */}
//             {/* <Redbutton/>
//             <Bluebutton/> */}
//             <Card title={"Revenue"} amount="5.00" content={"eth"} percent={12.3}></Card>
//           </div>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
// </AppWrapper>
//   );
// }
function App  ()  {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
   
  
    
    // {/* <div>
   

    // </div> */}
  );
};
export default App;
