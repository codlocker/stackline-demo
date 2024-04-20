import React, { useEffect } from 'react';
import './App.css';
import { NavbarComponent, ProductInfoComponent, RetailSalesComponent, WeeklySalesComponent } from "./components";
import { Container } from "react-bootstrap";
import { fetchdata } from "./store/product-data-actions";
import { useAppDispatch, useAppSelector } from "./types/hooks";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchdata())
  }, [dispatch]);

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
