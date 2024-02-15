import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./views/Home/Home";
import About from "./views/About/About";
import Cart from "./views/Cart/Cart";
import { Provider } from "react-redux";
import store from "./store/store";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
            <Provider store={store}>
                <BrowserRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route path="/cart" element={<Cart />}></Route>
                        <Route path="/about" element={<About />}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
  );
}

export default App;
