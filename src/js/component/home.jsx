import React from "react";
import Product from "./product.jsx";

import "../../styles/home.css";


//include images into your bundle


//create your first component
const Home = () => {
	return (
	
			<div className="home">
				<div className="home_container">
					<img src="https://www.x-cart.com/wp-content/uploads/2019/01/ecommerce-768x278.jpg" className="home_image" alt="home_image"/>
					<div className="home_row">
						<Product 	
									id = "123987"
									title="lorem ipsum" 
									price={19.99}
									rating={5}
									image="https://en.herschel.es/content/dam/herschel/products/10007/10007-00055-OS_01.jpg"/>
						<Product 
									id = "123986"
									title="lorem ipsum" 
									price={6.99}
									rating={3}
									image="https://wordans-a1a5.kxcdn.com/files/model_specifications/2020/1/27/1050558/1050558_big.jpg?1592410467"/>
					</div>
					<div className="home_row">
						<Product 
									id = "123985"
									title="Samsung Galaxy" 
									price={374.90}
									rating={3}
									image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR4JovA-6vZ9sb7BUhVO1XM01rOiUmvhW55l61zCWaVeumzERp22nZ8Zibv01uw35xRmKWcOiucMMg0Q2--teHEVXxJbfa2ceRT42z6e7ZxEELKWPt5n4_hI2w&usqp=CAE"/>
						<Product 
									id = "123984"
									title="Low-down sofa" 
									price={249.99}
									rating={2}
									image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT6qjirypfYUaDGHM3kQPCRoW4x6LAJSneLqR9z6H-9REp4pAUVpqygXR22WNz2EXsyeEzuqfC32kq_4s9WUoiRXoP4Tu4uopuIYQ7IcBWHGvVZWk9qzsXn&usqp=CAE"/>
						<Product 
									id = "123983"
									title="X-Box Series X" 
									price={399.99}
									rating={4}
									image="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTvxvyJIFz5hNR5M-pgdb-9-lIuB1XfzY37iTFE5OjuGwMmACsBlspzVtf12WVwaoMNCbuNdGsuS2r1iL49llM-9ftlg5vnC98e-W-1ACkjkV5ZJmtKV8DhUUU&usqp=CAE"/>
					</div>
					<div className="home_row">
						<Product 
									id = "123983"
									title="Electro-acoustic guitar" 
									price={135.99}
									rating={4}
									image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQkyDwZj145LokiQwz3qye6OnStymWJv2Q8DUE1S_7scWUnLqw19E-PD-25u84wHiarRL6tW3ZblBazp_GAwMCIY-tioxCrU16HRaA0Mgih8SLyRGSy3yPj&usqp=CAE"/>
					</div>
				</div>
			</div>
	
	);
};

export default Home;
