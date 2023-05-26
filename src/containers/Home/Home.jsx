// import logo from "./logo.svg";
// import "./App.css";
// import {Button, Redbutton, Bluebutton} from '../src/components/Hello/index';
// import {Counter} from '../src/components/Counter.jsx';
// import { Button } from "../src/components/Card/Card.jsx";
// import { Button } from "../src/components/Button";
import React from "react";
import { Card } from "components/Card";
import styled from "styled-components";
import {PrimaryLayout } from "components/Layout";

const AppWrapper = styled.div`
  color: #747475;
  border-radius: 20px;
  .button-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 14px 16px;
    font-weight: 700;
    font-size: 13px;
    color: blue;
  }
  .App-header {
    width: 350px;
    height: 400px;
    flex-direction: column;
  }
`
const Home= () => {
  // function Home() {
  return (
  <PrimaryLayout>
    
    <AppWrapper>
        {/* <header className="App-header">
          <Card title="Revenue" amount="5.00" percent={12.3}></Card>
          <Card title="Spending" amount="2.00" percent={8.1}></Card>
          <Card title="ROI" content="+14.02" percent={5.1}></Card>
          <Card title="Estimated" amount="7.00" percent={3.2}></Card>
        </header> */}
    </AppWrapper>
    </PrimaryLayout>
   
  );
}

export default Home;
