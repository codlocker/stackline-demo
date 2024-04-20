import React from 'react';
import './App.css';
import { NavbarComponent, ProductInfoComponent, RetailSalesComponent, WeeklySalesComponent } from "./components";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Container>
        <div className='left-section'>
          <ProductInfoComponent />
        </div>
        <div className='right-section'>
          <RetailSalesComponent />
          <WeeklySalesComponent />
        </div>
      </Container>
    </div>
  );
}

export default App;
