import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider.js";

import "../../styles/header.css";


//include images into your bundle


//create your first component
const Header = () => {
	const [{basket}, dispatch] = useStateValue();
	return (
		<div className="header">
			<Link to="/" style={{textDecoration: "none"}}>
			<div className="header_logo">
				<StorefrontIcon className="header_logo_image" fontSize="large"/>
				<h2 className="header_logo_title">eShop</h2>
			</div>
			</Link>
			<div className="header_search">
				<input type="search" className="header_search_bar" />
				<SearchIcon className="header_searchIcon" fontSize="large"/>
			</div>
			<div className="header_nav">
			<Link to="/login" style={{textDecoration: "none"}}>
					<div className="nav_item">
					<span className="nav_itemLineOne">Hello Guest</span>
					<span className="nav_itemLineTwo">Sign in</span>
				</div>
			</Link>
				<div className="nav_item">
					<span className="nav_itemLineOne">Your</span>
					<span className="nav_itemLineTwo">Shop in</span>
				</div>
				<Link to="/checkout" style={{textDecoration: "none"}}>
					<div className="nav_item_basket">
						<ShoppingCartIcon fontSize="large" />
						<span className="nav_itemLineOne nav_basketCount">{basket.length}</span>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Header;
