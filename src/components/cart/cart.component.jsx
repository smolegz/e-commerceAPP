import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cart.styles.scss";

const Cart = ({ cartItems }) => (
	<div className='cart-dropdown'>
		<div className='cart-items'>
			{cartItems.map((cartItem) => (
				<CartItem key={cartItem.id} item={cartItem} />
			))}
		</div>
		<CustomButton>GO TO CHECK OUT</CustomButton>
	</div>
);

const mapStateToProps = ({ cartReducer: { cartItems } }) => ({
	cartItems,
});

export default connect(mapStateToProps)(Cart);
