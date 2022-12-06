import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//include images into your bundle


import Header from "./component/header.jsx";
import Home from "./component/home.jsx";
import Login from "./component/login.jsx";
import Checkout from "./component/checkout.jsx";



//create your first component
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Header />
					<Routes>
						<Route element={<Login />} path="/login" />
						<Route element={<Checkout />} path="/checkout" />
						<Route element={<Home />} path="/" />		
					</Routes>	
			</BrowserRouter>
		</div>
	);
};

export default App;