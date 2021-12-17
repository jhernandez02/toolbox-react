import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import storeApp from "./redux/store";
import HeaderComponent from "./components/layout/HeaderComponent";
import HomePage from "./pages/HomePage";

function App () {
  return (
    <BrowserRouter>
      <Provider store={storeApp}>
        <HeaderComponent />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;